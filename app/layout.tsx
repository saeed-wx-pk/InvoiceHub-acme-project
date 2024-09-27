import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Head from 'next/head';

export const metadata: Metadata = {
  title: {
    template:'%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6325748192235388"
      crossOrigin="anonymous"></script>
      </Head>
      <body className={`${inter.className} antialiased`}>
        <Suspense >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
