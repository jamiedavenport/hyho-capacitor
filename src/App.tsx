import React from "react";
import PhotoUploadButton from "./components/PhotoUploadButton";
import firebase from "firebase";
import "firebase/storage";
import { v4 as uuid } from "uuid";

function App() {
  // TODO: Add loading state
  const handleImageUpload = async (data: string) => {
    const imageName = uuid();

    const root = firebase.storage().ref();
    root.child(`username/${imageName}`).putString(data);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PhotoUploadButton onChoosePhoto={handleImageUpload} />
    </div>
  );
}

export default App;
