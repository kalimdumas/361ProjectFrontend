import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function AddToCartButton(props) {
    return (
        <IconButton onClick={() => props.addToCart(props.product)} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
    )
}



