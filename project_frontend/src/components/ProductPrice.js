import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';

function ProductPrice(props) {
    const [price, setPrice] = useState(null);
    const [originalPrice, setOriginalPrice] = useState(null);

    useEffect(() => {
        if (props.sale != null) {
            setOriginalPrice(props.price);
            const discount = props.sale.discount;
            const isPercentDiscount = props.sale.isPercentDiscount;
            let salePercentage = 0;
            let dollarAmount = 0;

            if (isPercentDiscount) {
                salePercentage = discount;
                dollarAmount = 0;
            } else {
                dollarAmount = discount;
                salePercentage = 0;
            }

            const url = `http://localhost:5257/apply-sale?originalPrice=${originalPrice}&salePercentage=${salePercentage}&dollarAmount=${dollarAmount}`;

            fetch(url)
                .then(response => response.text())
                .then(result => {
                    const newPrice = parseFloat(result);

                    setPrice(newPrice);
                })
                .catch(error => console.error(error));
        } else {
            // No sale, use regular price
            setPrice(props.price);
        }
    }, [props]);


    return (
        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: originalPrice != price ? 'line-through' : 'none' }}>
            ${originalPrice != price ? originalPrice : price}
        </Typography>
    );
}

export default ProductPrice