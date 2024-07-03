'use client';
import React, { useState } from 'react';
import LottieBox from './LottieBox';
import { ProfileImage } from '@/Components/ProfileImage';
import FollowButton from '@/Components/Buttons/FollowButton';
interface CommentProps {
  name: string;
}

const Comment = ({ name }: CommentProps) => {
  return (
    <div className="mb-4 flex w-full justify-between">
      <div className="flex items-center gap-4">
        <ProfileImage className="w-10" />
        <p>{name}</p>
      </div>
      <FollowButton className="py-2" />
    </div>
  );
};

const PopupLottieIcons = () => {
  const dummyReactions: { [key: string]: CommentProps[] } = {
    '0': [{ name: 'Mohamed Almatry' }],
    '1': [
      { name: 'Mohamed said' },
      { name: 'Mohamed shady' },
      { name: 'Mohamed fady' },
      { name: 'Mohamed fares' }
    ],
    '2': [
      { name: 'Mohamed Mohamed----' },
      { name: 'Mohamed Mohamed--------' },
      { name: 'Mohamed Mohamed-----------' },
      { name: 'Mohamed Mohamed-' }
    ],
    '3': [
      { name: 'Mohamed Mai' },
      { name: 'Suzy Ahmed' },
      { name: 'Lara Ali' },
      { name: 'Lauren Almatry' }
    ],
    '4': [
      { name: 'Mohamed said' },
      { name: 'Mohamed shady' },
      { name: 'Mohamed fady' },
      { name: 'Mohamed fares' }
    ]
  };
  const [reaction, setReaction] = useState<string>('0');
  const [reactionsList] = useState(dummyReactions);

  const handleReaction = (reactionType: string) => {
    setReaction(reactionType);
  };
  return (
    <div className="flex h-96 w-96 flex-col items-start gap-3">
      <LottieBox handleReaction={handleReaction} reaction={reaction} />
      <div>
        <div className="h-72 w-96 overflow-y-scroll px-2">
          {reactionsList[reaction].map((comment: CommentProps) => (
            <Comment key={comment.name} name={comment.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupLottieIcons;
