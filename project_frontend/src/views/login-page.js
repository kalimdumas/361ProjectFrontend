import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Login-Page - 361 Project</title>
        <meta property="og:title" content="Login-Page - 361 Project" />
      </Helmet>
      <input type="text" className="login-page-username input" />
      <input type="text" className="login-page-password input" />
      <span className="login-page-text">Username:</span>
      <span className="login-page-text1">Password:</span>
      <div className="login-page-container1"></div>
      <Header rootClassName="header-root-class-name14"></Header>
      <Link to="/register" className="login-page-navlink button">
        Register
      </Link>
      <button className="login-page-button button">Login</button>
      <span className="login-page-text2">
        Not an account yet? Create one now
      </span>
      <h1 className="login-page-text3">Login Page</h1>
    </div>
  )
}

export default LoginPage
