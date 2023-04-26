import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './cart-page.css'

const CartPage = (props) => {
  return (
    <div className="cart-page-container">
      <Helmet>
        <title>Cart-Page - 361 Project</title>
        <meta property="og:title" content="Cart-Page - 361 Project" />
      </Helmet>
      <div data-thq="thq-dropdown" className="cart-page-thq-dropdown list-item">
        <ul data-thq="thq-dropdown-list" className="cart-page-dropdown-list">
          <li data-thq="thq-dropdown" className="cart-page-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="cart-page-dropdown-toggle"
            >
              <span className="cart-page-text">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="cart-page-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="cart-page-dropdown-toggle1"
            >
              <span className="cart-page-text01">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="cart-page-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="cart-page-dropdown-toggle2"
            >
              <span className="cart-page-text02">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="cart-page-dropdown3 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="cart-page-dropdown-toggle3"
            >
              <span className="cart-page-text03">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <Header rootClassName="header-root-class-name22"></Header>
      <span className="cart-page-text04">Your Cart</span>
      <div className="cart-page-container1">
        <div className="cart-page-container2">
          <span>Products:</span>
          <div className="cart-page-container3"></div>
        </div>
        <div className="cart-page-container4">
          <div className="cart-page-container5">
            <div className="cart-page-container6">
              <span className="cart-page-text06">Subtotal</span>
              <span className="cart-page-text07">Taxes</span>
              <span className="cart-page-text08">
                <span>Grand Total</span>
                <br></br>
              </span>
            </div>
            <div className="cart-page-container7">
              <span className="cart-page-text11">N/A</span>
              <span className="cart-page-text12">N/a</span>
              <span className="cart-page-text13">
                <span>N/a</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="cart-page-container8">
            <Link to="/checkout" className="cart-page-navlink button">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
