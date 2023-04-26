import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './women-pants.css'

const WomenPants = (props) => {
  return (
    <div className="women-pants-container">
      <Helmet>
        <title>Women-Pants - 361 Project</title>
        <meta property="og:title" content="Women-Pants - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <h1 className="women-pants-text">Women&apos;s Pants</h1>
    </div>
  )
}

export default WomenPants
