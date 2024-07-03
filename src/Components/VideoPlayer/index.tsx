'use client';
import React, { useRef, useState } from 'react';
import MoreIcon from '@/Components/iconButtons/MoreIcon';
import MuteIcon from '@/Components/iconButtons/MuteIcon';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

interface Props {
  direction: string;
}

const VideoPlayer = ({ direction }: Props) => {
  // const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);
  const playerRef = useRef(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // const playVideoHandler = () => {
  //   if (videoRef.current?.paused) {
  //     videoRef.current?.play();
  //     setIsPlaying(true);
  //   } else {
  //     videoRef.current?.pause();
  //     setIsPlaying(false);
  //   }
  // };

  const handleVideoClick = () => {
    const player = playerRef.current as ReactPlayer | null;
    if (player) {
      const internalPlayer = player.getInternalPlayer();
      if (internalPlayer && internalPlayer.paused !== undefined) {
        if (internalPlayer.paused) {
          internalPlayer.play();
          setIsPaused(false);
        } else {
          internalPlayer.pause();
          setIsPaused(true);
        }
      } else {
        console.error(
          "Player's 'paused' property is not defined or player is not yet initialized."
        );
      }
    } else {
      console.error('Player reference is null.');
    }
  };
  const toggleMute = () => {
    const player = playerRef.current as unknown as ReactPlayer;
    const internalPlayer = player.getInternalPlayer();

    if (player) {
      internalPlayer.muted = !internalPlayer.muted;
      setIsMuted(internalPlayer.muted);
    }
  };
  return (
    <>
      <div className="absolute top-10 z-50 flex w-full justify-between px-4">
        <div className={`${direction && 'xl:hidden'} `}>
          <MoreIcon />
        </div>
        <div onClick={toggleMute} className="h-4 w-4">
          <MuteIcon videoRef={playerRef} />
        </div>
      </div>
      <ReactPlayer
        ref={playerRef}
        url={`https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8`}
        width="100%"
        height="100%"
        playing={true}
        className="video"
        onClick={handleVideoClick}
        muted={isMuted}
        style={{ cursor: 'pointer' }}
      />

      {/* <video
        onClick={playVideoHandler}
        ref={videoRef}
        className="w-full h-full cursor-pointer"
      >
        <source
          src={
            "https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8"
          }
          type="application/x-mpegURL"
        />
      </video> */}
      <div
        className={`absolute bottom-[50%] right-[50%]  translate-x-1/2 translate-y-1/2  cursor-pointer ${
          isPaused ? 'block' : 'hidden'
        }`}
        onClick={handleVideoClick}
      >
        <FaPlay className="text-white" size={70} />
      </div>
    </>
  );
};

export default VideoPlayer;
