import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './women-shirts.css'

const WomenShirts = (props) => {
  return (
    <div className="women-shirts-container">
      <Helmet>
        <title>Women-Shirts - 361 Project</title>
        <meta property="og:title" content="Women-Shirts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name3"></Header>
      <h1 className="women-shirts-text">Women&apos;s Shirts</h1>
    </div>
  )
}

export default WomenShirts
