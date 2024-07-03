'use client';
import React, { useState } from 'react';
import { BiLike } from 'react-icons/bi';
import ReactionsContainer from '@/Components/iconButtons/FloatingLottieContainer';
import SVG from '@/Components/icons/SVG';
import RegularButton from '@/Components/Buttons/RegularButton';
import LottieIconsBox from '@/Components/iconButtons/LottieIconsBox';
import { Modal } from '@/Components/Modal';
import PopupLoginForm from '@/Components/Forms/PopupLoginForm';

interface Props {
  data?: any;
  session?: any;
}

const PostFooter = ({ data, session = true }: Props) => {
  const [showBox, setShowBox] = useState<boolean>(false);
  const [postReactions, setPostReactions] = useState(
    data?.list?.post_reactions
  );
  const [likeButtonColor, setLikeButtonColor] = useState('white');
  // all of that still need to refactor
  const likeBtnWithAuth = (
    <>
      {session?.user ? (
        <RegularButton
          onClick={() => {
            handleIconClick('1');
            setShowBox(false);
          }}
          onMouseEnter={() => setShowBox(true)}
          onMouseLeave={() => setTimeout(() => setShowBox(false), 1000)}
          icon={<BiLike size={24} color={likeButtonColor} />}
        />
      ) : (
        <RegularButton
          icon={<BiLike size={24} color="gray" />}
          onClick={() => {
            handleIconClick('1');
          }}
        />
      )}
      <RegularButton
        comments={data?.list.comments_count}
        counter={20}
        icon={<SVG size={24} name="comments" />}
      />
    </>
  );
  const likeBtnWithModal = (
    <Modal>
      <Modal.Open opens="login-form">
        <RegularButton icon={<BiLike size={24} color="gray" />} />
      </Modal.Open>
      <Modal.Open opens="login-form">
        <RegularButton
          comments={data?.list.comments_count}
          counter={20}
          icon={<SVG size={24} name="comments" />}
        />
      </Modal.Open>
      <Modal.Window name="login-form">
        <PopupLoginForm />
      </Modal.Window>
    </Modal>
  );

  // const likeBtnWithoutAuth =

  const handleIconClick = (reactionIndex: string) => {
    // Update reaction state based on the clicked icon
    if (!session) {
      alert('you must be logged in');
      return;
    }
    // Don't proceed if user is not authenticated

    const newLikedState = postReactions.me_reacted !== reactionIndex;
    const newReactions = { ...postReactions.reactions };

    if (newLikedState) {
      newReactions[reactionIndex]++;
      if (postReactions.me_reacted !== '') {
        newReactions[postReactions.me_reacted]--;
      }
    } else {
      newReactions[reactionIndex]--;
      reactionIndex = '';
    }

    const newTotalCount = Object.values(newReactions).reduce(
      (acc: number, count: any) => acc + count,
      0
    );

    setPostReactions((prevReactions: any) => ({
      ...prevReactions,
      reactions: newReactions,
      total_count: newTotalCount,
      me_reacted: reactionIndex
    }));

    setLikeButtonColor(newLikedState ? 'blue' : 'black');
  };

  return (
    <>
      <div>
        <LottieIconsBox reactions={postReactions} />
      </div>
      <div className="relative flex items-center gap-4">
        {session ? likeBtnWithAuth : likeBtnWithModal}
        <ReactionsContainer
          handleIconClick={handleIconClick}
          showBox={showBox}
        />

        {session && (
          <RegularButton
            rounded="full"
            icon={<SVG size={24} name="repost-white" />}
          />
        )}
      </div>
    </>
  );
};

export default PostFooter;
