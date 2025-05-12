"use client";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function AdminDashboardPage() {
    const { t } = useTranslation();
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">{t('admin.dashboardTitle', 'Admin Dashboard')}</h1>
            <div className="space-y-4">
                <Link href="/admin/categories" className="block p-4 bg-blue-100 rounded hover:bg-blue-200 transition">
                    {t('admin.manageCategories', 'Manage Categories')}
                </Link>
                <Link href="/admin/products" className="block p-4 bg-green-100 rounded hover:bg-green-200 transition">
                    {t('admin.manageProducts', 'Manage Products')}
                </Link>
            </div>
        </div>
    );
} 