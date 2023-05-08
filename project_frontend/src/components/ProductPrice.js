import { Box, Typography } from "@mui/material";

export default function ProductPrice(props) {

    const calculateSalePrice = (product) => {

        props.productsAndSales.forEach(element => {
            console.log(element);
        });

        if (isPercentDiscount) {
            return price * (1 - (discount / 100.0));
        } else {
            return price - discount;
        }
    }

    return (
        <Box>
            {props.product.saleId != null && (
                <Box>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                        ${props.product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                        ${calculateSalePrice(props.product.price, props.product.saleDiscount, true).toFixed(2)}
                    </Typography>
                </Box>
            )}
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                ${props.product.price.toFixed(3)}
            </Typography>
        </Box>
    );


}