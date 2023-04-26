import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './backpacks.css'

const Backpacks = (props) => {
  return (
    <div className="backpacks-container">
      <Helmet>
        <title>Backpacks - 361 Project</title>
        <meta property="og:title" content="Backpacks - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name1"></Header>
      <h1 className="backpacks-text">Backpacks</h1>
    </div>
  )
}

export default Backpacks
