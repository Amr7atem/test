import React from 'react';
import { TiHome } from 'react-icons/ti';
import Link from 'next/link';
import { TfiVideoClapper } from 'react-icons/tfi';
import { IoMdAddCircle } from 'react-icons/io';
import { PiClockCountdownBold } from 'react-icons/pi';
import { FaMessage } from 'react-icons/fa6';
import { ProfileImage } from '@/Components/ProfileImage';

export const MobileMenu = () => {
  return (
    <menu className="fixed bottom-0 flex h-12 w-full items-center justify-around border-t border-gray-300 bg-white px-4 dark:bg-black xl:hidden">
      <Link href="/">
        <TiHome size={30} />
      </Link>
      <Link href="/reals">
        <TfiVideoClapper size={22} />
      </Link>
      <Link href="#">
        <IoMdAddCircle size={30} />
      </Link>
      <Link href="/moments">
        <PiClockCountdownBold size={30} />
      </Link>
      <Link href="/messages">
        <FaMessage size={25} />
      </Link>

      <Link href={'/profile'}>
        <ProfileImage className="!h-8 !w-8" />
      </Link>
    </menu>
  );
};
