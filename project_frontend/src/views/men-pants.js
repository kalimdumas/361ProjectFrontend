import { Helmet } from 'react-helmet'
import DisplayProducts from '../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './men-pants.css'

const MenPants = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-pants", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
      .finally(() => console.log(products));
  },[])
  return (
    <div className="men-pants-container">
      <Helmet>
        <title>Men-Pants - 361 Project</title>
        <meta property="og:title" content="Men-Pants - 361 Project" />
      </Helmet>
      <h1 className="men-pants-text">
        <span>Men&apos;s Pants</span>
        <br></br>
      </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default MenPants
