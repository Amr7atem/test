import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/Assets/logo/logo_w.png';

interface Props {
  onCloseModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupLoginForm = ({ onCloseModal }: Props) => {
  return (
    <form action="" className="flex flex-col items-center gap-8">
      <Image
        src={logo}
        alt="ayyam logo"
        height={100}
        width={100}
        className="rounded-xl bg-black "
      />
      <div>
        <input
          className="w-72 rounded-full  px-4 py-2 text-black shadow-lg dark:text-white"
          type="text"
          placeholder="username is Mohamed"
        />
      </div>
      <div>
        <input
          className="w-72 rounded-full px-4 py-2  text-black shadow-lg dark:text-white"
          type="password"
          placeholder="Password is nextAuth"
        />
      </div>
      <button
        className="rounded-full bg-black px-16 py-2 text-white shadow-lg dark:bg-white dark:text-black"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Login
      </button>

      <div>
        <p className="text-center ">
          <Link href="#" className="hover:font-bold">
            forget password?
          </Link>
        </p>
        <p className="text-center">
          {/*  eslint-disable-next-line react/no-unescaped-entities */}
          don't have an account{' '}
          <Link href="#" className="hover:font-bold">
            sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default PopupLoginForm;
