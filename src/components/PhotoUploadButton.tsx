import React from 'react';
import { Plugins, CameraResultType, CameraSource, Capacitor } from '@capacitor/core';

const { Camera } = Plugins;

const isCameraAvailable = Capacitor.isPluginAvailable('Camera')

const PhotoUploadButton: React.FC = () => {
  const handleClick = async () => {
    if (isCameraAvailable) {
      // TODO: Implement file upload on the web
      console.error('Not implemented')
    } else {

    const image = await Camera.getPhoto({
      source: CameraSource.Photos,
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
  };
  
  return (
    <button onClick={handleClick}>Upload Photos</button>
  )
};

export default PhotoUploadButton;