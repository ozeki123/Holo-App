import React, {useEffect} from "react";
import "./CarouselNav.scss"

const CarouselNav = ({data, index, toIndex, onClick}) => {
  // const setNavIndex = (event, i) => {
  //   console.log("event", event);
  //   console.log("i", i);
  // }
  const placeholderArr = [1,2,3,4,5,6,7,8,9,10];
  
  
  // newData[5] = {"id": 6}
  // newData.push({})
  // newData.push({})
  // newData.push({})
  useEffect(() => {
    
  }, [])
  
  return (
    <div className="carousel-nav">
      <div className="carousel-buttons">
        {
          data.map((data, i) => ( 
            <div className="ellipse" key={i} onClick={event => onClick(event, i)} style={ i === index ? { backgroundColor: "#444CEF"}: {} }></div>
          ))
        }
      </div>
      
    </div>
  )
}

export default CarouselNav;