import { Typography } from "@mui/material";
import { useContext } from "react";
import ProductsContext from "./ProductsContext";

const ProductPrice = (props) => {

    const calculateSalePrice = (product) => {
        if(props.productsAndSales.length === 0){
            return;
        }
        const productAndSale = props.productsAndSales.find(element => element.item1.name === product.name);
        if (productAndSale.item2.isPercentDiscount) {
            return product.price * (1 - (productAndSale.item2.discount / 100.0));
        } else {
            return product.price - productAndSale.item2.discount;
        }
        return 0;
    }

    return (
        <div>
            {props.product.saleId != null ? (
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                        ${props.product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ paddingLeft: '5px', fontWeight: '700', color: "black" }}>
                        ${calculateSalePrice(props.product)?.toFixed(2)}
                    </Typography>
                </div>
            ) : (
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                    ${props.product.price.toFixed(2)}
                </Typography>
            )}
        </div>
    );


}

export default ProductPrice;