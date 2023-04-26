import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './men-pants.css'

const MenPants = (props) => {
  return (
    <div className="men-pants-container">
      <Helmet>
        <title>Men-Pants - 361 Project</title>
        <meta property="og:title" content="Men-Pants - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name12"></Header>
      <h1 className="men-pants-text">
        <span>Men&apos;s Pants</span>
        <br></br>
      </h1>
    </div>
  )
}

export default MenPants
