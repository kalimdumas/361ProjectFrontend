import React from 'react'
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom'

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
      <Router>
          <Route component={Necklaces} exact path="/necklaces" />
          <Route component={Backpacks} exact path="/backpacks" />
          <Route component={KidsShorts} exact path="/kids-shorts" />
          <Route component={KidsPants} exact path="/kids-pants" />
          <Route component={Sales} exact path="/sales" />
          <Route component={WomenShorts} exact path="/women-shorts" />
          <Route component={MenShirts} exact path="/men-shirts" />
          <Route component={CartPage} exact path="/cart-page" />
          <Route component={MenJackets} exact path="/men-jackets" />
          <Route component={WomenPants} exact path="/women-pants" />
          <Route component={LoginPage} exact path="/login-page" />
          <Route component={Register} exact path="/register" />
          <Route component={KidsJackets} exact path="/kids-jackets" />
          <Route component={MenShorts} exact path="/men-shorts" />
          <Route component={Watches} exact path="/watches" />
          <Route component={WomenShirts} exact path="/women-shirts" />
          <Route component={HomePage} exact path="/" />
          <Route component={MenPants} exact path="/men-pants" />
          <Route component={KidsShirts} exact path="/kids-shirts" />
          <Route component={Checkout} exact path="/checkout" />
          <Route component={Hats} exact path="/hats" />
          <Route component={WomenJackets} exact path="/women-jackets" />
      </Router>
  )
}

export default App;