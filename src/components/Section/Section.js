import React from 'react';
import SectionLine from '../SectionLine/SectionLine';
import "./Section.scss";

const Section = ({data}) => {
  return (
    <div className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <p>featured courts</p>
          <h3>お勧めコート</h3>
        </div>
        <div className="section-contents">
          {
            data.map((data, index) => (
              <div className="section-item">
                <img src={require("../../assets/images/" + data.image)} alt=""/>
                <div></div>
                <div className="item-details">
                  <div className="item-desc">
                    <p>{data.title}</p>
                    <p className="item-location">{data.location}</p>
                  </div>
                  <p>{data.price}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Section;
