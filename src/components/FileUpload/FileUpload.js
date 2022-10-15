import axios from 'axios';
import React, { useState, useRef } from 'react';
import "./FileUpload.scss"

const FileUpload = ({setImageLink}) => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handleUpload = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "holo_images");
    console.log("data", data)

    axios.post(
      "https://api.cloudinary.com/v1_1/dphadpunl/image/upload", 
      data
      ).then((res) => {
        console.log(res);
        console.log(res.data.secure_url);
        setUrl(res.data.secure_url);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <form className="upload-container" onSubmit={handleUpload}>
        <input type="file" name="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
        <button type="submit">Upload Image</button>
      </form>
    </>
    
  )
}

export default FileUpload;