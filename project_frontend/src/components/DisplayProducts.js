import React from 'react';
import AddToCartButton from './AddToCartButton';
import { Box, Card, CardMedia, CardActions, CardContent, Typography, Rating, Grid } from '@mui/material';

export default function DisplayProducts(props) {
    return <><Grid container spacing={2}>
        {props.products.map((product, index) => (
            <Grid item key={index}>
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
                                ${product.price.toFixed(2)}
                            </Typography>
                            <AddToCartButton addToCart={props.addToCart} product={product} />
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </Grid>
    </>
}