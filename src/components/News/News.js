import React from 'react';
import ArrowButton from '../ArrowButton/ArrowButton';
import "./News.scss";
import newsText from './NewsText';

const News = () => {
  return (
    <div className="news-container">
      <div className="news-wrapper">
        <div className="news-header">
          <p>Topics</p>
          <h3>最新情報</h3>
        </div>
        <div className="news-contents">
          {
            newsText.data.map((data, index) => (
              <div className="news-item" key={index}>
                <div className="news-heading">
                  <p>News</p>
                  <p>{data.date}</p>
                </div>
                <div className="news-text">
                  <h3>{data.title}</h3>
                  <ArrowButton/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default News;
