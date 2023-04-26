import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './men-shirts.css'

const MenShirts = (props) => {
  return (
    <div className="men-shirts-container">
      <Helmet>
        <title>Men-Shirts - 361 Project</title>
        <meta property="og:title" content="Men-Shirts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name11"></Header>
      <h1 className="men-shirts-text">Men&apos;s Shirts</h1>
    </div>
  )
}

export default MenShirts
