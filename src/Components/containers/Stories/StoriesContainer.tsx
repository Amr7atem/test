import React from 'react';
import { ProfileImage } from '@/Components/ProfileImage';
import addPhotoImage from '@/Assets/add photo.png';

const StoriesContainer = () => {
  return (
    <div id="stories-box" className="flex gap-2 overflow-x-auto">
      <ProfileImage
        src={addPhotoImage}
        className="!h-16 !w-16 xl:!h-20 xl:!w-20 "
        hasStory
      />
    </div>
  );
};

export default StoriesContainer;
