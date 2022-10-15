// import React, { useEffect, useState, useRef } from 'react'
// import './Carousel.scss'

// let recommendedData = {
//   "items":[
//     {"location": "Tokyo, Japan", "image": "court-carousel-3", "id": 6, "loopMarker": true},
//     {"location": "Tokyo, Japan", "image": "court-carousel-3", "id": 1, "loopMarker": false},
//     {"location": "Karuizawa, Japan", "image": "court-carousel-1", "id": 2, "loopMarker": false},
//     {"location": "Okinawa, Japan", "image": "court-carousel-2", "id": 3, "loopMarker": false},
//     {"location": "Tokyo, Japan", "image": "court-carousel-3", "id": 4, "loopMarker": true},
//     {"location": "Tokyo, Japan", "image": "court-carousel-3", "id": 5, "loopMarker": true},
//     {"location": "Tokyo, Japan", "image": "court-carousel-3", "id": 6, "loopMarker": true},
//   ]
// }

// const delay = 2500;

// const Carousel = (props) => {
//   const target = React.createRef();
//   const imageRef = useRef();
//   const { count, children } = props;
//   const [index, setIndex] = useState(0);
//   const [x, setX] = useState(0);
//   const [counter, setCounter] = useState(0);
//   const [isLoop, setLoop] = useState(false);
//   const [item, setItem] = useState({});

//   const firstImage = document.getElementById("imageFlag");
//   console.log(firstImage);
  
//   const nextImage = () => {
//     // setData(recommendedData.items[0]);
//     // delete recommendedData.items[0];
//     // items = data;
//     // console.log(items);
//     // recommendedData = items;
//     setCounter(counter+1);
//     setIndex((i) => (i + 1) % recommendedData.items.length);
//     setX(x - 100);
//     if(counter >= 4){
//       setX(x + 400);
//       setCounter(0);
//       setLoop(true);
//       console.log('none');
//     }
    
    
//     // if(counter >= 2) {
//     //   // console.log(recommendedData.items[0]);
//     //   let currentImage = recommendedData.items[1];
//     //   // let rightImage = recommendedData.items[1];
//     //   setItem(recommendedData.items[0]);
//     //   console.log(currentImage);
      
//     //   console.log(recommendedData.items)
//     //   recommendedData.items.push(currentImage);
//     //   recommendedData.items.shift();
//     //   // recommendedData.items.push(rightImage);
//     //   console.log(recommendedData.items)
      
//     //   // console.log(item);

//     // }


//     //If counter is greater than arr.length, reset counter

//     //add carousel 2
//     //add carousel 3
//     //add carousel 4
//   };

//   useEffect(() => {
//     console.log(counter)
//   }, [counter])

  
  
  

//   const prevImage = () => {
//     setIndex((i) => (i - 1) % recommendedData.items.length);
//     setCounter(counter-1);
//     setX(x + 100);
    
//     if(counter <= -4){
//       setX(x - 400);
//       setCounter(4);
//       setLoop(true);
//       console.log('none');
//     }
//   };

//   // useEffect(() => {
//   //   setTimeout(
//   //     () =>
//   //       setIndex((prevIndex) => 
//   //         prevIndex === recommendedData.items.length -1 ? 0 : prevIndex + 1
//   //       ),
//   //     delay
//   //   );

//   //   return () => {};
//   // }, [index])

//   return (
//     <div className="carousel-container">
//       <div className="carousel-nav">
//         <button onClick={prevImage}>-</button>
//         <button onClick={nextImage}>+</button>
//       </div>
//       <section className="carousel-layout">
//         <main className="carousel-contents">
        
//           {
//             recommendedData.items.map((item, index) => {
//               return(
//                 <article className="carousel-item" key={index} style={{transform: `translateX(${x}%)`}} id="imageFlag" ref={imageRef}>
//                   <img src={require('../../assets/images/' + item.image + '.png')} alt="" key={item.location}/>
//                 </article>
//               )
//             })
//           }
          
//         </main>
//       </section>
      
//       <div className="carousel-position">
//           {
//             recommendedData.items.map((_, idx) => (
//               <div key={idx} className="marker"></div>
//             ))
//           }
//       </div>
      
//     </div>
//   )
// }

// export default Carousel;
