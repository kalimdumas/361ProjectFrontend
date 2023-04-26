import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './sales.css'

const Sales = (props) => {
  return (
    <div className="sales-container">
      <Helmet>
        <title>Sales - 361 Project</title>
        <meta property="og:title" content="Sales - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name7"></Header>
      <h1 className="sales-text">
        <span>On Sale</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Sales
