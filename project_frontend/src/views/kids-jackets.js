import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './kids-jackets.css'

const KidsJackets = (props) => {
  return (
    <div className="kids-jackets-container">
      <Helmet>
        <title>Kids-Jackets - 361 Project</title>
        <meta property="og:title" content="Kids-Jackets - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name18"></Header>
      <h1 className="kids-jackets-text">
        <span>Kid&apos;s Jackets &amp; Hoodies</span>
        <br></br>
      </h1>
    </div>
  )
}

export default KidsJackets
