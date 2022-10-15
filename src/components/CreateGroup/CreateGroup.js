import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './CreateGroup.scss';


const CreateGroup = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const navigate = useNavigate();

  const currentUser = sessionStorage.getItem('user');

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('/groups', {
      title,
      owner: currentUser,
      description: desc
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    navigate('/groups');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Group Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder="Enter your group name"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Group Description</label>
        <input
          type="text"
          id="desc"
          placeholder="Enter group description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </section>
  )
}

export default CreateGroup;