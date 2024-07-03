import React from 'react';

export const AccountNumbersLg = () => {
  return (
    <div id="account-numbers" className="hidden justify-around xl:flex">
      <div className="flex gap-2">
        <p>0</p>
        <p className="font-light text-gray-400">posts</p>
      </div>
      <div className="flex gap-2">
        <p>0</p>
        <p className="font-light text-gray-400">followers</p>
      </div>
      <div className="flex gap-2">
        <p>0</p>
        <p className="font-light text-gray-400">followings</p>
      </div>
    </div>
  );
};
