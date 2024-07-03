import { Header } from '@/Components/Header';
import { Footer } from '@/Components/Footer';
export default function AppThreeColsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="col-span-6 h-auto flex-1 scroll-auto ">{children}</main>
      <aside className="col-span-2 hidden  flex-col items-center py-4 xl:flex">
        <div className="h-60 w-60 rounded-xl border shadow-lg dark:border-gray-600">
          <p>Ads</p>
        </div>
        <Footer />
      </aside>
    </>
  );
}
