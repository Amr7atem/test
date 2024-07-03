import Image from "next/image";
import React, { useRef, useState } from "react";
import { TbPhotoCheck } from "react-icons/tb";

const CreatePostForm = () => {
  const [pickedImage, setPickedImage] = useState<HTMLInputElement | null>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);
  const handlePickClick = () => {
    imageInput.current && imageInput.current.click();
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as HTMLInputElement | null);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className="flex h-96 w-[600px] flex-col gap-4">
      <h2 className="border-y py-2 text-center text-lg font-bold dark:border-gray-600">
        Create new Post
      </h2>
      <div className="flex flex-col items-center justify-between gap-6 py-8">
        <div>
          <TbPhotoCheck size={100} />
          {/* {pickedImage && (
            <Image src={pickedImage} alt="image selected by user" fill />
          )} */}
        </div>
        <div>
          <input
            className="hidden"
            type="file"
            accept="image/png, image/jpg"
            placeholder="image"
            ref={imageInput}
            onChange={handleImageChange}
          />
          <button
            onClick={handlePickClick}
            type="button"
            className="rounded-full bg-black px-4 py-1 text-sm text-white dark:bg-white dark:text-black"
          >
            Add Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostForm;
