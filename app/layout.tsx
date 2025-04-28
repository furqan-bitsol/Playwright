import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TopHeader } from '@/components/layouts/TopHeader';
import { MainHeader } from '@/components/layouts/MainHeader';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { Footer } from '@/components/layouts/Footer';
import { ClientProviders } from '@/components/providers/ClientProviders';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider, ToastViewport } from '@/components/ui/toast';
import { Toaster } from '@/components/ui/toaster';
import { ProductsProvider } from '@/contexts/ProductsContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Exclusive - Online Shopping',
    template: '%s | Exclusive',
  },
  description:
    'Shop the latest trends in fashion, electronics, and more at Exclusive.',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  readonly children: React.ReactNode;
  readonly params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <ClientProviders>
          <I18nProvider>
            <AuthProvider>
              <ToastProvider>
                <ProductsProvider>
                  <Toaster />
                  <ToastViewport />
                  <TopHeader />
                  <MainHeader />
                  {children}
                  <Footer />
                </ProductsProvider>
              </ToastProvider>
            </AuthProvider>
          </I18nProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
