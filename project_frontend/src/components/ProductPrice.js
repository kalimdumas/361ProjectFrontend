import { Box, Typography } from "@mui/material";

export default function ProductPrice(props) {

    const calculateSalePrice = (product) => {
        console.log(props.productsAndSales);

        const productAndSale = props.productsAndSales.filter(element => element.item1.name === product.name)

        if (productAndSale.item2.isPercentDiscount) {
            return product.price * (1 - (productAndSale.item2.discount / 100.0));
        } else {
            return product.price - discount;
        }
    }

    return (
        <Box>
            {console.log(props.product)}
            {props.product.saleId != null && (
                <Box>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                        ${props.product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                        ${calculateSalePrice(props.product).toFixed(2)}
                    </Typography>
                </Box>
            )}
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                ${props.product.price.toFixed(3)}
            </Typography>
        </Box>
    );


}