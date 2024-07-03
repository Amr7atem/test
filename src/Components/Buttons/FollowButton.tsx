import { FollowButtonProps } from '@/Types';
import React from 'react';

const FollowButton = ({ className }: FollowButtonProps) => {
  return (
    <button
      type="button"
      className={` rounded-full border px-4 text-sm font-bold shadow-sm hover:border-gray-500 hover:text-gray-500
      ${className}`}
    >
      Follow
    </button>
  );
};

export default FollowButton;
