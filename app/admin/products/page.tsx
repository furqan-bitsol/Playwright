"use client";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchProducts, deleteProduct } from '@/store/productSlice';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminProductsPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { products, loading, error } = useAppSelector((state: import('@/store/store').RootState) => state.products);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleDelete = async () => {
        if (!deleteId) return;
        setDeleting(true);
        setDeleteError(null);
        try {
            await dispatch(deleteProduct(deleteId));
            setDeleteId(null);
        } catch (err: any) {
            setDeleteError(err.message || t('admin.deleteError', 'Delete failed.'));
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">{t('admin.productsTitle', 'Products')}</h1>
                <Link href="/admin/products/add" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
                    {t('admin.addProduct', 'Add Product')}
                </Link>
            </div>
            {loading ? (
                <p>{t('admin.loading', 'Loading...')}</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : products.length === 0 ? (
                <div className="bg-white rounded shadow p-4">
                    <p className="text-gray-500">{t('admin.noProducts', 'No products yet.')}</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">{t('admin.productImage', 'Image')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.productTitle', 'Title')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.productPrice', 'Price')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.productStockStatus', 'Stock')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.actions', 'Actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-t">
                                    <td className="px-4 py-2">
                                        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
                                    </td>
                                    <td className="px-4 py-2">{product.title}</td>
                                    <td className="px-4 py-2">${product.price}</td>
                                    <td className="px-4 py-2">{product.stockStatus || t('admin.inStock', 'In Stock')}</td>
                                    <td className="px-4 py-2 space-x-2">
                                        <Link href={`/admin/products/add?id=${product.id}`} className="text-blue-600 hover:underline">
                                            {t('admin.edit', 'Edit')}
                                        </Link>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="ml-2"
                                            onClick={() => setDeleteId(String(product.id))}
                                            disabled={deleting}
                                        >
                                            {t('admin.delete', 'Delete')}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {/* Delete confirmation dialog */}
            {deleteId && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm">
                        <h2 className="text-lg font-bold mb-4">{t('admin.confirmDelete', 'Confirm Delete')}</h2>
                        <p className="mb-4">{t('admin.confirmDeleteProduct', 'Are you sure you want to delete this product?')}</p>
                        {deleteError && <p className="text-red-500 mb-2">{deleteError}</p>}
                        <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setDeleteId(null)} disabled={deleting}>
                                {t('admin.cancel', 'Cancel')}
                            </Button>
                            <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
                                {deleting ? t('admin.deleting', 'Deleting...') : t('admin.delete', 'Delete')}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
} 