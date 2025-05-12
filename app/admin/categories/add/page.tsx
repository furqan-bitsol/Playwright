"use client";
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { addCategory, updateCategory, fetchCategories } from '@/store/categorySlice';
import { useRouter, useSearchParams } from 'next/navigation';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const categorySchema = z.object({
    name: z.string().min(2, 'Name is required'),
    icon: z.string().min(1, 'Icon is required'),
    parentId: z.string().optional(),
    subCategories: z.array(z.string().min(1)).optional(),
});

type CategoryFormData = z.infer<typeof categorySchema>;

export default function AddOrEditCategoryPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const { categories, loading, error } = useAppSelector((state: import('@/store/store').RootState) => state.categories);

    // Find category if editing
    const category = useMemo(() => categories.find((c) => String(c.id) === id), [categories, id]);

    const form = useForm<CategoryFormData>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: category?.name ?? '',
            icon: category?.icon ?? '',
            parentId: category?.parentId ?? '',
            subCategories: category?.subCategories?.map((sc) => sc.name) ?? [],
        },
    });

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    useEffect(() => {
        if (category) {
            form.reset({
                name: category.name,
                icon: category.icon,
                parentId: category.parentId ?? '',
                subCategories: category.subCategories?.map((sc) => sc.name) || [],
            });
        }
    }, [category, form]);

    const onSubmit = async (data: CategoryFormData) => {
        if (id && category) {
            console.log("update category=================", data);
            // Update the main category (do not update subCategories as a nested array)
            await dispatch(updateCategory({
                ...category,
                name: data.name,
                icon: data.icon,
                parentId: data.parentId || undefined,
            }));
            // Add new subcategories as separate categories
            if (data.subCategories && category.id) {
                for (const subName of data.subCategories) {
                    // Only add if not already present as a category with this parent
                    const exists = categories.some(
                        (cat) => cat.name === subName && cat.parentId === category.id
                    );
                    if (!exists) {
                        await dispatch(addCategory({
                            name: subName,
                            icon: category.icon,
                            parentId: category.id,
                        }));
                    }
                }
            }
        } else {
            console.log("add category=================", data);
            const result = await dispatch(addCategory({
                name: data.name,
                icon: data.icon,
                parentId: data.parentId || undefined,
            })).unwrap();

            if (data.subCategories && result.id) {
                for (const subName of data.subCategories) {
                    await dispatch(addCategory({
                        name: subName,
                        icon: result.icon,
                        parentId: result.id,
                    }));
                }
            }
        }
        router.push('/admin/categories');
    };

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                {id ? t('admin.editCategory', 'Edit Category') : t('admin.addCategory', 'Add Category')}
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded shadow p-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.categoryName', 'Category Name')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.categoryName', 'Category Name')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="icon"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.categoryIcon', 'Category Icon')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.categoryIcon', 'Icon name or URL')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="parentId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.parentCategory', 'Parent Category')}</FormLabel>
                                <FormControl>
                                    <select {...field} className="w-full border rounded px-3 py-2">
                                        <option value="">{t('admin.noParent', 'No Parent')}</option>
                                        {categories.map((cat) => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Subcategories as comma-separated input for simplicity */}
                    <FormField
                        control={form.control}
                        name="subCategories"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.subCategories', 'Subcategories')}</FormLabel>
                                <FormControl>
                                    <Input
                                        value={field.value?.join(', ') || ''}
                                        onChange={(e) => field.onChange(e.target.value.split(',').map((s) => s.trim()).filter(Boolean))}
                                        placeholder={t('admin.subCategoriesPlaceholder', 'Comma separated')}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading
                            ? t('admin.saving', 'Saving...')
                            : id
                                ? t('admin.saveCategory', 'Save Changes')
                                : t('admin.saveCategory', 'Save Category')}
                    </Button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
            </Form>
        </div>
    );
}
