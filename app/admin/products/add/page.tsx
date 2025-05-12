"use client";
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { addProduct, updateProduct, fetchProducts } from '@/store/productSlice';
import { fetchCategories } from '@/store/categorySlice';
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
import { useToast } from '@/hooks/use-toast';

const productSchema = z.object({
    title: z.string().min(2, 'Title is required'),
    image: z.string().url('Image URL is required'),
    price: z.coerce.number().min(0, 'Price is required'),
    originalPrice: z.coerce.number().optional(),
    discount: z.coerce.number().optional(),
    bestSelling: z.boolean().optional(),
    featured: z.boolean().optional(),
    rating: z.coerce.number().min(0).max(5),
    reviewCount: z.coerce.number().min(0),
    description: z.string().optional(),
    colors: z.string().optional(), // comma separated
    sizes: z.string().optional(), // comma separated (size:count)
    stockStatus: z.enum(['In Stock', 'Out of Stock', 'Limited Stock']).optional(),
    categoryId: z.string().min(1, 'Category is required'),
});

type ProductFormData = z.infer<typeof productSchema>;

export default function AddOrEditProductPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const { products, loading, error } = useAppSelector((state: import('@/store/store').RootState) => state.products);
    const { categories } = useAppSelector((state: import('@/store/store').RootState) => state.categories);
    const { toast } = useToast();

    // Find product if editing
    const product = useMemo(() => products.find((p) => String(p.id) === id), [products, id]);

    const form = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            title: product?.title || '',
            image: product?.image || '',
            price: product?.price || 0,
            originalPrice: product?.originalPrice,
            discount: product?.discount,
            bestSelling: product?.bestSelling || false,
            featured: product?.featured || false,
            rating: product?.rating || 0,
            reviewCount: product?.reviewCount || 0,
            description: product?.description || '',
            colors: product?.colors?.join(', ') || '',
            sizes: product?.sizes?.map((s) => `${s.size}:${s.count}`).join(', ') || '',
            stockStatus: product?.stockStatus,
        },
    });

    useEffect(() => {
        dispatch(fetchCategories());
        if (!products.length) dispatch(fetchProducts());
    }, [dispatch, products.length]);

    useEffect(() => {
        if (product) {
            form.reset({
                title: product.title,
                image: product.image,
                price: product.price,
                originalPrice: product.originalPrice,
                discount: product.discount,
                bestSelling: product.bestSelling || false,
                featured: product.featured || false,
                rating: product.rating,
                reviewCount: product.reviewCount,
                description: product.description || '',
                colors: product.colors?.join(', ') || '',
                sizes: product.sizes?.map((s) => `${s.size}:${s.count}`).join(', ') || '',
                stockStatus: product.stockStatus,
            });
        }
    }, [product, form]);

    const onSubmit = async (data: ProductFormData) => {
        try {
            if (id && product) {
                await dispatch(updateProduct({
                    ...product,
                    ...data,
                    colors: data.colors ? data.colors.split(',').map((c) => c.trim()) : undefined,
                    sizes: data.sizes
                        ? data.sizes.split(',').map((s) => {
                            const [size, count] = s.split(':').map((v) => v.trim());
                            return { size, count: Number(count) };
                        })
                        : undefined,
                })).unwrap();
                toast({
                    title: t('admin.editProductSuccess', 'Product updated!'),
                    description: t('admin.editProductSuccessDesc', 'The product was updated successfully.'),
                    variant: 'success',
                });
            } else {
                await dispatch(addProduct({
                    title: data.title,
                    image: data.image,
                    price: data.price,
                    originalPrice: data.originalPrice,
                    discount: data.discount,
                    bestSelling: data.bestSelling,
                    featured: data.featured,
                    rating: data.rating,
                    reviewCount: data.reviewCount,
                    description: data.description,
                    colors: data.colors ? data.colors.split(',').map((c) => c.trim()) : undefined,
                    sizes: data.sizes
                        ? data.sizes.split(',').map((s) => {
                            const [size, count] = s.split(':').map((v) => v.trim());
                            return { size, count: Number(count) };
                        })
                        : undefined,
                    stockStatus: data.stockStatus,
                })).unwrap();
                toast({
                    title: t('admin.addProductSuccess', 'Product added!'),
                    description: t('admin.addProductSuccessDesc', 'The product was added successfully.'),
                    variant: 'success',
                });
            }
            router.push('/admin/products');
        } catch (err: any) {
            toast({
                title: t('admin.productError', 'Error'),
                description: err.message || t('admin.productErrorDesc', 'Something went wrong.'),
                variant: 'destructive',
            });
        }
    };

    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">
                {id ? t('admin.editProduct', 'Edit Product') : t('admin.addProduct', 'Add Product')}
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white rounded shadow p-6">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productTitle', 'Product Title')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.productTitle', 'Product Title')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productImage', 'Image URL')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.productImage', 'Image URL')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productPrice', 'Price')}</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} placeholder={t('admin.productPrice', 'Price')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="originalPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productOriginalPrice', 'Original Price')}</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} placeholder={t('admin.productOriginalPrice', 'Original Price')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="discount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productDiscount', 'Discount')}</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} placeholder={t('admin.productDiscount', 'Discount')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bestSelling"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productBestSelling', 'Best Selling')}</FormLabel>
                                <FormControl>
                                    <input type="checkbox" checked={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="featured"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productFeatured', 'Featured')}</FormLabel>
                                <FormControl>
                                    <input type="checkbox" checked={field.value} onChange={field.onChange} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rating"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productRating', 'Rating')}</FormLabel>
                                <FormControl>
                                    <Input type="number" step="0.1" min="0" max="5" {...field} placeholder={t('admin.productRating', 'Rating')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="reviewCount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productReviewCount', 'Review Count')}</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} placeholder={t('admin.productReviewCount', 'Review Count')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productDescription', 'Description')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.productDescription', 'Description')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="colors"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productColors', 'Colors')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.productColors', 'Comma separated colors')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sizes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productSizes', 'Sizes')}</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder={t('admin.productSizes', 'Comma separated (e.g. S:10, M:5)')} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="stockStatus"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('admin.productStockStatus', 'Stock Status')}</FormLabel>
                                <FormControl>
                                    <select {...field} className="w-full border rounded px-3 py-2">
                                        <option value="">{t('admin.productStockStatus', 'Select stock status')}</option>
                                        <option value="In Stock">{t('admin.inStock', 'In Stock')}</option>
                                        <option value="Out of Stock">{t('admin.outOfStock', 'Out of Stock')}</option>
                                        <option value="Limited Stock">{t('admin.limitedStock', 'Limited Stock')}</option>
                                    </select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading
                            ? t('admin.saving', 'Saving...')
                            : id
                                ? t('admin.saveProduct', 'Save Changes')
                                : t('admin.saveProduct', 'Save Product')}
                    </Button>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </form>
            </Form>
        </div>
    );
} 