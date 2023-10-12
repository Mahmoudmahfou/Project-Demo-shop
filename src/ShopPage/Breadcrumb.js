import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CartProvider } from 'react-use-cart';
export default class Breadcrumb extends Component {
  render() {
    return (
      <CartProvider>
        <section className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__text">
                  <h4>Shop</h4>
                  <div className="breadcrumb__links">
                    <Link to="/">Home</Link>
                    <span>Shop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CartProvider>
    );
  }
}
