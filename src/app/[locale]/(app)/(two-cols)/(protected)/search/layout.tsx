export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center py-4">
        <div className="w-full">
          <input
            type="search"
            placeholder="Search"
            className="w-4/5 rounded-full bg-gray-100 px-4 py-2.5 text-black shadow-lg dark:bg-gray-800  dark:text-white"
          />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}
