'use client';
import React, { useState } from 'react';
import { Modal } from '@/Components/Modal';
import PopupLoginForm from '@/Components/Forms/PopupLoginForm';

const RealsPage = () => {
  return (
    <div>
      {/* <button
        onClick={() => {
          setIsOpenModal(true);
        }}
        className="border"
      >
        Toggle Modal
      </button>
      {isOpenModal && (
        <Modal onClose={setIsOpenModal}>
          <PopupLoginForm onCloseModal={setIsOpenModal} />
        </Modal>
      )} */}

      <Modal>
        <Modal.Open opens="login-form">
          <button type="button" className="border">
            Open Modal Modal
          </button>
        </Modal.Open>
        <Modal.Window name="login-form">
          <PopupLoginForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default RealsPage;
