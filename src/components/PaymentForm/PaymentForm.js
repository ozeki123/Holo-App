import React, { useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Elements, CardElement, CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import './PaymentForm.scss';
import FormNav from '../FormNav/FormNav';
import visaCard from "../../assets/icons/visa-card.png";
const stripePromise = loadStripe('pk_test_51KKekXGDtVX5wZUmoem8hYWx1aOdupnY8mgqvCfecD0Hn8iu4BfMSgLDuhKuwwR9ngCdXf73GCh7XM5rPTN9F19000nNQl8J1j');

const StripeComponent = () => {
  const [loading, setLoading] = useState(false);
  const partnerForm = useRef(null);
  const [data, setData] = useState({
    title: '',
    owner: '',
    image: '',
    price: null,
    location: '',
    desc: '',
    age: null,
    contact: ''
  });
  const stripe = useStripe();
  const elements = useElements();

  
  // const cardObject = elements.getElement(CardElement);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/confirm";

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      // expire: elements.getElement(CardExpiryElement),
      // cvc: elements.getElement(CardCvcElement)
    })

    console.log(paymentMethod);
    // navigate(from, { replace: true });

    // sessionStorage.setItem(paymentMethod);
    //get item by id
  }
  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }
  return (
    <>
    <div className="payment-container">
      <form ref={partnerForm} className="form-wrapper" onSubmit={handleSubmit}>
        <div className="form-title">
          <h1>Payment Details</h1>
          <FormNav/>
        </div>
        <div className="personal-info">
          <div className="personal-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Payment Info</h3>
              <p>Safe money transfer using your credit card.</p>
            </div>
            
          </div>
          <div className="personal-input">
            <div className="personal-top">
              <div className="card-num input-format">
                <label>Card number</label>
                <CardNumberElement className="stripe-input"/>
                <img src={visaCard}/>
              </div>
              <div className="card-cvc input-format">
                <label>CVC</label>
                <CardCvcElement className="stripe-input"/>
              </div>
            </div>
            
            <div className="personal-bottom">
              <div className="input-format">
                <label>Expiry Date</label>
                <CardExpiryElement className="stripe-input"/>
              </div>
              <div className="input-format">
                <label>Name on card</label>
                <input 
                  type="text" 
                  name="contact" 
                  placeholder="Enter Name" 
                  value={data.contact} 
                  onChange={handleChange}
                />
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <div className="item-info">
          <div className="item-heading">
            <div className="heading-mark"></div>
            <div className="heading-text">
              <h3>Billing Info</h3>
              <p>Provide information regarding your court.</p>
            </div>
          </div>
          <div className="item-input">
            <div className="item-bottom">
              <div className="input-format">
                <label>Country</label>
                <input 
                  type="text" 
                  name="location" 
                  placeholder="Select country" 
                  value={data.location} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-format">
                <label>Prefecture</label>
                <input 
                  type="text" 
                  name="price" 
                  placeholder="Prefecture" 
                  value={data.price} 
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="input-format">
              <label>Address</label>
              <input 
              type="text" 
              name="title" 
              placeholder="Enter Address" 
              value={data.title} 
              onChange={handleChange}
            />
            </div>
          </div>
          
        </div>
        <div className="form-buttons">
          <button>Back</button>
          <button className="button-submit" type="submit">Submit Payment</button>
        </div>
      </form>
    </div>
    <article className="payment-form">
      <form className="form-details" onSubmit={handleSubmit}>
        <div className="form-top">
          <article className="payment-option">
            <h5 className="">Credit Card</h5>
            <h5>Safe money transfer using your bank account. Visa, Maestro, <br/>
            Mastercard, and American Express. </h5>
          </article>
          <article className="card-number">
            
          </article>
        </div>
        
        <div className="billing-section">
          <div className="card-billing">
            <div className="billing-left">
              <article className="card-name">
               
              </article>
            </div>
            <div className="billing-right">
              <div className="billing-security">
                <article className="card-exp">
                  
                </article>
                <article className="card-cvc">
                  <label className="cvc-label _fs-14">CVC Code</label>
                  
                </article>
              </div>
              
            </div>
          </div>  
        </div>
        
        <button type='submit' className="input-style" disabled={!stripe || !elements}>
            Submit Payment
        </button>
      </form>
    </article>
    </>
    
      
  )
}

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <StripeComponent/>
  </Elements>
)

export default PaymentForm;
