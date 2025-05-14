"use client";
import { useEffect, useMemo, Suspense } from 'react';
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
import { CATEGORIES } from '@/mocks/categories';

const categorySchema = z.object({
    name: z.string().min(2, 'Name is required'),
    icon: z.string().min(1, 'Icon is required'),
    parentId: z.string().optional(),
});

type CategoryFormData = z.infer<typeof categorySchema>;

function AddOrEditCategoryPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams?.get('id');
    const { categories, loading, error } = useAppSelector((state: import('@/store/store').RootState) => state.categories);

    // Find category if editing
    const category = useMemo(() => categories.find((c) => String(c.id) === id), [categories, id]);

    const form = useForm<CategoryFormData>({
        resolver: zodResolver(categorySchema),
        defaultValues: {
            name: category?.name ?? '',
            icon: category?.icon ?? '',
            parentId: category?.parentId ?? '',
        },
    });

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }
    }, [dispatch, categories]);

    useEffect(() => {
        if (category) {
            form.reset({
                name: category.name,
                icon: category.icon,
                parentId: category.parentId ?? '',
            });
        }
    }, [category, form]);

    const onSubmit = async (data: CategoryFormData) => {
        if (id && category) {
            // Update the main category
            await dispatch(updateCategory({
                ...category,
                name: data.name,
                icon: data.icon,
                ...(data.parentId && { parentId: data.parentId }),
            }));
        } else {
            await dispatch(addCategory({
                name: data.name,
                icon: data.icon,
                ...(data.parentId && { parentId: data.parentId }),
            }));
        }
        router.push('/admin/categories');
    };

    // Compute button label to avoid nested ternary
    const buttonLabel = loading
        ? t('admin.saving', 'Saving...')
        : id
            ? t('admin.saveCategory', 'Save Changes')
            : t('admin.saveCategory', 'Save Category');

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
                                    <select {...field} className="w-full border rounded px-3 py-2">
                                        <option value="">{t('admin.selectIcon', 'Select Icon')}</option>
                                        {CATEGORIES.map((cat) => (
                                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                                        ))}
                                    </select>
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
                    <Button type="submit" className="w-full" disabled={loading}>
                        {buttonLabel}
                    </Button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
            </Form>
        </div>
    );
}

export default function AddOrEditCategoryPageWrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AddOrEditCategoryPage />
        </Suspense>
    );
}
