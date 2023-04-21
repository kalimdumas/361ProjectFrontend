import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './men-shorts.css'

const MenShorts = (props) => {
  return (
    <div className="men-shorts-container">
      <Helmet>
        <title>Men-Shorts - 361 Project</title>
        <meta property="og:title" content="Men-Shorts - 361 Project" />
      </Helmet>
      <header data-role="Header" className="men-shorts-header">
        <Link to="/" className="men-shorts-navlink">
          <img
            alt="logo"
            src="https://drive.google.com/uc?id=1oolMybuysM9rPeayiKkqVsv6D7J4xcZ2"
            className="men-shorts-image"
          />
        </Link>
        <div className="men-shorts-container1">
          <div
            data-thq="thq-dropdown"
            className="men-shorts-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="men-shorts-dropdown-toggle"
            >
              <span className="men-shorts-text">Men</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="men-shorts-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="men-shorts-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="men-shorts-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown list-item"
              >
                <Link to="/men-shirts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="men-shorts-dropdown-toggle01"
                  >
                    <span className="men-shorts-text01">
                      <span>Shirts</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown01 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown02 list-item"
              >
                <Link to="/men-pants">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="men-shorts-dropdown-toggle02"
                  >
                    <span className="men-shorts-text04">Pants</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown03 list-item"
              >
                <Link to="/men-shorts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="men-shorts-dropdown-toggle03"
                  >
                    <span className="men-shorts-text05">Shorts</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown04 list-item"
              >
                <Link to="/men-jackets">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="men-shorts-dropdown-toggle04"
                  >
                    <span className="men-shorts-text06">Jackets/Hoodies</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="men-shorts-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle05"
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-dropdown"
          className="men-shorts-thq-dropdown1 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="men-shorts-dropdown-toggle06"
          >
            <span className="men-shorts-text07">
              <span>Women</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="men-shorts-dropdown-arrow1"
            >
              <svg viewBox="0 0 1024 1024" className="men-shorts-icon02">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="men-shorts-dropdown-list1"
          >
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown06 list-item"
            >
              <Link to="/women-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle07"
                >
                  <span className="men-shorts-text10">Shirts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown07 list-item"
            >
              <Link to="/women-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle08"
                >
                  <span className="men-shorts-text11">Pants</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown08 list-item"
            >
              <Link to="/women-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle09"
                >
                  <span className="men-shorts-text12">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown09 list-item"
            >
              <Link to="/women-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle10"
                >
                  <span className="men-shorts-text13">Jackets/Hoodies</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown10 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown11 list-item"
            ></li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="men-shorts-thq-dropdown2 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="men-shorts-dropdown-toggle11"
          >
            <span className="men-shorts-text14">
              <span>Kids</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="men-shorts-dropdown-arrow2"
            >
              <svg viewBox="0 0 1024 1024" className="men-shorts-icon04">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="men-shorts-dropdown-list2"
          >
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown12 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown13 list-item"
            >
              <Link to="/kids-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle12"
                >
                  <span className="men-shorts-text17">
                    <span>Shirts</span>
                    <br></br>
                  </span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown14 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown15 list-item"
            >
              <Link to="/kids-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle13"
                >
                  <span className="men-shorts-text20">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown16 list-item"
            >
              <Link to="/kids-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle14"
                >
                  <span className="men-shorts-text21">
                    <span>Pants </span>
                    <br></br>
                  </span>
                </div>
              </Link>
              <Link to="/kids-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle15"
                >
                  <span className="men-shorts-text24">
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
          className="men-shorts-thq-dropdown3 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="men-shorts-dropdown-toggle16"
          >
            <span className="men-shorts-text27">Accessories</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="men-shorts-dropdown-arrow3"
            >
              <svg viewBox="0 0 1024 1024" className="men-shorts-icon06">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="men-shorts-dropdown-list3"
          >
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown17 list-item"
            >
              <Link to="/hats">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle17"
                >
                  <span className="men-shorts-text28">Hats</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown18 list-item"
            >
              <Link to="/watches">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle18"
                >
                  <span className="men-shorts-text29">Watches</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown19 list-item"
            >
              <Link to="/necklaces">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle19"
                >
                  <span className="men-shorts-test">Necklaces</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown20 list-item"
            >
              <Link to="/backpacks">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="men-shorts-dropdown-toggle20"
                >
                  <span className="men-shorts-test1">Backpacks</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="men-shorts-dropdown21 list-item"
            ></li>
          </ul>
        </div>
        <Link to="/sales" className="men-shorts-navlink17">
          On Sale
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="men-shorts-textinput input"
        />
        <Link to="/login-page" className="men-shorts-login button">
          Login
        </Link>
        <button className="men-shorts-register button">Register</button>
        <Link to="/cart-page" className="men-shorts-navlink18">
          <svg viewBox="0 0 1024 1024" className="men-shorts-icon08">
            <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
          </svg>
        </Link>
        <div data-role="BurgerMenu" className="men-shorts-burger-menu">
          <svg viewBox="0 0 1024 1024" className="men-shorts-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="men-shorts-mobile-menu">
          <div className="men-shorts-nav">
            <div className="men-shorts-container2">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="men-shorts-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="men-shorts-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="men-shorts-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName51"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="men-shorts-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="men-shorts-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="men-shorts-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <h1 className="men-shorts-text30">
        <span>Men&apos;s Short</span>
        <br></br>
      </h1>
    </div>
  )
}

export default MenShorts
