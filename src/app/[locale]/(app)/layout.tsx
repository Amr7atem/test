import { MobileMenu } from '@/Components/MobileMenu';
import { MobileSearchBar } from '@/Components/MobileSearchBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'أيام-Ayyam'
};

export default function AppLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col pt-20 font-new xl:grid xl:grid-cols-10 xl:pt-0 ">
      <MobileSearchBar />
      {children}
      <MobileMenu />
    </div>
  );
}

{
  /* <aside className="col-span-2 hidden  flex-col items-center py-4 xl:flex">
<div className="h-60 w-60 rounded-xl bg-slate-900">
  <p>Ads</p>
</div>
<Footer />
</aside> */
}
