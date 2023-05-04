import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Sales.css'

const Sales = (props) => {
  const [products, setProducts] = useState([]);
  const [sales, setSales] = useState([]);
  const responseHandler = (response) => {
    const allSales = response.map(obj => obj.item2);
    const allProducts = response.map(obj => obj.item1);
    productHandler(allProducts);
    saleHandler(allSales);
  }
  const saleHandler = (sales) => setSales(sales);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/sales", requestOptions)
      .then(response => response.json())
      .then(response => responseHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="sales-container">
      <Helmet>
        <title>sales - 361 Project</title>
        <meta property="og:title" content="Sales - 361 Project" />
      </Helmet>
      <h1 className="sales-text">Sales</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} sales={sales} />
    </div>
  )
}

export default Sales
