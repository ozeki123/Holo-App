import React, { useEffect, useState } from "react";
import './LandingPage.scss';
import ShinpoBg from '../../assets/images/holo-bg.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Carousel from '../Carousel/Carousel';
import Section from '../Section/Section';
import SectionLine from '../SectionLine/SectionLine';
import News from '../News/News';
import starIcon from "../../assets/icons/icons8-star-48.png";

const popularCourts = {
  "items":[
    {"location": "Nagano, Karuizawa", "category":"Tennis", "image": "pop-court-1.jpg", "id": 1, "rating": 4.9, "title": "市ヶ谷駅から徒歩5分! 広いサッカーフィールド", "price": "¥2000"},
    {"location": "Chiba, Onjuku", "category":"Basketball", "image": "pop-court-2.jpg", "id": 2, "rating": 4.6, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Okinawa, Onna", "category":"Tennis, Basketball", "image": "pop-court-3.jpg", "id": 3, "rating": 4.8, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Okinawa, Naha", "category":"Swimming", "image": "pop-court-4.jpg", "id": 4, "rating": 4.8, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Saitama, Tokorozawa", "category":"Track, Soccer, Rugby", "image": "pop-court-5.jpg", "rating": 4.9, "id": 4, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Tokyo, Futako Tamagawa", "category":"Soccer, Track", "image": "pop-court-6.jpg", "id": 6, "rating": 4.9, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
  ]
}
const popularExp = {
  "items":[
    {"location": "Nagano, Karuizawa", "category":"Tennis", "image": "pop-exp-1.jpg", "id": 1, "rating": 4.9, "title": "市ヶ谷駅から徒歩5分! 広いサッカーフィールド", "price": "¥2000"},
    {"location": "Chiba, Onjuku", "category":"Basketball", "image": "pop-exp-2.jpg", "id": 2, "rating": 4.6, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Okinawa, Onna", "category":"Tennis, Basketball", "image": "pop-exp-3.jpg", "id": 3, "rating": 4.8, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Okinawa, Naha", "category":"Swimming", "image": "pop-exp-4.jpg", "id": 4, "rating": 4.8, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Saitama, Tokorozawa", "category":"Track, Soccer, Rugby", "image": "pop-exp-5.jpg", "rating": 4.9, "id": 4, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
    {"location": "Tokyo, Futako Tamagawa", "category":"Soccer, Track", "image": "pop-exp-6.jpg", "id": 6, "rating": 4.9, "title": "市ヶ谷駅から徒歩5分! アウトドアバスケとボールコート", "price": "¥2000"},
  ]
}

const categoryData = ["Basketball", "American Football", "Soccer", "Tennis", "Swimming", "Baseball", "Volleyball", "Table Tennis", "Badminton", "Surfing", "Golf", "Track", "Sailing", "e-Sports"]

const LandingPage = ({data = categoryData, courts = popularCourts.items, exp = popularExp.items}) => {
  return (
    <main className="home-container">
      <div className="home-wrapper">
        <section className="home-banner">
          <div className="banner-side">
            <div className="center-text">
              <p>Browse Experiences</p>
              <h2>Browse unique experiences hosted by our partners and users</h2>
            </div>
          </div>
          <div className="banner-center">
            <div className="center-text">
              <p>Browse Courts</p>
              <h2>Browse our collection of rental courts and fields hosted by our partners</h2>
            </div>

           
          </div>
          <div className="banner-side">
            <div className="center-text">
              <p>Browse Groups</p>
              <h2>Browse groups formed by users or partners and play together</h2>
            </div>


            
          </div>
        </section>
        <section className="home-categories">
          {
            data.map((data, index) => (
              <div className="category">{data}</div>
            ))
          }
        </section>
        <section className="popular-section">
          <h2>Currently popular courts in Japan</h2>
          <div className="popular-items">
            {
              courts.map((court, index) => (
                <div className="item">
                  <img src={require("../../assets/images/" + court.image)} className="item-image" alt=""/>
                  <div className="item-heading">
                    <img src={starIcon}/>
                    <div className="item-rating">
                      <p>{court.rating}</p>
                      <p>(12)</p>
                    </div>
                    <p>・</p>
                    <p>{court.category}</p>
                  </div>
                  <p className="item-location">{court.location}</p>
                  <div className="item-price">
                    <p className="price-bold">{`From ${court.price} `}</p>
                    <p>{" / hour"}</p>
                  </div>
                  
                </div>
              ))
              // <div className="item"></div>
            // <div className="item"></div>
            // <div className="item"></div>
            // <div className="item"></div>
            // <div className="item"></div>
            // <div className="item"></div>
            }
          </div>
        </section>
        <section className="popular-section">
          <h2>Currently popular experiences in Japan</h2>
          <div className="popular-items">
          {
            exp.map((exp, index) => (
              <div className="item">
                <img src={require("../../assets/images/" + exp.image)} className="item-image" alt=""/>
                <div className="item-heading">
                    <img src={starIcon}/>
                    <div className="item-rating">
                      <p>{exp.rating}</p>
                      <p>(12)</p>
                    </div>
                    <p>・</p>
                    <p>{exp.category}</p>
                  </div>
                  <p className="item-location">{exp.location}</p>
                  <div className="item-price">
                    <p className="price-bold">{`From ${exp.price} `}</p>
                    <p>{" / hour"}</p>
                  </div>
                </div>
            ))
          }
          </div>
        </section>
      </div>
      
    </main>
  )
}

export default LandingPage;
