import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const MuteIcon = ({ videoRef }: Props) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const toggleMute = () => {
    const player = videoRef.current;

    if (player) {
      player.muted = !player.muted;
      setIsMuted(player.muted);
    }
  };

  return (
    <div className="mr-2 cursor-pointer hover:opacity-50" onClick={toggleMute}>
      {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
    </div>
  );
};

export default MuteIcon;
