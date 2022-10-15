import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Page(props) {
  const { id } = useParams();

  const [items, setItems] = useState([{}]);
  const [selectedItem, setSelectedItem] = useState({});

  const getItems = () => {
    axios.get(`/items/${id}`)
      .then((res)=> {
        const myItems = res.data;
        setItems(myItems);
        console.log(myItems);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    sessionStorage.setItem('item', JSON.stringify(items));
    // const submittedData = sessionStorage.getItem('item');
    // const newData = JSON.parse(submittedData)
    // console.log(newData._id);
  }

  useEffect(() => {
    getItems();
  }, []);

  
  
  return(
    <div>
      <h1>{items.title}</h1>
      <h1>{items.location}</h1>
      <h1>{items.owner}</h1>
      <h1>{items.price}</h1>
      <h1>{items.description}</h1>
      <h1>{items.rating}</h1>
      <button onClick={handleSubmit}>
        <Link to='/order'>
          Go to Payment
        </Link>
      </button>  
    </div>
  )
}

export default Page;
