import Box from '@/Components/Ui/Box';
import React from 'react';

const SecurityPage = () => {
  return (
    <Box>
      <div className="flex flex-col gap-4 rounded-xl bg-gray-300 px-6 py-6 dark:bg-gray-950  xl:px-20">
        <p className="text-lg font-bold">Block Multi Account</p>
        <div className="flex flex-col items-start gap-3">
          <p className="w-1/2 text-sm text-gray-700 dark:text-gray-400">
            if you activate this option we will block all login to your account
            from any other device until you disable it
          </p>
        </div>
      </div>
    </Box>
  );
};

export default SecurityPage;
