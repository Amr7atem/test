'use client';
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import angryIcon from '@/Assets/lottie_json/angry.json';
import cryIcon from '@/Assets/lottie_json/cry.json';
import heartIcon from '@/Assets/lottie_json/heart.json';
import laughIcon from '@/Assets/lottie_json/laugh.json';
import likeIcon from '@/Assets/lottie_json/like.json';
import { LottieBoxProps } from '@/Types';

const LottieBox = ({ handleReaction, reaction }: LottieBoxProps) => {
  const [activeReaction, setActiveReaction] = useState<string>('0');

  const handleActiveReaction = (reactionType: string) => {
    handleReaction(reactionType);
    setActiveReaction(reactionType);
  };

  return (
    <div className="flex w-full items-center justify-around">
      <div
        className={`flex w-14 cursor-pointer justify-center py-2 transition-all duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 ${activeReaction === '0' && 'border-b-4'}`}
        onClick={() => handleActiveReaction('0')}
      >
        <Lottie className="w-8" animationData={likeIcon} loop={false} />
      </div>
      <div
        className={`flex w-14 cursor-pointer  justify-center py-2 transition-all duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 ${activeReaction === '1' && 'border-b-4'}`}
        onClick={() => handleActiveReaction('1')}
      >
        <Lottie className="w-8" animationData={heartIcon} loop={false} />
      </div>
      <div
        className={`flex w-14 cursor-pointer justify-center py-2 transition-all duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 ${activeReaction === '2' && 'border-b-4'}`}
        onClick={() => handleActiveReaction('2')}
      >
        <Lottie className="w-10" animationData={laughIcon} loop={false} />
      </div>
      <div
        className={`flex w-14 cursor-pointer justify-center py-2 transition-all duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 ${activeReaction === '3' && 'border-b-4'}`}
        onClick={() => handleActiveReaction('3')}
      >
        <Lottie className="w-10" animationData={angryIcon} loop={false} />
      </div>
      <div
        className={`flex w-14 cursor-pointer justify-center py-2 transition-all duration-100 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-800 ${activeReaction === '4' && 'border-b-4'}`}
        onClick={() => handleActiveReaction('4')}
      >
        <Lottie className="w-10" animationData={cryIcon} loop={false} />
      </div>
    </div>
  );
};

export default LottieBox;
