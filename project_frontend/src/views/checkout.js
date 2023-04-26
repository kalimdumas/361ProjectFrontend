import React from 'react'
import Navbar from '../components/Navbar';

import { Helmet } from 'react-helmet'

import './checkout.css'

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <Helmet>
        <title>Checkout - 361 Project</title>
        <meta property="og:title" content="Checkout - 361 Project" />
      </Helmet>
      <Navbar/>
      <h1 className="checkout-text30">Checkout Page</h1>
      <button className="checkout-button button">Place Order</button>
      <div className="checkout-container3">
        <div className="checkout-container4">
          <input type="text" className="checkout-card-number input" />
          <input type="text" className="checkout-exp-date input" />
          <input type="text" className="checkout-cvv input" />
          <input type="text" className="checkout-card-name input" />
          <span className="checkout-text31">Exp. Date (MM/YYYY):</span>
          <span className="checkout-text32">Credit Card #:</span>
          <span className="checkout-text33">CVV Code:</span>
          <span className="checkout-text34">Name on Card:</span>
          <h1>Payment Information</h1>
        </div>
        <div className="checkout-container5">
          <input type="text" className="checkout-street-address input" />
          <input type="text" className="checkout-city input" />
          <input type="text" className="checkout-state input" />
          <input type="text" className="checkout-zip input" />
          <span className="checkout-text36">City:</span>
          <span className="checkout-text37">Street Address:</span>
          <span className="checkout-text38">State:</span>
          <span className="checkout-text39">Postal Code:</span>
          <h1>Shipping Address</h1>
        </div>
      </div>
    </div>
  )
}

export default Checkout
