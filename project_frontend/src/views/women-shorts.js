import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './women-shorts.css'

const WomenShorts = (props) => {
  return (
    <div className="women-shorts-container">
      <Helmet>
        <title>Women-Shorts - 361 Project</title>
        <meta property="og:title" content="Women-Shorts - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name2"></Header>
      <h1 className="women-shorts-text">Women&apos;s Shorts</h1>
    </div>
  )
}

export default WomenShorts
