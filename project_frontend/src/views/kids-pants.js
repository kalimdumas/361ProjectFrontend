import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './kids-pants.css'

const KidsPants = (props) => {
  return (
    <div className="kids-pants-container">
      <Helmet>
        <title>Kids-Pants - 361 Project</title>
        <meta property="og:title" content="Kids-Pants - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name17"></Header>
      <h1 className="kids-pants-text">Kid&apos;s Pants</h1>
    </div>
  )
}

export default KidsPants
