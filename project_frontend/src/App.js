import React, { useState, useEffect, Switch } from 'react'
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
import CartPage from './views/Cart-page/Cart-Page'
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
import ProductsContext from './components/ProductsContext'

const App = () => {

  const [productsAndSales, setProductsAndSales] = useState([]);

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
          <Route element={<Necklaces productsAndSales={productsAndSales} addToCart={addToCart} />} path="necklaces" />
          <Route element={<Backpacks productsAndSales={productsAndSales} addToCart={addToCart} />} path="backpacks" />
          <Route element={<KidsShorts productsAndSales={productsAndSales} addToCart={addToCart} />} path="kids-shorts" />
          <Route element={<KidsPants productsAndSales={productsAndSales} addToCart={addToCart} />} path="kids-pants" />
          <Route element={<Sales productsAndSales={productsAndSales} addToCart={addToCart} />} path="sales" />
          <Route element={<WomenShorts productsAndSales={productsAndSales} addToCart={addToCart} />} path="women-shorts" />
          <Route element={<MenShirts productsAndSales={productsAndSales} addToCart={addToCart} />} path="men-shirts" />
          <Route element={<CartPage products={cart} removeFromCart={removeFromCart} />} path="cart-page" />
          <Route element={<MenJackets productsAndSales={productsAndSales} addToCart={addToCart} />} path="men-jackets" />
          <Route element={<WomenPants productsAndSales={productsAndSales} addToCart={addToCart} />} path="women-pants" />
          <Route element={<LoginPage productsAndSales={productsAndSales} addToCart={addToCart} />} path="login-page" />
          <Route element={<Register productsAndSales={productsAndSales} addToCart={addToCart} />} path="register" />
          <Route element={<KidsJackets productsAndSales={productsAndSales} addToCart={addToCart} />} path="kids-jackets" />
          <Route element={<MenShorts productsAndSales={productsAndSales} addToCart={addToCart} />} path="men-shorts" />
          <Route element={<Watches productsAndSales={productsAndSales} addToCart={addToCart} />} path="watches" />
          <Route element={<WomenShirts productsAndSales={productsAndSales} addToCart={addToCart} />} path="women-shirts" />
          <Route element={<HomePage productsAndSales={productsAndSales} addToCart={addToCart} />} path="/" />
          <Route element={<MenPants productsAndSales={productsAndSales} addToCart={addToCart} />} path="men-pants" />
          <Route element={<KidsShirts productsAndSales={productsAndSales} addToCart={addToCart} />} path="kids-shirts" />
          <Route element={<Checkout deleteCart={deleteCart} />} path="checkout" />
          <Route element={<Hats productsAndSales={productsAndSales} addToCart={addToCart} />} path="hats" />
          <Route element={<WomenJackets productsAndSales={productsAndSales} addToCart={addToCart} />} path="women-jackets" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;