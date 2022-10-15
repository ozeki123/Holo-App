import React, { useState } from 'react';
import './Featured.scss';

const Featured = () => {
  let carouselArr = [1,2,3];
  return (
    <div className="featured-carousel">
      {
        carouselArr.map((item,index) => {
          return(
            <div className="featured-item" key={index}>
              {item}
            </div>
          )
        })
      }
      <button>left</button>
      <button>right</button>
    </div>
  )
}

export default Featured;
