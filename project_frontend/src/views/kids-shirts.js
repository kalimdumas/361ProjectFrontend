import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './kids-shirts.css'

const KidsShirts = (props) => {
  return (
    <div className="kids-shirts-container">
      <Helmet>
        <title>Kids-Shirts - 361 Project</title>
        <meta property="og:title" content="Kids-Shirts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name16"></Header>
      <h1 className="kids-shirts-text">Kid&apos;s Shirts</h1>
    </div>
  )
}

export default KidsShirts
