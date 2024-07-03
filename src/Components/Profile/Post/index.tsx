'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import Image from 'next/image';
import SVG from '@/Components/icons/SVG';
import { Modal } from '../../Modal';
import PostContainer from '../../containers/Posts/PostContainerForProfile';
import { Data } from '@/services/types';
import testData from '../../../services/dataTest.json';

const Post = () => {
  const [data, setData] = useState<Data | undefined>();

  useEffect(() => {
    fetch(
      'https://api1.ayyam.net/v2/mobile_apis/posts_apis/posts-list.php?single_post_id=5000',
      { method: 'GET' }
    )
      .then((response) => response.json())
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Modal>
      <Modal.Open opens="new-new-new">
        <div className="group relative h-[309px] w-[309px] cursor-pointer overflow-hidden rounded-xl">
          <Image src="/img.jpg" alt="test" fill />
          <div className="absolute hidden h-full w-full items-center justify-center bg-[#00000085] group-hover:flex">
            <div className="flex items-center gap-2">
              <AiOutlineLike size={40} />
              <SVG size={30} name="comment" />
            </div>
          </div>
        </div>
      </Modal.Open>

      <Modal.Window name="new-new-new">
        <PostContainer data={data} content="image" direction="horizontal" />
      </Modal.Window>
    </Modal>
  );
};

export default Post;
