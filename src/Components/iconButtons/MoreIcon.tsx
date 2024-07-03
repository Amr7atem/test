import React from "react";
import { IoIosMore } from "react-icons/io";

const MoreIcon = () => {
  return (
    <div className="group cursor-pointer rounded-full border bg-gray-200 p-1 text-sm font-bold hover:bg-gray-100 dark:border-none dark:bg-[#f3f5f72e]">
      <IoIosMore size={24} />
    </div>
  );
};

export default MoreIcon;
