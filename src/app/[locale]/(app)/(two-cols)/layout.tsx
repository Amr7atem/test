export default function AppTwoColsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {/* <aside className="col-span-2 hidden  flex-col items-center py-4 xl:flex">
          <div className="h-60 w-60 rounded-xl bg-slate-900">
            <p>Ads</p>
          </div>
          <Footer />
        </aside> */}
    </>
  );
}
