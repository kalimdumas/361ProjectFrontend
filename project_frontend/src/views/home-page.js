import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import FeatureCard1 from '../components/feature-card1'
import './home-page.css'

const HomePage = (props) => {
  return (
    <div className="home-page-container">
      <Helmet>
        <title>361 Project</title>
        <meta property="og:title" content="361 Project" />
      </Helmet>
      <header data-role="Header" className="home-page-header">
        <Link to="/" className="home-page-navlink">
          <img
            alt="logo"
            src="https://drive.google.com/uc?id=1oolMybuysM9rPeayiKkqVsv6D7J4xcZ2"
            className="home-page-image"
          />
        </Link>
        <div className="home-page-container1">
          <div
            data-thq="thq-dropdown"
            className="home-page-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="home-page-dropdown-toggle"
            >
              <span className="home-page-text">Men</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="home-page-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="home-page-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="home-page-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown list-item"
              >
                <Link to="/men-shirts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-page-dropdown-toggle01"
                  >
                    <span className="home-page-text01">
                      <span>Shirts</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown01 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown02 list-item"
              >
                <Link to="/men-pants">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-page-dropdown-toggle02"
                  >
                    <span className="home-page-text04">Pants</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown03 list-item"
              >
                <Link to="/men-shorts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-page-dropdown-toggle03"
                  >
                    <span className="home-page-text05">Shorts</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown04 list-item"
              >
                <Link to="/men-jackets">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="home-page-dropdown-toggle04"
                  >
                    <span className="home-page-text06">Jackets/Hoodies</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="home-page-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle05"
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-dropdown"
          className="home-page-thq-dropdown1 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="home-page-dropdown-toggle06"
          >
            <span className="home-page-text07">
              <span>Women</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="home-page-dropdown-arrow1"
            >
              <svg viewBox="0 0 1024 1024" className="home-page-icon02">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-page-dropdown-list1">
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown06 list-item"
            >
              <Link to="/women-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle07"
                >
                  <span className="home-page-text10">Shirts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown07 list-item"
            >
              <Link to="/women-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle08"
                >
                  <span className="home-page-text11">Pants</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown08 list-item"
            >
              <Link to="/women-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle09"
                >
                  <span className="home-page-text12">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown09 list-item"
            >
              <Link to="/women-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle10"
                >
                  <span className="home-page-text13">Jackets/Hoodies</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown10 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown11 list-item"
            ></li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="home-page-thq-dropdown2 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="home-page-dropdown-toggle11"
          >
            <span className="home-page-text14">
              <span>Kids</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="home-page-dropdown-arrow2"
            >
              <svg viewBox="0 0 1024 1024" className="home-page-icon04">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-page-dropdown-list2">
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown12 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown13 list-item"
            >
              <Link to="/kids-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle12"
                >
                  <span className="home-page-text17">
                    <span>Shirts</span>
                    <br></br>
                  </span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown14 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown15 list-item"
            >
              <Link to="/kids-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle13"
                >
                  <span className="home-page-text20">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown16 list-item"
            >
              <Link to="/kids-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle14"
                >
                  <span className="home-page-text21">
                    <span>Pants </span>
                    <br></br>
                  </span>
                </div>
              </Link>
              <Link to="/kids-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle15"
                >
                  <span className="home-page-text24">
                    <span>Jackets/Hoodies</span>
                    <br></br>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="home-page-thq-dropdown3 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="home-page-dropdown-toggle16"
          >
            <span className="home-page-text27">Accessories</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="home-page-dropdown-arrow3"
            >
              <svg viewBox="0 0 1024 1024" className="home-page-icon06">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="home-page-dropdown-list3">
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown17 list-item"
            >
              <Link to="/hats">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle17"
                >
                  <span className="home-page-text28">Hats</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown18 list-item"
            >
              <Link to="/watches">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle18"
                >
                  <span className="home-page-text29">Watches</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown19 list-item"
            >
              <Link to="/necklaces">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle19"
                >
                  <span className="home-page-test">Necklaces</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown20 list-item"
            >
              <Link to="/backpacks">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-page-dropdown-toggle20"
                >
                  <span className="home-page-test1">Backpacks</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="home-page-dropdown21 list-item"
            ></li>
          </ul>
        </div>
        <Link to="/sales" className="home-page-navlink17">
          On Sale
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="home-page-textinput input"
        />
        <Link to="/login-page" className="home-page-login button">
          Login
        </Link>
        <button className="home-page-register button">Register</button>
        <Link to="/cart-page" className="home-page-navlink18">
          <svg viewBox="0 0 1024 1024" className="home-page-icon08">
            <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
          </svg>
        </Link>
        <div data-role="BurgerMenu" className="home-page-burger-menu">
          <svg viewBox="0 0 1024 1024" className="home-page-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="home-page-mobile-menu">
          <div className="home-page-nav">
            <div className="home-page-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="home-page-image1"
              />
              <div data-role="CloseMobileMenu" className="home-page-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-page-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="home-page-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="home-page-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="home-page-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
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
