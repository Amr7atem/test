import { ProfileImage } from '@/Components/ProfileImage';
import Box from '@/Components/Ui/Box';
import { ThemeSwitcher } from '@/Components/ThemeSwitcher';
import Link from 'next/link';
import React from 'react';

const SettingsPage = () => {
  return (
    <>
      <Box className="gap-1">
        <h2 className="text-lg font-bold">Profile Settings</h2>
        <Link
          href="settings/my-account "
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <div className="flex items-center gap-4">
            <ProfileImage className="h-14 w-14" />
            <p>Mohamed Almatry</p>
          </div>
        </Link>
      </Box>

      <Box className="gap-1">
        <h2 className="text-lg font-bold">My contacts</h2>
        <Link
          href="settings/my-account "
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Video library</p>
        </Link>
        <Link
          href="settings/my-account "
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Photo library</p>
        </Link>
        <Link
          href="settings/my-account "
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>My pages</p>
        </Link>
      </Box>
      <Box className="gap-1">
        <h2 className="text-lg font-bold">Rewards</h2>

        <Link
          href="settings/my-earnings"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>My Earnings</p>
        </Link>
      </Box>
      <Box className="gap-1">
        <h2 className="text-lg font-bold">Settings</h2>

        <Link
          href="settings/privacy"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Privacy</p>
        </Link>
        <Link
          href="settings/security"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Security</p>
        </Link>
        <Link
          href="settings/notifications"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Notifications</p>
        </Link>
      </Box>
      <Box className="gap-1">
        <h2 className="text-lg font-bold">Appearance</h2>
        <Link
          href="settings/languages"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Languages</p>
          <h1 className="dark:text-red-500 text-green-500">Hello World</h1>
        </Link>
        <ThemeSwitcher />
      </Box>
      <Box className="gap-1">
        <h2 className="text-lg font-bold">Support</h2>

        <Link
          href="/contact-us"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Help And Contact</p>
        </Link>
        <Link
          href="/privacy"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p>Privacy</p>
        </Link>
        <Link
          href="/api/auth/signout"
          className="rounded-xl px-2 py-2 hover:bg-gray-300 dark:hover:bg-gray-950"
        >
          <p className="font-bold text-red-500">Logout</p>
        </Link>
      </Box>
    </>
  );
};

export default SettingsPage;
