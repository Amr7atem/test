import React from 'react';
import SendMessage from '@/Components/icons/SVG';

interface Props {
  size: number;
}

const SendMessageIcon = ({ size }: Props) => {
  return (
    <div className="p group flex cursor-pointer items-center justify-center rounded-full bg-[#f3f5f72e] p-2 hover:border-gray-500 dark:border">
      <SendMessage
        name="send"
        className=" opacity-100 group-hover:opacity-50"
        size={size}
      />
    </div>
  );
};

export default SendMessageIcon;
