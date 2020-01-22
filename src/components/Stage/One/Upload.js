import React from "react";
import PhotoImg from "../../../img/camera.png";

const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

const StageOneUpload = ({ image, setImage, setName }) => {
  const onUpload = async e => {
    if (e.target.files) {
      const name = e.target.files[0].name;
      const file = await toBase64(e.target.files[0]);
      setImage(file);
      setName(name);
    }
  };

  return (
    <div className="avatar-upload">
      <div className="avatar-edit">
        <input
          type="file"
          id="imageUpload"
          accept=".png, .jpg, .jpeg"
          onChange={onUpload}
        />
        <label className="avatar-click" htmlFor="imageUpload">
          <i className="fas fa-image"></i>
        </label>
      </div>
      <div className="avatar-preview">
        <div
          id="imagePreview"
          // style="background-image: url(http://i.pravatar.cc/500?img=7);"
        >
          <img src={image ? image : PhotoImg} alt="Camera Taken" />
        </div>
      </div>
    </div>
  );
};

export default StageOneUpload;
