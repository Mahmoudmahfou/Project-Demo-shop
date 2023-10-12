/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import { CartProvider, useCart } from 'react-use-cart';
function Header() {
  const {cartTotal,totalItems} =useCart();
  
  return (
    <CartProvider>
      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <a href="#">Sign in</a>
                    <a href="#">FAQs</a>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down"></i>
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <NavLink to="/">
                  <img src="img/logo.png" alt="" />
                </NavLink>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/shop">Shop</NavLink>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/about">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/ShopDetails">Shop Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/ShopCart">Shopping Cart</NavLink>
                      </li>
                      <li>
                        <NavLink to="/CheckOut">Check Out</NavLink>
                      </li>
                      <li>
                        <NavLink to="/BlogDetails">Blog Details</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Contact">Contacts</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <a href="#" className="search-switch">
                  <img src="img/icon/search.png" alt="" />
                </a>
                <a href="#">
                  <img src="img/icon/heart.png" alt="" />
                </a>
                <NavLink to="/ShopCart">
                  <img src="img/icon/cart.png" alt="" style={{height:'25px',width:'25px'}} /> <span className="">{totalItems}</span>
                </NavLink>
                <div className="price">$ {cartTotal}</div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}
    </CartProvider>
  );
}

export default Header;
