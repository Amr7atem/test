import React from 'react';
import Box from '@/Components/Ui/Box';
import Link from 'next/link';

const EarningsPage = () => {
  return (
    <>
      <div className="m-auto flex w-full justify-between gap-4">
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0.00007$
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
      </div>
      <div className="m-auto flex w-full justify-between gap-4">
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0.00007$
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
      </div>
      <div className="m-auto flex w-full justify-between gap-4">
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
        <Box className="h-40 w-1/2">
          <h2 className="flex flex-row items-center justify-center text-xl font-bold">
            0.00007$
          </h2>
          <p className="text-center text-sm text-gray-300">Number of posts</p>
        </Box>
      </div>
      <div className="m-auto flex w-full justify-between gap-4">
        <div className=" flex w-full flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
          <Link
            href="settings/privacy"
            className="w-full rounded-xl px-2 py-2 text-blue-500"
          >
            <p>Withdrawn Money</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EarningsPage;
