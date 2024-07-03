'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assets/logo/logo_w.png';
import appStore from '@/Assets/app store.png';
import googlePlay from '@/Assets/google play.png';
import { signIn } from 'next-auth/react';

// this is dummy form there no any check for it later i will use something like react form

const MainLoginForm = () => {
  const username = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const onSubmit = async () => {
    const result = await signIn('credentials', {
      username: username.current?.value,
      password: password.current?.value,
      redirect: true,
      callbackUrl: '/'
    });

    console.log(username.current?.value, password.current?.value);
  };

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-[#b9b9b988] p-20 dark:bg-[#000000c5]">
      {/* dark:bg-gray-950 */}
      <div className="flex w-96 flex-col items-center gap-8 rounded-xl border-white py-10  ">
        <Image src={logo} alt="ayyam logo" height={150} width={150} />
        <form action="" className="flex flex-col  gap-2">
          <div>
            <input
              className="w-72 rounded-full  px-4 py-2 text-black shadow-lg dark:text-white"
              type="text"
              placeholder="username is Mohamed"
              ref={(input: HTMLInputElement) => {
                username.current = input;
              }}
            />
          </div>
          <div>
            <input
              className="w-72 rounded-full px-4 py-2  text-black shadow-lg dark:text-white"
              type="password"
              placeholder="Password is nextAuth"
              ref={(input: HTMLInputElement) => {
                password.current = input;
              }}
            />
          </div>
          <button
            className="mt-4 rounded-full bg-black py-2 shadow-lg dark:bg-white dark:text-black "
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onSubmit();
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
          </div>
        </form>
      </div>
      <div className="flex w-96 flex-col items-center rounded-xl  py-2 ">
        {/*eslint-disable-next-line react/no-unescaped-entities */}
        <p>Don't have an account?</p>
        <p>
          <Link href="#" className="hover:font-bold">
            Sign up
          </Link>
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h4>Get app now</h4>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.genz.app"
          >
            <Image
              src={googlePlay}
              width={150}
              height={90}
              alt="download on google play"
            />
          </Link>
          <Link
            target="_blank"
            href="https://apps.apple.com/us/app/ayyam-%D8%A7%D9%8A%D8%A7%D9%85/id1624765334"
          >
            <Image
              src={appStore}
              width={150}
              height={75}
              alt="download on app store"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainLoginForm;
