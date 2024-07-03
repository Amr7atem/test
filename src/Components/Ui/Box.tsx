import { BoxProps } from '@/Types';
import React from 'react';

const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={`flex flex-col rounded-xl border bg-gray-200 px-6 py-6 shadow-lg dark:border-none dark:bg-[#f3f5f72e] ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
