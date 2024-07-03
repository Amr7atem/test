import React from 'react';
import { ProfileImage } from '@/Components/ProfileImage';
import Link from 'next/link';
import { AccountNumbersLg } from '../AccountNumbersLg';

export const AccountInfo = () => {
  return (
    <>
      <div className="flex items-center  gap-6  xl:gap-20">
        <ProfileImage className="!h-16 !w-16 xl:!h-32 xl:!w-32" />
        <div className="flex flex-col xl:gap-4">
          <div className="flex flex-col gap-2 xl:flex-row xl:gap-4">
            <h2 className="text-lg">Mohamed Almatry</h2>
            <div className="flex gap-2">
              <Link
                href="/settings"
                className="rounded-full  bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black"
              >
                Requests
              </Link>
              <Link
                href="/settings"
                className="rounded-full bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black"
              >
                My Account
              </Link>
            </div>
          </div>
          <AccountNumbersLg />
        </div>
      </div>
      <div>
        <p className="text-sm">
          Mohamed Almatry <br /> Software Engineer & Web developer 💻
        </p>
      </div>
    </>
  );
};
