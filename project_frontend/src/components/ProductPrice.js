import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import ProductsContext from "./ProductsContext";

export default function ProductPrice(props) {

    const productsAndSales = useContext(ProductsContext);

    const calculateSalePrice = (product) => {

        const productAndSale = productsAndSales.filter(element => element.item2.saleId === product.saleId)

        // if (productAndSale.item2.isPercentDiscount) {
        //     return product.price * (1 - (productAndSale.item2.discount / 100.0));
        // } else {
        //     return product.price - discount;
        // }
        return 0;
    }

    return (
        <Box>
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
                ${props.product.price.toFixed(2)}
            </Typography>
        </Box>
    );


}