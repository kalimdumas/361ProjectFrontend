import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './hats.css'

const Hats = (props) => {
  return (
    <div className="hats-container">
      <Helmet>
        <title>Hats - 361 Project</title>
        <meta property="og:title" content="Hats - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name20"></Header>
      <h1 className="hats-text">
        <span>Hats</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Hats
