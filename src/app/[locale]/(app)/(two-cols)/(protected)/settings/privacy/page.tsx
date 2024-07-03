import React from 'react';
import Box from '@/Components/Ui/Box';

const PrivacyPage = () => {
  return (
    <Box className="gap-8">
      <div className="flex flex-col gap-4 rounded-xl bg-gray-300 px-6 py-6 dark:bg-gray-950  xl:px-20">
        <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center ">
          <p className="text-lg font-bold">My Account is Private</p>
          <button
            type="button"
            className="rounded-full bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black"
          >
            Not Active
          </button>
        </div>
        <p className="text-xs text-gray-700 dark:text-gray-400">
          Only people that are approved following you will be able to see your
          posts, by activating this option we will ask you to approve each new
          following request you receive
        </p>
      </div>
      <div className="flex flex-col gap-4 rounded-xl bg-gray-300 px-6 py-6 dark:bg-gray-950  xl:px-20">
        <p className="text-lg font-bold">Who can Chat with you?</p>
        <div className="flex flex-col items-start gap-3">
          <button className="text-gray-700 dark:text-gray-400">
            Mutual Follow require
          </button>
          <button className="text-gray-700 dark:text-gray-400">
            Mutual Follow require or just following me
          </button>
          <button className="text-gray-700 dark:text-gray-400">Everyone</button>
        </div>
      </div>
    </Box>
  );
};

export default PrivacyPage;
