import Box from '@/Components/Ui/Box';
import React from 'react';

const NotificationPage = () => {
  return (
    <Box className="gap-4">
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <p>Chat message notification</p>
        <div>
          <button>Switch Button</button>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <div>
          <p>Social activities</p>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            We will notify you when people react on your posts
          </p>
        </div>
        <div>
          <button>Switch Button</button>
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <div>
          <p>Business notification</p>
          <p className="text-xs text-gray-700 dark:text-gray-400">
            about your pages
          </p>
        </div>
        <div>
          <button>Switch Button</button>
        </div>
      </div>
    </Box>
  );
};

export default NotificationPage;
