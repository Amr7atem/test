import React from 'react';
import { getPost } from '@/services/getPost';
import { PostContainer } from '@/Components/PostContainer';

interface MetaProps {
  params: {
    postId: string;
  };
}
interface Props {
  params: {
    postId: string;
  };
}

export async function generateMetadata({ params }: MetaProps) {
  const data = await getPost(params.postId); // Assuming params.data contains the post ID

  return {
    title: 'Post By: ' + data?.list.user_name
  };
}

const Page = async ({ params }: Props) => {
  const data = await getPost(params.postId); // Assuming params.data contains the post ID

  return (
    <div className="m-auto flex h-full items-center justify-center ">
      <PostContainer
        direction="horizontal"
        content={data.list.video ? 'video' : 'image'}
        data={data}
      />
    </div>
  );
};

export default Page;
