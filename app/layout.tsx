import '@/app/ui/global.css'
import { inter } from './ui/fonts';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    template:'%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The Next.js Project of Dashboard, built by saeed pk',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Suspense >
          {children}
        </Suspense>
      </body>
    </html>
  );
}
