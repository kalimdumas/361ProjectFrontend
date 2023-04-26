import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './men-shorts.css'

const MenShorts = (props) => {
  return (
    <div className="men-shorts-container">
      <Helmet>
        <title>Men-Shorts - 361 Project</title>
        <meta property="og:title" content="Men-Shorts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name10"></Header>
      <h1 className="men-shorts-text">
        <span>Men&apos;s Short</span>
        <br></br>
      </h1>
    </div>
  )
}

export default MenShorts
