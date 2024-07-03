import { RegularButtonProps } from '@/Types';
import React, { ReactNode } from 'react';

const RegularButton = ({
  icon,
  counter,
  rounded = 'medium',
  comments,
  className,
  onMouseEnter,
  onMouseLeave,
  onClick
}: RegularButtonProps) => {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      className={`flex gap-1 rounded-full bg-gray-200 hover:opacity-50  dark:bg-[#f3f5f72e] ${
        rounded === 'medium' && 'px-3 py-1.5 '
      } ${rounded === 'full' && 'p-2'} ${className} `}
    >
      {icon}
      {counter && <p className="font-bold text-white">{comments}</p>}
    </button>
  );
};

export default RegularButton;
