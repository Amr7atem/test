'use client';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { Modal } from '@/Components/Modal';
import CreatePostForm from '@/Components/Forms/CreatePostForm';
const CreatePostButton = () => {
  return (
    <Modal>
      <Modal.Open opens="create-post">
        <div className="cursor-pointer">
          <li className="flex w-56 items-center  gap-2 rounded-xl px-2 py-1.5 hover:bg-gray-200 dark:hover:bg-[#f3f5f72e]">
            <IoMdAddCircle size={30} />
            <p className="">Create</p>
          </li>
        </div>
      </Modal.Open>
      <Modal.Window name="create-post">
        <CreatePostForm />
      </Modal.Window>
    </Modal>
  );
};

export default CreatePostButton;
