'use client';
import { ProfileImage } from '@/Components/ProfileImage';
import { Modal } from '@/Components/Modal';
import Box from '@/Components/Ui/Box';
import Link from 'next/link';
import React from 'react';

const AccountPage = () => {
  return (
    <Box className="my-10 gap-4 xl:my-8">
      <h2 className="text-lg font-bold">Change My Profile Picture</h2>
      <div className=" flex items-center justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4  dark:bg-gray-950 xl:px-20">
        <div className="flex items-center gap-4">
          <ProfileImage className="h-14 w-14" />
          <p className="hidden xl:block">Mohamed Almatry</p>
        </div>
        <div>
          <Modal>
            <Modal.Open opens="change-pic">
              <button
                type="button"
                className="rounded-full bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black"
              >
                Change Photo
              </button>
            </Modal.Open>
            <Modal.Window name="change-pic">
              <div className="flex w-80 flex-col gap-4">
                <h2 className="text-center text-xl font-bold">
                  Change Profile Photo
                </h2>
                <div className="flex flex-col">
                  <button className="border-y py-4 text-lg dark:border-gray-600">
                    Upload Photo
                  </button>
                  <button className="te border-y py-4 text-lg text-red-500 dark:border-gray-600">
                    Remove Curren Photo
                  </button>
                </div>
              </div>
            </Modal.Window>
          </Modal>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <p>Profile Name</p>
        <div>
          <input
            className="w-72 rounded-full  px-4 py-2 shadow-lg xl:w-96"
            type="text"
            placeholder="Name"
            value="Mohamed Almatry"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <p>Bio</p>
        <div>
          <textarea
            className="h-40 w-72 resize-none rounded-xl px-4 py-2 shadow-lg xl:h-60 xl:w-96"
            placeholder="Message"
            value="Software Engineer"
          />
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <Link
          href="settings/privacy"
          className="w-full rounded-xl px-2 py-2 text-red-500"
        >
          <p>deactivate my account</p>
        </Link>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <Link
          href="settings/privacy"
          className="w-full rounded-xl px-2 py-2 text-red-500"
        >
          <p>remove my account</p>
        </Link>
      </div>
    </Box>
  );
};

export default AccountPage;
