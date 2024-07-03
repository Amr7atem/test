'use client';
import React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import angryIcon from '@/Assets/lottie_json/angry.json';
import cryIcon from '@/Assets/lottie_json/cry.json';
import heartIcon from '@/Assets/lottie_json/heart.json';
import laughIcon from '@/Assets/lottie_json/laugh.json';
import likeIcon from '@/Assets/lottie_json/like.json';
import { Modal } from '../Modal';
import PopupLottieIcons from './PopupLottieIcons/PopupLottieIcons';

interface Reactions {
  reactions: {
    [key: string]: number;
  };
}

interface Props {
  reactions?: Reactions;
}
const LottieIconsBox = ({ reactions }: Props) => {
  if (!reactions?.reactions) return;

  return (
    <Modal>
      <Modal.Open opens="reactions-modal">
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <div className="relative  flex w-8 translate-x-2 cursor-pointer flex-col items-center justify-center">
              <Lottie animationData={likeIcon} loop={false} />
              <p className="translate-y-[-.6rem]  rounded-full border bg-gray-200 px-1 text-xs font-bold dark:bg-black">
                {reactions?.reactions['1']}
              </p>
            </div>
            <div className="relative flex w-8 translate-x-[-.20rem] cursor-pointer flex-col items-center justify-center">
              <Lottie animationData={heartIcon} loop={false} />
              <p className="translate-y-[-.6rem] rounded-full border bg-gray-200 px-1 text-xs font-bold dark:bg-black">
                {reactions?.reactions['2']}
              </p>
            </div>
            <div className="relative flex  w-10 translate-x-[-.90rem] cursor-pointer flex-col items-center justify-center">
              <Lottie animationData={laughIcon} loop={false} />
              <p className="translate-y-[-.8rem] rounded-full  border bg-gray-200 px-1 text-xs font-bold dark:bg-black">
                {reactions?.reactions['3']}
              </p>
            </div>
            <div className="relative flex w-10 translate-x-[-2rem] cursor-pointer flex-col items-center justify-center">
              <Lottie animationData={angryIcon} loop={false} />
              <p className="translate-y-[-.8rem] rounded-full  border bg-gray-200 px-1 text-xs font-bold dark:bg-black">
                {reactions?.reactions['4']}
              </p>
            </div>
            <div className="relative flex w-11 translate-x-[-3.2rem] cursor-pointer flex-col items-center justify-center">
              <Lottie animationData={cryIcon} loop={false} />
              <p className=" translate-y-[-.9rem]  rounded-full border bg-gray-200 px-1 text-xs font-bold  dark:bg-black ">
                {reactions?.reactions['5']}
              </p>
            </div>
          </div>
        </div>
      </Modal.Open>
      <Modal.Window name="reactions-modal">
        <PopupLottieIcons />
      </Modal.Window>
    </Modal>
  );
};

export default LottieIconsBox;

// absolute left-[.40rem] top-[1.1rem]
// absolute left-[.40rem] top-[1.1rem]
// absolute left-[.60rem] top-[1.35rem]
// absolute left-[.65rem] top-[1.30rem]
// absolute left-3 top-[1.50rem]
