import React from 'react';
import './Payment.scss';
import PaymentForm from '../PaymentForm/PaymentForm';
import { Link } from 'react-router-dom';
import { RadioButton } from '../RadioButton/RadioButton';

const Payment = () => {

  return (
    <main className="payment-container">
      <section className="payment-contents">
        <section className="payment-left">
          <section className="payment-details">
            <div className="payment-text">
              <h5 className="subheader">Confirm Reservation</h5>
              <h2>予約内容確認</h2>
            </div>
            <section className="stripe-container">
              <RadioButton className="radio-button"/>
              <article className="stripe-contents">
                <PaymentForm className="stripe-form"/>
              </article>
              
            </section>
            
          </section>
          <section className="paypal-section">
            <div className="paypal-container">
              <section className="paypal-contents">
                <article className="paypal-text">
                  <h5>Paypal</h5>
                  <h5>You will be redirected to the Paypal website to complete your 
                  purchase securely.</h5>
                </article>
              </section>
            </div>
            
            
          </section>
        </section>
        <section className="payment-right">
          <div className="vertical-placeholder"></div>
          <div className="payment-confirm-text">
            <h5 className="subheader _fs-12">Confirm Reservation Details</h5>
            <h2>予約内容詳細確認</h2>
          </div>
          <article className="payment-confirm">
            <div className="payment-contents">
              <ul className="payment-list">
                <div>
                  <li className="payment-item _ls-0">品川駅から徒歩10分バスケコート</li>
                  <li className="payment-item _fw-100 _ls-1">東京都品川区品川1-1-1</li>
                </div>
                
                <hr/>
                <div>
                  <li className="payment-item">
                    利用時間<span>9:00 AM~15:00 PM</span>
                  </li>
                  <li className="payment-item">
                    ゲスト<span>6人</span>
                  </li>
                  <li className="payment-item">
                    プラン <span>用品プラン</span>
                  </li>
                </div>
                
              </ul>
              <hr className="hr-line"/>
              <article className="payment-buttons">
                <div className="payment-button-list">
                  <Link className="confirm-button" to='/payment'>
                    お支払い手続きへ
                  </Link>
                  <Link className="contact-button" to='/payment'>
                    ホストに連絡する
                  </Link>
                </div>
                  
              </article>
            </div>
          </article>
        </section>
      </section>
    </main>
      
      
  )
}

export default Payment;
