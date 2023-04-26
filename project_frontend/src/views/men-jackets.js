import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './men-jackets.css'

const MenJackets = (props) => {
  return (
    <div className="men-jackets-container">
      <Helmet>
        <title>Men-Jackets - 361 Project</title>
        <meta property="og:title" content="Men-Jackets - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name13"></Header>
      <h1 className="men-jackets-text">
        <span>Men&apos;s Jackets </span>
        <br></br>
      </h1>
    </div>
  )
}

export default MenJackets
