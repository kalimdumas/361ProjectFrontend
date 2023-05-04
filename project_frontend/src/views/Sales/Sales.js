import { Helmet } from 'react-helmet'
import DisplayProducts from '../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Sales.css'

const Sales = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/sales", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="sales-container">
      <Helmet>
        <title>sales - 361 Project</title>
        <meta property="og:title" content="Sales - 361 Project" />
      </Helmet>
      <h1 className="sales-text">Sales</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default Sales
