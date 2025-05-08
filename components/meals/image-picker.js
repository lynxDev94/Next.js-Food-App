"use client";

import React, { useState } from "react";
import classes from "./image-picker.module.css";
import { useRef } from "react";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImagePick = (event) => {
    const file = event.target.files[0];

    if(!file){
        setPickedImage(null);
        return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
        setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);



  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label} </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
            {!pickedImage && <p>No Image Picked</p>}
            {pickedImage && <Image src={pickedImage} alt="the image selected by the user" fill/>}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          onChange={handleImagePick}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
