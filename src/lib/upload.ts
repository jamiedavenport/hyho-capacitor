import {
  Plugins,
  CameraResultType,
  CameraSource,
  Capacitor,
} from "@capacitor/core";

const { Camera } = Plugins;

export const choosePhoto = async (): Promise<string> => {
  const isCameraAvailable = Capacitor.isPluginAvailable("Camera");

  if (!isCameraAvailable) {
    throw new Error("Photo picker is not supported");
  } else {
    const image = await Camera.getPhoto({
      source: CameraSource.Photos,
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      preserveAspectRatio: true,
      width: 100,
      height: 100,
      webUseInput: true,
    });

    const data = image.base64String;

    if (typeof data === "undefined") {
      throw new Error("Image data was undefined");
    }

    return data;
  }
};
