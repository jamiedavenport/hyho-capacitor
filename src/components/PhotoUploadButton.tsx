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

  return <button onClick={handleClick}>Upload Photos</button>;
};

export default PhotoUploadButton;
