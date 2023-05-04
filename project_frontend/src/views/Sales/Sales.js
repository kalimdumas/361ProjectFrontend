import React from 'react'

import { Helmet } from 'react-helmet'

import './Sales.css'

const Sales = (props) => {
  return (
    <div className="sales-container">
      <Helmet>
        <title>Sales - 361 Project</title>
        <meta property="og:title" content="Sales - 361 Project" />
      </Helmet>
      <h1 className="sales-text">
        <span>On Sale</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Sales
