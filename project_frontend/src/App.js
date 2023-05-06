import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './views/Home/Home'
import Necklaces from './views/Necklaces/Necklaces'
import Backpacks from './views/Backpacks/Backpacks'
import KidsShorts from './views/Kids-Shorts/Kids-Shorts'
import KidsPants from './views/Kids-Pants/Kids-Pants'
import Sales from './views/Sales/Sales'
import WomenShorts from './views/Women-Shorts/Women-Shorts'
import MenShirts from './views/Men-Shirts/Men-Shirts'
import CartPage from './views/Cart-Page/Cart-Page'
import MenJackets from './views/Men-Jackets/Men-Jackets'
import WomenPants from './views/Women-Pants/Women-Pants'
import LoginPage from './views/Login-Page/Login-Page'
import Register from './views/Register/Register'
import KidsJackets from './views/Kids-Jackets/Kids-Jackets'
import MenShorts from './views/Men-Shorts/Men-Shorts'
import Watches from './views/Watches/Watches'
import WomenShirts from './views/Women-Shirts/Women-Shirts'
import HomePage from './views/Home-Page/Home-Page'
import MenPants from './views/Men-Pants/Men-Pants'
import KidsShirts from './views/Kids-Shirts/Kids-Shirts'
import Checkout from './views/Checkout/Checkout'
import Hats from './views/Hats/Hats'
import WomenJackets from './views/Women-Jackets/Women-Jackets'
import ProductPrice from './components/ProductPrice'

const App = () => {

  useEffect(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch("http://localhost:5257/sales", requestOptions)
    .then(response => response.json())
    .then(result => setProductsAndSales(result))
    .catch(error => console.log('error'));
  }, []);

  const [productsAndSales, setProductsAndSales] = useState([]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([item, ...cart]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => {
      return product.name !== item.name;
    })); 
  }

  const deleteCart = () => {
    setCart([]);
  }

  return ( 
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" >
          <Route element={<ProductPrice productsAndSales={productsAndSales} />} path="product-price" />
          <Route element={<Necklaces addToCart={addToCart} />} path="necklaces" />
          <Route element={<Backpacks addToCart={addToCart} />} path="backpacks" />
          <Route element={<KidsShorts addToCart={addToCart} />} path="kids-shorts" />
          <Route element={<KidsPants addToCart={addToCart} />} path="kids-pants" />
          <Route element={<Sales addToCart={addToCart} productsAndSales={productsAndSales} />} path="sales" />
          <Route element={<WomenShorts addToCart={addToCart} />} path="women-shorts" />
          <Route element={<MenShirts addToCart={addToCart} />} path="men-shirts" />
          <Route element={<CartPage products={cart} removeFromCart={removeFromCart} addToCart={addToCart} />} path="cart-page" />
          <Route element={<MenJackets addToCart={addToCart} />} path="men-jackets" />
          <Route element={<WomenPants addToCart={addToCart} />} path="women-pants" />
          <Route element={<LoginPage addToCart={addToCart} />} path="login-page" />
          <Route element={<Register addToCart={addToCart} />} path="register" />
          <Route element={<KidsJackets addToCart={addToCart} />} path="kids-jackets" />
          <Route element={<MenShorts addToCart={addToCart} />} path="men-shorts" />
          <Route element={<Watches addToCart={addToCart} />} path="watches" />
          <Route element={<WomenShirts addToCart={addToCart} />} path="women-shirts" />
          <Route element={<HomePage addToCart={addToCart} />} path="/" />
          <Route element={<MenPants addToCart={addToCart} />} path="men-pants" />
          <Route element={<KidsShirts addToCart={addToCart} />} path="kids-shirts" />
          <Route element={<Checkout deleteCart={deleteCart} />} path="checkout" />
          <Route element={<Hats addToCart={addToCart} />} path="hats" />
          <Route element={<WomenJackets addToCart={addToCart} />} path="women-jackets" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;