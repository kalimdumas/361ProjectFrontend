import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardMedia, CardActions, CardContent, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './cart-page.css'

const CartPage = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5257/womens-pants", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="cart-page-container">
      <Helmet>
        <title>Cart-Page - 361 Project</title>
        <meta property="og:title" content="Cart-Page - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name22"></Header>
      <span className="cart-page-text04">Your Cart</span>
      <div className="cart-page-container1">
        <div className="cart-page-container2">
          <span>Products:</span>
          <div className="cart-page-container3">
            {products.map((product, index) => (
              <Card sx={{ width: 500 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', justifyContent: "space-between" }}>
                      ${product.price}
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  sx={{ height: 300 }}
                  image={product.image}
                  title={product.name}
                />
              </Card>
            ))}
          </div>
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
