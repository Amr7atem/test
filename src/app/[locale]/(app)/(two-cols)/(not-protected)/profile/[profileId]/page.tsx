import Post from '@/Components/Profile/Post';
import React from 'react';

const ProfilePage = () => {
  return (
    // <div className="flex w-full">

    <div className=" flex flex-wrap justify-center gap-1 px-8 py-4 xl:px-40">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>

    // </div>
  );
};

export default ProfilePage;
