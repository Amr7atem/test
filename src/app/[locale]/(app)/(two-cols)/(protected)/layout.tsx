import { Header } from '@/Components/Header';
export default async function WithHeaderLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={`col-span-8  h-auto scroll-auto`}>{children}</main>
    </>
  );
}
