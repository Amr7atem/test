import FollowButton from '@/Components/Buttons/FollowButton';
import { ProfileImage } from '@/Components/ProfileImage';
import { Data } from '@/services/types';
import Link from 'next/link';
import React from 'react';
import { IoIosMore } from 'react-icons/io';

interface Props {
  data: Data | undefined;
  className?: string;
  session?: any;
}

const PostHeader = ({ data, className, session }: Props) => {
  return (
    <Link href={`/profile/${data?.list.user_id}`}>
      <div className={`${className}`}>
        <div className="flex items-center gap-2 ">
          <ProfileImage
            hasStory={true}
            src={`https://cdn1.ayyam.net/imgs/md/${data?.list.user_profile_pic}`}
          />
          <div>
            <p className="text-sm font-bold">{data?.list.user_name}</p>
          </div>
        </div>
        <div className="flex items-center gap-2  ">
          {session && <FollowButton className="py-2" />}
          <IoIosMore size={24} className="cursor-pointer" />
          {/* <button type="button" onClick={() => getPost()}>
      test
    </button> */}
        </div>
      </div>
    </Link>
  );
};

export default PostHeader;
