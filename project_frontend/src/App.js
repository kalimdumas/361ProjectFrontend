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
import DisplayProducts from './components/DisplayProducts'

const App = () => {
  const [cart, setCart] = useState([{}]);

  const addToCart = (items) => {
    setCart([items, ...cart]);
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
          <Route element={<Necklaces addToCart={addToCart} />} path="necklaces" />
          <Route element={<Backpacks addToCart={addToCart} />} path="backpacks" />
          <Route element={<KidsShorts addToCart={addToCart} />} path="kids-shorts" />
          <Route element={<KidsPants addToCart={addToCart} />} path="kids-pants" />
          <Route element={<Sales addToCart={addToCart} />} path="sales" />
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
          <Route element={<Checkout addToCart={addToCart} />} path="checkout" />
          <Route element={<Hats addToCart={addToCart} />} path="hats" />
          <Route element={<WomenJackets addToCart={addToCart} />} path="women-jackets" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;