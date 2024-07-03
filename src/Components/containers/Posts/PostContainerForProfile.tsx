import React from 'react';
import SendMessageIcon from '@/Components/iconButtons/SendMessageIcon';
import { Data } from '@/services/types';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import PostFooter from '@/Components/PostContainer/components/PostFooter';
import PostHeader from '@/Components/PostContainer/components/PostHeader';
import { getServerSession } from 'next-auth';
import { options } from '@/app/api/auth/[...nextauth]/options';
import Link from 'next/link';
import { ProfileImage } from '@/Components/ProfileImage';
import { PostContainerProps } from '@/Types';

const PostContainer = async ({
  content,
  data,
  direction
}: PostContainerProps) => {
  const session = await getServerSession(options);
  // const session = true;

  // to check if user is auth or not
  // const { data: session } = useSession({
  //   required: false,
  //   onUnauthenticated() {},
  // });

  // to fix video hydration issues
  const NoSSR = dynamic(() => import('../../VideoPlayer'), {
    ssr: false
  });

  return (
    // lg:w-[800px]
    <div
      className={`flex min-h-[730px] w-[466px] flex-col rounded-xl border shadow-lg dark:border-gray-600  ${direction === 'horizontal' ? 'xl:h-[585px] xl:min-h-0 xl:w-[800px] xl:flex-row' : ''} text-gray-800 dark:text-white `}
    >
      <div
        className={`overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-950   ${direction === 'horizontal' && 'xl:w-1/2'}`}
      >
        {content === 'image' && (
          <PostHeader
            session={session}
            data={data}
            className={`my-2 flex justify-between px-4  ${direction === 'horizontal' && 'xl:hidden'}`}
          />
        )}
        {
          <div className="relative h-[585px] w-full ">
            {content === 'image' && (
              <Image
                src={`https://cdn1.ayyam.net/imgs/md/${data?.list.image?.name}`}
                alt="test"
                fill
              />
            )}
            {content === 'video' && (
              <>
                {/* Video element after disabling SSR */}
                <NoSSR direction={direction} />

                <div
                  className={`absolute bottom-24 left-3  ${direction === 'horizontal' && 'xl:hidden'}`}
                >
                  <SendMessageIcon size={24} />
                </div>

                <PostHeader
                  session={session}
                  data={data}
                  className={`absolute bottom-2 flex w-full justify-between px-4 ${direction === 'horizontal' && 'xl:hidden'} `}
                />
              </>
            )}
          </div>
        }
      </div>

      <div
        className={`relative flex flex-col ${direction === 'horizontal' && 'border-l dark:border-gray-600  xl:h-[585px] xl:w-1/2'}`}
      >
        <PostHeader
          session={session}
          data={data}
          className={`my-2 hidden justify-between border-b px-4 pb-3 dark:border-gray-600 ${direction === 'horizontal' && 'xl:flex'}`}
        />

        <div className=" flex flex-col justify-between">
          <div
            className={`hidden px-4 ${direction === 'horizontal' && ' xl:block'}`}
          >
            {/* api doesn't have comments */}
            <div id="comments-box">
              <div className="flex gap-2">
                <ProfileImage className="h-8 w-8" />
                <div>
                  <h4 className="text-sm font-bold">Mohamed Almatry</h4>
                  <p className="font-extralight">this comment</p>
                </div>
              </div>
              <div className="flex gap-4 pl-10">
                <Link href="">like</Link>
                <Link href="">reply</Link>
              </div>
            </div>
          </div>
          <div
            className={`bottom-1 w-full border-t dark:border-gray-600  ${direction === 'horizontal' && 'xl:absolute'}`}
          >
            <div className="my-2 flex justify-between px-2">
              <PostFooter session={session} data={data} />
            </div>
            <div className="px-4">
              <p className={`flex font-bold  ${direction && 'xl:hidden'}`}>
                {data?.list.user_name}
              </p>
              <p className="text-sm">{data?.list.post_content}</p>
              <p className="text-sm">{data?.list.time} ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
