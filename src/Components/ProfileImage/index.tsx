import image from '@/Assets/Melbourne-Corporate-Headshots-Julia-Nance-Portraits1.webp';
import { ProfileImageProps } from '@/Types';
import Image from 'next/image';

export const ProfileImage = ({
  size,
  src = image,
  hasStory = false,
  className
}: ProfileImageProps) => {
  return (
    <div
      // w-${size} h-${size}
      className={`${
        size ? ` ${'w-' + size}  ${'h-' + size} ` : ' h-10 w-10'
      } relative flex cursor-pointer overflow-hidden rounded-full   ${
        hasStory && 'border-2 p-2 '
      } ${className}`}
    >
      <Image src={src} alt="profile pic" fill />
    </div>
  );
};
