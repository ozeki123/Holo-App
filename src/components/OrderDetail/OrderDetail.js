import React from 'react';
import './OrderDetail.scss';
import { Link } from 'react-router-dom';
import DatePicker from '../DatePicker/Datepicker';

function OrderDetail() {
  return (
    <div className="signin-container">
      <div className="signin-wrapper">
        <section className="signin-image"></section>
        <section className='signin-section'>
          <div className="signin-contents">
            <form className="signin-form">
              <h1>Sign In</h1>
              <div className="signin-input">
                <label htmlFor="username">Username</label>
                <input 
                  type="text"
                  id="username"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="signin-input">
                <label htmlFor="password">Password</label>
                <input 
                  type="password"
                  id="password"
                  required
                />
              </div>
              
              <button>Sign in</button>
              <p>
                Need an account?
                <span>
                  <Link to="/signup">Sign up</Link>
                </span>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default OrderDetail;
