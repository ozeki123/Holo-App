import React, { useState }from 'react'
import { Link, Navigate } from 'react-router-dom';

function Item(props){
  const [toPage, setToPage] = useState(false);

  const onLinkClick = () => <Navigate to={`/items/${props.id}`}/>

  return (
    <div>
      <Link to={`/items/${props.id}`} onClick={onLinkClick}><h1>{props.title}</h1></Link>
      <p>{props.id}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Item;