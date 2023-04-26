import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
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
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Necklaces/>} exact path="/necklaces" />
          <Route element={<Backpacks/>} exact path="/backpacks" />
          <Route element={<KidsShorts/>} exact path="/kids-shorts" />
          <Route element={<KidsPants/>} exact path="/kids-pants" />
          <Route element={<Sales/>} exact path="/sales" />
          <Route element={<WomenShorts/>} exact path="/women-shorts" />
          <Route element={<MenShirts/>} exact path="/men-shirts" />
          <Route element={<CartPage/>} exact path="/cart-page" />
          <Route element={<MenJackets/>} exact path="/men-jackets" />
          <Route element={<WomenPants/>} exact path="/women-pants" />
          <Route element={<LoginPage/>} exact path="/login-page" />
          <Route element={<Register/>} exact path="/register" />
          <Route element={<KidsJackets/>} exact path="/kids-jackets" />
          <Route element={<MenShorts/>} exact path="/men-shorts" />
          <Route element={<Watches/>} exact path="/watches" />
          <Route element={<WomenShirts/>} exact path="/women-shirts" />
          <Route element={<HomePage/>} exact path="/" />
          <Route element={<MenPants/>} exact path="/men-pants" />
          <Route element={<KidsShirts/>} exact path="/kids-shirts" />
          <Route element={<Checkout/>} exact path="/checkout" />
          <Route element={<Hats/>} exact path="/hats" />
          <Route element={<WomenJackets/>} exact path="/women-jackets" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;