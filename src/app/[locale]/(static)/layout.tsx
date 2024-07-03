import { Footer } from '@/Components/Footer';
import type { Metadata } from 'next';
// import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

export const metadata: Metadata = {
  title: 'Welcome to Ayyam'
};

export default function StaticLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-new">{children}</div>
      <Footer />
    </>
  );
}
