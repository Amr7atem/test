import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import googlePlay from '@/Assets/google play.png';
import appStore from '@/Assets/app store.png';

import { TiHome } from 'react-icons/ti';
import { IoSearch } from 'react-icons/io5';
import { IoMdAddCircle } from 'react-icons/io';
import { TfiVideoClapper } from 'react-icons/tfi';
import { PiClockCountdownBold } from 'react-icons/pi';
import { FaMessage } from 'react-icons/fa6';
import { IoIosSettings } from 'react-icons/io';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { HeaderLink } from './components/HeaderLink';
import { ProfileImage } from '@/Components/ProfileImage';
import { getPost } from '@/services/getPost';
import CreatePostButton from '@/Components/Buttons/CreatePostButton';

export const Header = async () => {
  const data = await getPost('9012');
  if (!data) return;
  return (
    <header className=" relative col-span-2 hidden xl:flex">
      <div className="fixed flex h-full flex-col justify-evenly border-r px-2 shadow-xl dark:border-gray-600 ">
        <div className="flex flex-col gap-1">
          <Link href="/" className="">
            <Image
              src={logo}
              alt="Ayyam logo"
              sizes="70x70"
              width={70}
              height={70}
              className="ml-5 rounded-xl bg-black"
            />
          </Link>
          <ul className="flex flex-col gap-4 px-4">
            <HeaderLink
              label="Home"
              labelPt="pt-2"
              icon={<TiHome size={30} />}
            />

            <HeaderLink
              label="Search"
              href="search"
              icon={<IoSearch size={30} />}
            />

            <HeaderLink
              label="Reals"
              href="reals"
              icon={<TfiVideoClapper size={30} />}
            />

            <HeaderLink
              label="Moments"
              href="moments"
              icon={<PiClockCountdownBold size={30} />}
            />

            <HeaderLink
              label="Messages"
              href="messages"
              icon={<FaMessage size={25} />}
            />

            <HeaderLink
              label="Notifications"
              icon={<MdOutlineNotificationsNone size={25} />}
            />
            <CreatePostButton />
            <HeaderLink
              label="Settings"
              href="settings"
              icon={<IoIosSettings size={30} />}
            />
            <HeaderLink
              label="Profile"
              icon={<ProfileImage size={10} hasStory />}
              href={`profile/${data.list.user_id}`}
            />
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-48 w-48  rounded-xl border py-1  shadow-sm shadow-gray-400 dark:border-gray-600 dark:shadow-sm">
            <h3 className="pb-4 text-center font-bold"> Get App</h3>
            <div className="flex flex-col items-center gap-2">
              <Link
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.genz.app"
              >
                <Image
                  src={googlePlay}
                  width={150}
                  height={70}
                  alt="download on google play"
                />
              </Link>
              <Link
                target="_blank"
                href="https://apps.apple.com/us/app/ayyam-%D8%A7%D9%8A%D8%A7%D9%85/id1624765334"
              >
                <Image
                  src={appStore}
                  width={145}
                  height={70}
                  alt="download on app store"
                />
              </Link>
            </div>
          </div>
          {/* <ul className="flex flex-col gap-4 px-4"></ul> */}
        </div>
      </div>
    </header>
  );
};
