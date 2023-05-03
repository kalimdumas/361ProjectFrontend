import { Helmet } from 'react-helmet'
import { Box, Card, CardMedia, CardActions, CardContent, Typography, Rating, IconButton, Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import AddToCartButton from '../components/AddToCartButton';

import './kids-shorts.css'

const KidsShorts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/kids-shorts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="kids-shorts-container">
      <Helmet>
        <title>Kids-Shorts - 361 Project</title>
        <meta property="og:title" content="Kids-Shorts - 361 Project" />
      </Helmet>
      <h1 className="kids-shorts-text">Kid&apos;s Shorts</h1>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 500 }}  
                image={product.image}
                title={product.name}
              />
              <CardContent sx={{ height: 150, overflowY: 'scroll' }}>
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
                    ${product.price}
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

export default KidsShorts
