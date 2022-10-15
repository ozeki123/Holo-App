import React, { useState, useEffect, useRef } from 'react';
import './Details.scss';
import { Link } from 'react-router-dom';
import Datepicker from '../DatePicker/Datepicker';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { NumberIcon } from '../NumberIcon/NumberIcon';
import FormNav from '../FormNav/FormNav';
import { format } from 'date-fns';

export const Details = () => {
  const [ selectedPlan, setSelectedPlan] = useState('');
  const [data, setData] = useState({
    date: "",
    checkin: "",
    checkout: "",
    guests: null,
    package: ""
  });
  const detailForm = useRef(null);
  const timeArr = ["Select Time", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00","16:00", "17:00", "18:00", "19:00", "20:00", "21:00", 
  "22:00", "23:00"] ;
  const guestArr = ["Select Guests", "1", "2", "3", "4", "5", "6", "7", "8","9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
  const packageArr = ["Standard Package", "Equipment Package"];
  const purposeArr = ["Select purpose of use", "Personal Practice", "Team Practice", "Club Practice", "Circle Practice", "Professional Practice", "Tournament", "Camp"]
  useEffect(() => {
     console.log(selectedPlan);
  }, [selectedPlan])

  const setStandardPlan = () => {
    setSelectedPlan('standard');
    // console.log(selectedPlan);
  }

  const setEquipmentPlan = () => {
    setSelectedPlan('equipment');
  }

  const formatDate = (dateObj) => {
    const startDate = `${dateObj.date} ${dateObj.checkin}`;
    const endDate = `${dateObj.date} ${dateObj.checkout}`;
    return {startDate: startDate, endDate: endDate}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let postData = formatDate(data);
    postData.itemId = "test_item";
    console.log(postData);
  }

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }
  
  return (
    <div className="details-container">
      <form ref={detailForm} className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Booking Details</h1>
          <FormNav/>
        </div>
        <div className="personal-info">
          <div className="personal-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Booking Info</h3>
              <p>Provide additional booking details regarding your reservation.</p>
            </div>
            
          </div>
          <div className="personal-input">
            <div className="details-date">
              <div className="date-input input-format">
                <label>Date</label>
                <input 
                  type="text" 
                  name="date" 
                  placeholder="Select date" 
                  value={data.date} 
                  onChange={handleChange}
                />
              </div>
              <div className="time-input input-format">
                <label>Check in</label>
                <select
                  type="text" 
                  name="checkin" 
                  placeholder="Select Time" 
                  value={data.checkin} 
                  onChange={handleChange}
                >
                {
                  timeArr.map((time, index) => (
                    <option>{time}</option>
                  ))
                }
                </select>
              </div>
              <div className="time-input input-format">
                <label>Check in</label>
                <select 
                  type="text" 
                  name="checkout" 
                  placeholder="Select Time" 
                  value={data.checkout} 
                  onChange={handleChange}
                >
                  {
                    timeArr.map((time, index) => (
                      <option>{time}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="personal-bottom">
              <div className="input-format">
                <label>Guests</label>
                <select
                  type="text" 
                  name="guests" 
                  placeholder="Select Guests" 
                  value={data.guests} 
                  onChange={handleChange}
                >
                  {
                    guestArr.map((guest, index)=> (
                      <option>{guest}</option>
                    ))
                  }
                </select>
              </div>
              <div className="input-format">
                <label>Package Type</label>
                <select
                  type="text" 
                  name="contact" 
                  placeholder="Select package type" 
                  value={data.package} 
                  onChange={handleChange}
                >
                  {
                    packageArr.map((pkg, index) => (
                      <option>{pkg}</option>
                    ))
                  }
                </select>
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <div className="item-info">
          <div className="item-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Message to the owner</h3>
              <p>Provide details and a message you would like to send to the owner.</p>
            </div>
          </div>
          <div className="item-input">
            <div className="input-format">
              <label>Purpose</label>
              <select
              type="text" 
              name="guests" 
              placeholder="Guests" 
              value={data.guests} 
              onChange={handleChange}
            >
            {
              purposeArr.map((purpose, index) => (
                <option key={index}>{purpose}</option>
              ))
            }
            </select>
            </div>
            <div className="input-format">
              <label>Description</label>
              <textarea
                className="input-desc" 
                type="text" 
                name="desc" 
                placeholder="Write a brief message to the owner!" 
                value={data.desc} 
                onChange={handleChange}
              ></textarea>
            </div>
            
          </div>
          
        </div>
        <div className="form-buttons">
          <button>Back</button>
          <button className="button-submit" onClick={handleSubmit}>Become a Partner</button>
        </div>
        
      </form>
    </div>
  )
}

