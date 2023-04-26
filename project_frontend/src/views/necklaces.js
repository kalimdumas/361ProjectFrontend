import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './necklaces.css'

const Necklaces = (props) => {
  return (
    <div className="necklaces-container">
      <Helmet>
        <title>Necklaces - 361 Project</title>
        <meta property="og:title" content="Necklaces - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name9"></Header>
      <h1 className="necklaces-text">
        <span>Necklaces</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Necklaces
