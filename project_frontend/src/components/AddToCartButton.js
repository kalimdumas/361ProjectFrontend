import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddToCartButton(props) {
    const { addToCart, product } = props;

    const calculateSalePrice = (price, discount, isPercentDiscount) => {
        if (isPercentDiscount) {
            return price * (1 - (discount / 100.0));
        } else {
            return price - discount;
        }
    }

    const salePrice = product.isOnSale
        ? calculateSalePrice(product.price, product.sale.discount, product.sale.isPercentDiscount)
        : product.price;

    return (
        <IconButton onClick={() => addToCart({ ...product, price: salePrice })} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
    )
}