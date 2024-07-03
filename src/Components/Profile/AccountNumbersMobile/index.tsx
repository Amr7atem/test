import React from 'react';

export const AccountNumbersMobile = () => {
  return (
    <div
      id="account-numbers-mobile"
      className="flex w-full justify-around border-y  py-2 xl:hidden"
    >
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm">0</p>
        <p className="text-sm font-light text-gray-400">posts</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm">0</p>
        <p className="text-sm font-light text-gray-400">followers</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm">0</p>
        <p className="text-sm font-light text-gray-400">following</p>
      </div>
    </div>
  );
};
