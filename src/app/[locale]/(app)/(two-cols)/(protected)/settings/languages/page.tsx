import React from 'react';
import Box from '@/Components/Ui/Box';
import { IoMdCheckmark } from 'react-icons/io';

const LanguagesPage = () => {
  return (
    <Box className="gap-2">
      <h2 className="text-lg font-bold">Choose your language</h2>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <p>English</p>
        <div>
          <IoMdCheckmark size={25} />
        </div>
      </div>
      <div className=" flex flex-col justify-between gap-4 rounded-xl bg-gray-300 px-6 py-4 dark:bg-gray-950 xl:flex-row  xl:items-center xl:px-20">
        <p>Arabic</p>
        <div></div>
      </div>
    </Box>
  );
};

export default LanguagesPage;
