import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import './watches.css'

const Watches = (props) => {
  return (
    <div className="watches-container">
      <Helmet>
        <title>Watches - 361 Project</title>
        <meta property="og:title" content="Watches - 361 Project" />
      </Helmet>
      <Header rootClassName="header-root-class-name6"></Header>
      <h1 className="watches-text">
        <span>Watches</span>
        <br></br>
      </h1>
    </div>
  )
}

export default Watches
