import React from "react";
import { choosePhoto } from "../lib/upload";

interface Props {
  onChoosePhoto: (photoPath: string) => Promise<void>;
}

const PhotoUploadButton: React.FC<Props> = ({ onChoosePhoto }) => {
  const handleClick = async () => {
    const photoPath = await choosePhoto();
    await onChoosePhoto(photoPath);
  };

  return (
    <button
      className="px-4 py-2 rounded bg-blue-200 border-solid border-black border-2 font-bold hover:bg-blue-300 focus:bg-blue-400 focus:ring-4"
      onClick={handleClick}
    >
      Upload Photos
    </button>
  );
};

export default PhotoUploadButton;
