import React from 'react';
import './Confirm.scss';
import PaymentForm from '../PaymentForm/PaymentForm';
import { Link } from 'react-router-dom';
import { RadioButton } from '../RadioButton/RadioButton';
import Payment from '../Payment/Payment';
import FormNav from '../FormNav/FormNav';
import itemImage from "../../assets/images/pop-court-4.jpg";
import editIcon from "../../assets/icons/edit-icon.svg"
import addIcon from "../../assets/icons/add-icon.svg"

export const Confirm = () => {

  return (
    <div className="confirm-container">
    <form className="form-wrapper">
      <div className="form-title">
        <h1>Become a partner</h1>
        <FormNav/>
      </div>
      <div className="personal-info">
        <div className="personal-heading">
          <div className="heading-mark"></div>
          <div className="heading-text">
            <h3>Personal Info</h3>
            <p>Provide your personal information.</p>
          </div>
          
        </div>
        <div className="personal-input">
          <div className="detail-card">
            <div className="card-image">
              <img src={itemImage}/>
            </div>
            <div className="card-text">
              <h4>Swimming pool in Naha, Okinawa</h4>
              <p>Okinawa Naha Kanagusu 1-1-1</p>
              <div className="card-price">
                <p>August 1, 9:00 ~ 13:00 </p>
                <p>¥12000</p>
              </div>
              <div className="card-price">
                <p>10 Guests</p>
                <p>¥4000</p>
              </div>
            </div>
            <div className="detail-edit">
              <img src={editIcon}/>
              <p>Edit</p>
            </div>
            
          </div>
          <div className="add-item">
            <img src={addIcon}/>
            <p>Add another date</p>
          </div>
        </div>
        
      </div>
      <div className="form-buttons">
        <button>Back</button>
        <button className="button-submit">Continue to Payment</button>
      </div>
      
    </form>
  </div>
  )
}

export default Confirm;
