import axios from 'axios';
import React, { useState } from 'react';
import FileUpload from '../FileUpload/FileUpload';
import './Host.scss';

function Host() {
  const [data, setData] = useState({
    title: '',
    owner: ''
  });
  const [imageLink, setImageLink] = useState("");
  // const [formValue, setFormValue] = useState({
  //   owner: '',
  //   title: '',
  //   location: '',
  //   price: '',
  //   description: '',
  // });

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:5000/items';

    axios.post('/items', {
      title: data.title,
      owner: data.owner
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    alert(`title: ${data.title} name: ${data.owner} url: ${url}`)
    // const loginFormData = new FormData();
    // loginFormData.append('owner', formValue.owner);
    // loginFormData.append('title', formValue.title);
    // loginFormData.append('location', formValue.location);
    // loginFormData.append('price', formValue.price);
    // loginFormData.append('description', formValue.description);

    // axios.post('http://localhost:5000/items', {
    //   loginFormData,
    // },
    // {
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // }).then(res => {
    //   console.log(res.data)
    // }).catch(err => console.log(err))

    // try{
    //   axios({
    //     method: 'post',
    //     url:'/items',
    //     data: loginFormData,
    //     headers: { 'Content-Type': 'multipart/form-data'}
    //   });
    //   console.log(loginFormData);
    // } catch(err){
    //   console.log(err);
    // }
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div className="host-container">
      <form className="host-form" onSubmit={handleSubmit}>
        <h1>Become a host</h1>
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          value={data.title} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="owner" 
          placeholder="Enter name" 
          value={data.owner} 
          onChange={handleChange}
        />
        <button type="submit">Become a host</button>
      </form>
    </div>
  )
}

export default Host;
