import { Helmet } from 'react-helmet'
import { useState, useEffect } from 'react';
import DisplayProducts from '../components/DisplayProducts';

import './home-page.css'

const HomePage = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost:5257/home-page", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="home-page-container">
      <Helmet>
        <title>361 Project</title>
        <meta property="og:title" content="361 Project" />
        <link rel="icon" type="image/png" href="../../public/logo192.png" sizes="16x16" />
      </Helmet>
      <div className="home-page-container1">
        <div className="home-page-container2">
          <h1 className="home-page-text">
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
          className="home-page-image"
        />
        <img
          alt="image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Nebraska_Cornhuskers_logo.svg/1024px-Nebraska_Cornhuskers_logo.svg.png"
          className="home-page-image1"
        />
        <img
          alt="image"
          src="https://drive.google.com/uc?id=15V6U7_K-5f2oqukX5_t0JmwEXx7r1CpZ"
          className="home-page-image2"
        />
      </div>
      {/* <div id="FrontProducts" className="home-page-features">
        <h1 className="home-page-text6">
          <span>New Arrivals</span>
          <br></br>
        </h1>
        <div className="home-page-container3">
          <FeatureCard1 rootClassName="rootClassName"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName1"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName2"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName3"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName7"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName6"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName5"></FeatureCard1>
          <FeatureCard1 rootClassName="rootClassName4"></FeatureCard1>
        </div>
      </div> */}

        <h1 className="home-page-text6">
          <span>New Arrivals</span>
          <br></br>
        </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default HomePage
