import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Helmet } from 'react-helmet'

import './Cart-Page.css'

const CartPage = (props) => {

  return (
    <div className="cart-page-container">
      <Helmet>
        <title>Cart-Page - 361 Project</title>
        <meta property="og:title" content="Cart-Page - 361 Project" />
      </Helmet>
      <span className="cart-page-text04">Your Cart</span>
      <div className="cart-page-container1">
        <div className="cart-page-container2">
          <div className="cart-page-container3">
            <Grid container spacing={2}>
              {props.products.map((product, index) => (
                <Grid item>
                  <Card key={index} sx={{ height: 150, width: 500, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', justifyContent: "space-between" }}>
                          ${product.price}
                          <IconButton onClick={props.removeFromCart}>
                            <DeleteIcon />
                          </IconButton>
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={product.image}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
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
              <span className="cart-page-text12">N/A</span>
              <span className="cart-page-text13">
                <span>N/A</span>
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
