import React from "react";
import PhotoUploadButton from "./components/PhotoUploadButton";

function App() {
  const handleImageUpload = async (path: string) => {
    console.log(path);
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
