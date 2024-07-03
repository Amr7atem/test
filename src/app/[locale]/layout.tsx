import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import AuthProvider from '@/Providers/AuthProvider';
import { ThemeProvider } from '@/Providers/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Welcome to Ayyam'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} dark:bg-black bg-gray-100`}>
        <ThemeProvider>
          <AuthProvider>
            <div className="relative">{children}</div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
