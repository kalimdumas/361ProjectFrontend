import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './women-jackets.css'

const WomenJackets = (props) => {
  return (
    <div className="women-jackets-container">
      <Helmet>
        <title>Women-Jackets - 361 Project</title>
        <meta property="og:title" content="Women-Jackets - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <h1 className="women-jackets-text">
        <span>Women&apos;s Jackets &amp; Hoodies</span>
        <br></br>
      </h1>
    </div>
  )
}

export default WomenJackets
