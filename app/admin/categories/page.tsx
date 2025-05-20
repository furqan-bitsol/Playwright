"use client";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { fetchCategories, deleteCategory } from '@/store/categorySlice';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CATEGORIES as CATEGORY_ICONS } from '@/mocks/categories';
import { Pagination } from '@/components/ui/Pagination';
import AdminTableSkeleton from "@/components/skeleton/AdminTableSkeleton";

export default function AdminCategoriesPage() {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const { categories, loading, error } = useAppSelector((state: import('@/store/store').RootState) => state.categories);
    const [deleteId, setDeleteId] = useState<string | null>(null);
    const [deleting, setDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const CATEGORIES_PER_PAGE = 5;
    const totalCategories = categories.length;
    const totalPages = Math.ceil(totalCategories / CATEGORIES_PER_PAGE);
    const sortedCategories = [...categories].sort((a, b) => a.name.localeCompare(b.name));
    const paginatedCategories = sortedCategories.slice(
        (currentPage - 1) * CATEGORIES_PER_PAGE,
        currentPage * CATEGORIES_PER_PAGE
    );

    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }
    }, [dispatch, categories]);

    // Helper to get parent category name
    const getParentName = (parentId: string | undefined) => {
        if (!parentId) return t('admin.noParent', 'No Parent');
        const parent = categories.find((cat) => cat.id === parentId);
        return parent ? parent.name : t('admin.unknown', 'Unknown');
    };

    const handleDelete = async () => {
        if (!deleteId) return;
        setDeleting(true);
        setDeleteError(null);
        try {
            await dispatch(deleteCategory(deleteId));
            setDeleteId(null);
        } catch (err: any) {
            setDeleteError(err.message ?? t('admin.deleteError', 'Delete failed.'));
        } finally {
            setDeleting(false);
        }
    };

    let content;
    if (loading) {
        content = (
            <AdminTableSkeleton />
        );
    } else if (error) {
        content = <p className="text-red-500">{error}</p>;
    } else if (categories.length === 0) {
        content = (
            <div className="bg-white rounded shadow p-4">
                <p className="text-gray-500">{t('admin.noCategories', 'No categories yet.')}</p>
            </div>
        );
    } else {
        content = (
            <>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded shadow">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left">{t('admin.categoryIcon', 'Icon')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.categoryName', 'Name')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.parentCategory', 'Parent')}</th>
                                <th className="px-4 py-2 text-left">{t('admin.actions', 'Actions')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedCategories.map((category) => (
                                <tr key={category.id} className="border-t">
                                    <td className="px-4 py-2">
                                        <span className=" w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                            {(CATEGORY_ICONS.find((c) => c.name === category.icon)?.Icon)
                                                ? React.createElement(CATEGORY_ICONS.find((c) => c.name === category.icon)!.Icon, { className: 'w-8 h-8', color: 'black' })
                                                : category.icon}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">{category.name}</td>
                                    <td className="px-4 py-2">{getParentName(category.parentId)}</td>
                                    <td className="px-4 py-2 space-x-2">
                                        <Link href={`/admin/categories/add?id=${category.id}`} className="text-blue-600 hover:underline">
                                            {t('admin.edit', 'Edit')}
                                        </Link>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            className="ml-2"
                                            onClick={() => setDeleteId(String(category.id))}
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
                <Pagination
                    page={currentPage}
                    pageCount={totalPages}
                    onPageChange={setCurrentPage}
                />
            </>
        );
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">{t('admin.categoriesTitle', 'Categories')}</h1>
                <Link href="/admin/categories/add" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    {t('admin.addCategory', 'Add Category')}
                </Link>
            </div>
            {content}
            {/* Delete confirmation dialog */}
            {deleteId && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm">
                        <h2 className="text-lg font-bold mb-4">{t('admin.confirmDelete', 'Confirm Delete')}</h2>
                        <p className="mb-4">{t('admin.confirmDeleteCategory', 'Are you sure you want to delete this category?')}</p>
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