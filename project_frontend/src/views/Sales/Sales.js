import { Box, Card, CardMedia, CardActions, CardContent, Typography, Rating, Grid } from '@mui/material';
import AddToCartButton from '../../components/AddToCartButton';
import { Helmet } from 'react-helmet';

import './Sales.css'

const Sales = (props) => {

  const calculateSalePrice = (price, discount, isPercentDiscount) => {
    if (isPercentDiscount) {
      return price * (1 - (discount / 100.0));
    } else {
      return price - discount;
    }
  }

  return <>
    <div className="men-shorts-container">
      <Helmet>
        <title>Sales - 361 Project</title>
        <meta property="og:title" content="Men-Shorts - 361 Project" />
      </Helmet>
      <h1 className="men-shorts-text">
        <span>Sales</span>
        <br></br>
      </h1>
      <Grid container spacing={2}>
        {props.productsAndSales.map((productAndSale, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={productAndSale.item1.image}
                title={productAndSale.item1.name}
              />
              <CardContent sx={{ height: 150, overflowY: 'scroll' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {productAndSale.item1.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productAndSale.item1.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Rating name="half-rating-read" defaultValue={productAndSale.item1.numStars} precision={0.1} readOnly />
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                    ${productAndSale.item1.price.toFixed(2)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                    ${calculateSalePrice(productAndSale.item1.price, productAndSale.item2.discount, productAndSale.item2.isPercentDiscount).toFixed(2)}
                  </Typography>
                  <AddToCartButton addToCart={props.addToCart} product={{ ...productAndSale.item1, isOnSale: true, sale: productAndSale.item2 }} />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </>
}

export default Sales