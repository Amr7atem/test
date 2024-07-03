import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import logo from '@/Assets/logo/logo_w.png';

export const MobileSearchBar = () => {
  return (
    <div className=" search-bar fixed top-0 z-[99999] flex h-14 w-full items-center justify-around gap-4 border-b border-gray-300 bg-white py-8 dark:bg-black xl:hidden">
      <Link href="/">
        <Image
          src={logo}
          alt="ayyam"
          width={60}
          height={60}
          sizes="60x60"
          className="rounded-xl bg-black "
        />
      </Link>
      <div>
        <input
          type="search"
          placeholder="Search"
          className="w-72 rounded-full bg-gray-100 px-4 py-2 text-black shadow-lg dark:bg-gray-800  dark:text-white"
        />
      </div>
      <Link href="#">
        <MdOutlineNotificationsNone size={40} />
      </Link>
    </div>
  );
};
