import { Helmet } from 'react-helmet'
import { Box, Card, CardMedia, CardActions, CardContent,Typography, Button, Rating, IconButton, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from 'react';

import Header from '../components/header'
import './men-pants.css'

const MenPants = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-pants", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
      .finally(() => console.log(products));
  },[])
  function handleClick(event) {
    console.log(event.currentTarget);
  }
  return (
    <div className="men-pants-container">
      <Helmet>
        <title>Men-Pants - 361 Project</title>
        <meta property="og:title" content="Men-Pants - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name12"></Header>
      <h1 className="men-pants-text">
        <span>Men&apos;s Pants</span>
        <br></br>
      </h1>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item>
            <Card sx={{ maxWidth: 345}}>
              <CardMedia
                sx={{ height: 500 }}
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
                  <IconButton onClick={handleClick} color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default MenPants
