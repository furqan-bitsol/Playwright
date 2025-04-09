import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TopHeader } from '@/components/home/TopHeader';
import { MainHeader } from '@/components/home/MainHeader';
import { I18nProvider } from '@/components/providers/I18nProvider';
import { Footer } from '@/components/home/Footer';

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
        <I18nProvider>
          <TopHeader />
          <MainHeader />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
