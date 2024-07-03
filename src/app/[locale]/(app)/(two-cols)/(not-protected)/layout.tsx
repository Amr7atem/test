// import { options } from "@/app/api/auth/[...nextauth]/options";
import { Header } from '@/Components/Header';
import { Footer } from '@/Components/Footer';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import Link from 'next/link';
import { options } from '@/app/api/auth/[...nextauth]/options';
export default async function PostLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <Header />
      ) : (
        <>
          <div className=" relative col-span-1 hidden xl:flex"></div>
          <div className="z-50 mb-10 hidden w-full items-center justify-around border-b bg-gray-50 py-1.5 shadow-lg dark:bg-black xl:fixed xl:flex">
            <Link href="/">
              <Image
                src={logo}
                alt="ayyam logo"
                sizes="50x50"
                height={50}
                width={50}
                className="rounded-lg bg-black"
              />
            </Link>
            <div>
              <Link
                href="/home"
                className="rounded-full bg-black px-4 py-2 text-sm text-white shadow-lg dark:bg-white dark:text-black"
                type="submit"
              >
                Login
              </Link>
            </div>
          </div>
        </>
      )}
      <main
        className={`col-span-8  h-auto scroll-auto  ${!session && 'pt-20'}`}
      >
        {children}
      </main>

      <div className="col-span-10 flex items-center justify-center">
        <Footer />
      </div>
    </>
  );
}
