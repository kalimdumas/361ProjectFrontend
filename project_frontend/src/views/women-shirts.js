import { Helmet } from 'react-helmet'
import { Box, Card, CardMedia, CardActions, CardContent,Typography, Rating, IconButton, Grid } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from 'react';

import Header from '../components/header'
import './women-shirts.css'

const WomenShirts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/womens-shirts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  },[])
  function handleClick(event) {
    console.log(event.currentTarget);
  }
  return (
    <div className="women-shirts-container">
      <Helmet>
        <title>Women-Shirts - 361 Project</title>
        <meta property="og:title" content="Women-Shirts - 361 Project" />
      </Helmet>
      <h1 className="women-shirts-text">Women&apos;s Shirts</h1>

      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid item>
            <Card sx={{ maxWidth: 345}}>
              <CardMedia
                sx={{ height: 300 }}
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
                    ${product.price}
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

export default WomenShirts
