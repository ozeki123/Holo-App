import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import FormNav from "../FormNav/FormNav";
import JapanFlag from "../JapanFlag/JapanFlag";
import "./PartnerForm.scss";

const PartnerForm = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const partnerForm = useRef(null);
  const [data, setData] = useState({
    title: '',
    owner: '',
    image: '',
    price: null,
    location: '',
    desc: '',
    age: null,
    contact: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    handleUpload();
  }

  const handleUpload = async () => {
    const cloudinaryData = new FormData();
    cloudinaryData.append("file", image);
    cloudinaryData.append("upload_preset", "holo_images");
    let link = "";

    try {
      setLoading(true);
      const res = await axios.post("https://api.cloudinary.com/v1_1/dphadpunl/image/upload", cloudinaryData)
      link = res.data.secure_url
    } catch(err) {
      console.log(err)
    }

    try{
      axios.post("http://localhost:5000/items", {
        title: data.title,
        owner: data.owner,
        location: data.location,
        price: data.price,
        description: data.desc,
        age: data.age,
        contact: data.contact,
        image: link
      })
      .then((res) => console.log(res))
    } catch(err){
        console.log(err)
      }

}

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
    <div className="form-container">
      <form ref={partnerForm} className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Become a partner</h1>
          <FormNav/>
        </div>
        <div className="personal-info">
          <div className="personal-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Personal Info</h3>
              <p>Provide your personal information.</p>
            </div>
            
          </div>
          <div className="personal-input">
            <div className="input-format">
              <label>Full name</label>
              <input 
                type="text" 
                name="owner" 
                placeholder="Enter name" 
                value={data.owner} 
                onChange={handleChange}
              />
            </div>
            <div className="personal-bottom">
              <div className="input-format">
                <label>Age</label>
                <input 
                  type="text" 
                  name="age" 
                  placeholder="Enter Age" 
                  value={data.age} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-format">
                <label>Phone Number</label>
                <input 
                  type="text" 
                  name="contact" 
                  placeholder="Enter Phone Number" 
                  value={data.contact} 
                  onChange={handleChange}
                />
                <div className="flag">
                  <JapanFlag/>
                </div>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <div className="item-info">
          <div className="item-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Court Info</h3>
              <p>Provide information regarding your court.</p>
            </div>
          </div>
          <div className="item-input">
            <div className="input-format">
              <label>Title</label>
              <input 
              type="text" 
              name="title" 
              placeholder="Title" 
              value={data.title} 
              onChange={handleChange}
            />
            </div>
            <div className="item-bottom">
              <div className="input-format">
                <label>Location</label>
                <input 
                  type="text" 
                  name="location" 
                  placeholder="location" 
                  value={data.location} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-format">
                <label>Price</label>
                <input 
                  type="text" 
                  name="price" 
                  placeholder="price" 
                  value={data.price} 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-format">
              <label>Description</label>
              <textarea
                className="input-desc" 
                type="text" 
                name="desc" 
                placeholder="Enter a brief description of your listing" 
                value={data.desc} 
                onChange={handleChange}
              ></textarea>
            </div>
            
          </div>
          
        </div>
        
        <input 
          className="input-upload"
          type="file" 
          name="file" 
          accept="image/*" 
          onChange={(e) => setImage(e.target.files[0])}
        />
        <div className="form-buttons">
          <button>Back</button>
          <button className="button-submit" onClick={handleSubmit}>Become a Partner</button>
        </div>
        
      </form>
    </div>
      
    </>
    
  )
}

export default PartnerForm;
