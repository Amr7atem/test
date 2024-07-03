import React, { useState } from 'react';
import Lottie from 'lottie-react';
import angryIcon from '@/Assets/lottie_json/angry.json';
import cryIcon from '@/Assets/lottie_json/cry.json';
import heartIcon from '@/Assets/lottie_json/heart.json';
import laughIcon from '@/Assets/lottie_json/laugh.json';
import likeIcon from '@/Assets/lottie_json/like.json';
import { ReactionsContainerProps } from '@/Types';

const ReactionsContainer = ({
  handleIconClick,
  showBox
}: ReactionsContainerProps) => {
  const [selecting, setSelecting] = useState<boolean>(false);
  const lottieIcons = [
    { animationData: likeIcon, key: '1' },
    { animationData: heartIcon, key: '2' },
    { animationData: laughIcon, key: '3' },
    { animationData: angryIcon, key: '4' },
    { animationData: cryIcon, key: '5' }
  ];

  return (
    <div
      onMouseEnter={() => setSelecting(true)}
      onMouseLeave={() => setTimeout(() => setSelecting(false), 1000)}
      className={`absolute bottom-11 right-1 z-[900] flex gap-2 rounded-full bg-gray-200 px-4  py-2 transition-opacity duration-500  dark:border dark:border-gray-600 dark:bg-[#f3f5f770] ${
        showBox || selecting ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {lottieIcons.map((icon) => (
        <div
          key={icon.key}
          className="w-8 cursor-pointer"
          onClick={() => {
            handleIconClick(icon.key);
            setSelecting(false);
          }}
        >
          <Lottie animationData={icon.animationData} loop={true} />
        </div>
      ))}
    </div>
  );
};

export default ReactionsContainer;
