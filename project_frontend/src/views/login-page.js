import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>Login-Page - 361 Project</title>
        <meta property="og:title" content="Login-Page - 361 Project" />
      </Helmet>
      <input type="text" className="login-page-username input" />
      <input type="text" className="login-page-password input" />
      <span className="login-page-text">Username:</span>
      <span className="login-page-text01">Password:</span>
      <div className="login-page-container1"></div>
      <button className="login-page-button button">Register</button>
      <button className="login-page-button1 button">Login</button>
      <span className="login-page-text02">
        Not an account yet? Create one now
      </span>
      <h1 className="login-page-text03">Login Page</h1>
      <header data-role="Header" className="login-page-header">
        <Link to="/" className="login-page-navlink">
          <img
            alt="logo"
            src="https://drive.google.com/uc?id=1oolMybuysM9rPeayiKkqVsv6D7J4xcZ2"
            className="login-page-image"
          />
        </Link>
        <div className="login-page-container2">
          <div
            data-thq="thq-dropdown"
            className="login-page-thq-dropdown list-item"
          >
            <div
              data-thq="thq-dropdown-toggle"
              className="login-page-dropdown-toggle"
            >
              <span className="login-page-text04">Men</span>
              <div
                data-thq="thq-dropdown-arrow"
                className="login-page-dropdown-arrow"
              >
                <svg viewBox="0 0 1024 1024" className="login-page-icon">
                  <path d="M426 726v-428l214 214z"></path>
                </svg>
              </div>
            </div>
            <ul
              data-thq="thq-dropdown-list"
              className="login-page-dropdown-list"
            >
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown list-item"
              >
                <Link to="/men-shirts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="login-page-dropdown-toggle01"
                  >
                    <span className="login-page-text05">
                      <span>Shirts</span>
                      <br></br>
                    </span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown01 list-item"
              ></li>
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown02 list-item"
              >
                <Link to="/men-pants">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="login-page-dropdown-toggle02"
                  >
                    <span className="login-page-text08">Pants</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown03 list-item"
              >
                <Link to="/men-shorts">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="login-page-dropdown-toggle03"
                  >
                    <span className="login-page-text09">Shorts</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown04 list-item"
              >
                <Link to="/men-jackets">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="login-page-dropdown-toggle04"
                  >
                    <span className="login-page-text10">Jackets/Hoodies</span>
                  </div>
                </Link>
              </li>
              <li
                data-thq="thq-dropdown"
                className="login-page-dropdown05 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle05"
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div
          data-thq="thq-dropdown"
          className="login-page-thq-dropdown1 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="login-page-dropdown-toggle06"
          >
            <span className="login-page-text11">
              <span>Women</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="login-page-dropdown-arrow1"
            >
              <svg viewBox="0 0 1024 1024" className="login-page-icon02">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="login-page-dropdown-list1"
          >
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown06 list-item"
            >
              <Link to="/women-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle07"
                >
                  <span className="login-page-text14">Shirts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown07 list-item"
            >
              <Link to="/women-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle08"
                >
                  <span className="login-page-text15">Pants</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown08 list-item"
            >
              <Link to="/women-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle09"
                >
                  <span className="login-page-text16">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown09 list-item"
            >
              <Link to="/women-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle10"
                >
                  <span className="login-page-text17">Jackets/Hoodies</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown10 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown11 list-item"
            ></li>
          </ul>
        </div>
        <div
          data-thq="thq-dropdown"
          className="login-page-thq-dropdown2 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="login-page-dropdown-toggle11"
          >
            <span className="login-page-text18">
              <span>Kids</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="login-page-dropdown-arrow2"
            >
              <svg viewBox="0 0 1024 1024" className="login-page-icon04">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="login-page-dropdown-list2"
          >
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown12 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown13 list-item"
            >
              <Link to="/kids-shirts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle12"
                >
                  <span className="login-page-text21">
                    <span>Shirts</span>
                    <br></br>
                  </span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown14 list-item"
            ></li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown15 list-item"
            >
              <Link to="/kids-shorts">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle13"
                >
                  <span className="login-page-text24">Shorts</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown16 list-item"
            >
              <Link to="/kids-pants">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle14"
                >
                  <span className="login-page-text25">
                    <span>Pants </span>
                    <br></br>
                  </span>
                </div>
              </Link>
              <Link to="/kids-jackets">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle15"
                >
                  <span className="login-page-text28">
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
          className="login-page-thq-dropdown3 list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="login-page-dropdown-toggle16"
          >
            <span className="login-page-text31">Accessories</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="login-page-dropdown-arrow3"
            >
              <svg viewBox="0 0 1024 1024" className="login-page-icon06">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="login-page-dropdown-list3"
          >
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown17 list-item"
            >
              <Link to="/hats">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle17"
                >
                  <span className="login-page-text32">Hats</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown18 list-item"
            >
              <Link to="/watches">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle18"
                >
                  <span className="login-page-text33">Watches</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown19 list-item"
            >
              <Link to="/necklaces">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle19"
                >
                  <span className="login-page-test">Necklaces</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown20 list-item"
            >
              <Link to="/backpacks">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="login-page-dropdown-toggle20"
                >
                  <span className="login-page-test1">Backpacks</span>
                </div>
              </Link>
            </li>
            <li
              data-thq="thq-dropdown"
              className="login-page-dropdown21 list-item"
            ></li>
          </ul>
        </div>
        <Link to="/sales" className="login-page-navlink17">
          On Sale
        </Link>
        <input
          type="text"
          placeholder="Search"
          className="login-page-textinput input"
        />
        <Link to="/login-page" className="login-page-login button">
          Login
        </Link>
        <button className="login-page-register button">Register</button>
        <Link to="/cart-page" className="login-page-navlink18">
          <svg viewBox="0 0 1024 1024" className="login-page-icon08">
            <path d="M726 768q34 0 59 26t25 60-25 59-59 25-60-25-26-59 26-60 60-26zM42 86h140l40 84h632q18 0 30 13t12 31q0 2-6 20l-152 276q-24 44-74 44h-318l-38 70-2 6q0 10 10 10h494v86h-512q-34 0-59-26t-25-60q0-20 10-40l58-106-154-324h-86v-84zM298 768q34 0 60 26t26 60-26 59-60 25-59-25-25-59 25-60 59-26z"></path>
          </svg>
        </Link>
        <div data-role="BurgerMenu" className="login-page-burger-menu">
          <svg viewBox="0 0 1024 1024" className="login-page-icon10">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="login-page-mobile-menu">
          <div className="login-page-nav">
            <div className="login-page-container3">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="login-page-image1"
              />
              <div
                data-role="CloseMobileMenu"
                className="login-page-menu-close"
              >
                <svg viewBox="0 0 1024 1024" className="login-page-icon12">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName55"></NavigationLinks>
          </div>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="login-page-icon14"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="login-page-icon16"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="login-page-icon18"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
    </div>
  )
}

export default LoginPage
