import { Helmet } from 'react-helmet'
import { Box, Card, CardMedia, CardActions, CardContent,Typography, Button, Rating, IconButton, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import AddToCartButton from '../components/AddToCartButton';

import './men-jackets.css'

const MenJackets = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-jackets", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
      .finally(() => console.log(products));
  },[])
  return (
    <div className="men-jackets-container">
      <Helmet>
        <title>Men-Jackets - 361 Project</title>
        <meta property="og:title" content="Men-Jackets - 361 Project" />
      </Helmet>
      <h1 className="men-jackets-text">
        <span>Men&apos;s Jackets </span>
        <br></br>
      </h1>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item>
            <Card sx={{ maxWidth: 345}}>
              <CardMedia
                sx={{ height: 400 }}
                image={product.image}
                title={product.name}
              />
              <CardContent sx={{height: 150, overflowY: 'scroll'}}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Rating name="half-rating-read" defaultValue={product.numStars} precision={0.1} readOnly />
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700' }}>
                    ${product.price}.00
                  </Typography>
                  <AddToCartButton addToCart={props.addToCart} product={product} />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MenJackets
