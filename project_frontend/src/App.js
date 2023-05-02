import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './views/Home'
import Necklaces from './views/necklaces'
import Backpacks from './views/backpacks'
import KidsShorts from './views/kids-shorts'
import KidsPants from './views/kids-pants'
import Sales from './views/sales'
import WomenShorts from './views/women-shorts'
import MenShirts from './views/men-shirts'
import CartPage from './views/cart-page'
import MenJackets from './views/men-jackets'
import WomenPants from './views/women-pants'
import LoginPage from './views/login-page'
import Register from './views/register'
import KidsJackets from './views/kids-jackets'
import MenShorts from './views/men-shorts'
import Watches from './views/watches'
import WomenShirts from './views/women-shirts'
import HomePage from './views/home-page'
import MenPants from './views/men-pants'
import KidsShirts from './views/kids-shirts'
import Checkout from './views/checkout'
import Hats from './views/hats'
import WomenJackets from './views/women-jackets'

const App = () => {
  const [cart, setCart] = useState([{}]);

  const addToCart = (items) => {
    setCart([items, ...cart]);
    console.log(cart);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => {
      return product.name !== item.name;
    }));
    console.log(cart);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" >
          <Route element={<Necklaces />} path="necklaces" />
          <Route element={<Backpacks addToCart={addToCart} />} path="backpacks" />
          <Route element={<KidsShorts />} path="kids-shorts" />
          <Route element={<KidsPants />} path="kids-pants" />
          <Route element={<Sales />} path="sales" />
          <Route element={<WomenShorts />} path="women-shorts" />
          <Route element={<MenShirts />} path="men-shirts" />
          <Route element={<CartPage products={cart} removeFromCart={removeFromCart} />} path="cart-page" />
          <Route element={<MenJackets />} path="men-jackets" />
          <Route element={<WomenPants />} path="women-pants" />
          <Route element={<LoginPage />} path="login-page" />
          <Route element={<Register />} path="register" />
          <Route element={<KidsJackets />} path="kids-jackets" />
          <Route element={<MenShorts />} path="men-shorts" />
          <Route element={<Watches />} path="watches" />
          <Route element={<WomenShirts />} path="women-shirts" />
          <Route element={<HomePage />} path="/" />
          <Route element={<MenPants />} path="men-pants" />
          <Route element={<KidsShirts />} path="kids-shirts" />
          <Route element={<Checkout />} path="checkout" />
          <Route element={<Hats />} path="hats" />
          <Route element={<WomenJackets />} path="women-jackets" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;