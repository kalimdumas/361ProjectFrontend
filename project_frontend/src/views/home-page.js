import React, { useState } from 'react'
import Navbar from '../components/Navbar';

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import './home-page.css'

const HomePage = (props) => {

  const [products, setProducts] = useState([]);

  function handleClick(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-shirts", requestOptions)
      .then(response => response.json())
      .then(result => setProducts(result))
      .catch(error => console.log('error', error));
  }
  return (
    <div className="home-page-container">
      <Helmet>
        <title>361 Project</title>
        <meta property="og:title" content="361 Project" />
      </Helmet>
      <Navbar/>
      <div className="home-page-container3">
        <div className="home-page-container4">
          <h1 className="home-page-text30">
            <span>
              <span>
                Explore our new apparel store built for Nebraskans,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span>by Huskers</span>
          </h1>
          <div className="home-page-btn-group">
            <a href="#FrontProducts" className="home-page-link button">
              Start Shopping
            </a>
            <button className="home-page-button button">Learn More</button>
          </div>
        </div>
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nebraska_Cornhuskers_logo.svg/1024px-Nebraska_Cornhuskers_logo.svg.png"
          className="home-page-image2"
        />
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nebraska_Cornhuskers_logo.svg/1024px-Nebraska_Cornhuskers_logo.svg.png"
          className="home-page-image3"
        />
        <img
          alt="image"
          src="https://drive.google.com/uc?id=15V6U7_K-5f2oqukX5_t0JmwEXx7r1CpZ"
          className="home-page-image4"
        />
      </div>
      <div id="FrontProducts" className="home-page-features">
        <h1 className="home-page-text36">
          <span>New Arrivals</span>
          <br></br>
        </h1>
        <button onClick={handleClick}>getMensShirts</button>
        <div className="home-page-container5">
          <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName4"></FeatureCard1>
        </div>
      </div>
    </div>
  )
}

export default HomePage
