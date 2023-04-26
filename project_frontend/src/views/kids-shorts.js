import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './kids-shorts.css'

const KidsShorts = (props) => {
  return (
    <div className="kids-shorts-container">
      <Helmet>
        <title>Kids-Shorts - 361 Project</title>
        <meta property="og:title" content="Kids-Shorts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name15"></Header>
      <h1 className="kids-shorts-text">Kid&apos;s Shorts</h1>
    </div>
  )
}

export default KidsShorts
