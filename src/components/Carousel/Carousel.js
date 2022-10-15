import React, { useEffect, useState } from 'react';
import CarouselComponent from '../CarouselComponent/CarouselComponent';
import './Carousel.scss';

let recommendedData = {
     "items":[
       {"location": "東京都新宿区1-1-1", "category":"basketball", "image": "carousel-2.jpg", "id": 1, "title": "市ヶ谷駅から徒歩5分! 広いサッカーフィールド", "price": "¥2000/h"},
       {"location": "東京都新宿区1-1-1", "category":"basketball", "image": "carousel-3.jpg", "id": 2, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000/h"},
       {"location": "東京都新宿区1-1-1", "category":"soccer", "image": "carousel-4.jpg", "id": 3, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000/h"},
       {"location": "東京都新宿区1-1-1", "category":"soccer", "image": "carousel-1.jpg", "id": 4, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000/h"},
       {"location": "東京都新宿区1-1-1", "category":"swimming", "image": "carousel-5.jpg", "id": 5, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000/h"},
     ]
}

const Carousel = ({data = recommendedData.items, isFocus}) => {
  const [index, setIndex] = useState(1);
  const [navIndex, setNavIndex] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const toIndex = (event, i) => {
    setIsClicked(true);
    setNavIndex(i);
    setIsClicked(false)
    console.log("index", i);
  }

  useEffect(() => {
    // console.log('index', index)
  }, [index])
  
  return (
    <div className="carousel">
      <div className="carousel-section">
        <CarouselComponent show={3} infiniteLoop isFocus={isFocus} isClicked={isClicked} setIndex={setIndex} navIndex={navIndex} data={data} toIndex={toIndex} index={index}>
          {
            data.map((data, index) => (
              
              <div className="carousel-contents">
                <div className="carousel-item">
                  <div className="carousel-image">
                      <img src={require("../../assets/images/" + data.image)} alt="placeholder" style={{width: '100%'}} />
                  </div>
                  <div className="item-details">
                    <div className="item-title">
                      <h3>{data.title}</h3>
                      <p>{data.price}</p>
                    </div>
                    <div className="item-subtitle">
                      <div className="ellipse"></div>
                      <p className="item-category">{data.category}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
            ))
          }
        </CarouselComponent>
      </div>
    </div>
  )
}

export default Carousel
