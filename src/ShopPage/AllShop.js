

// import React, { Component } from "react";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import Breadcrumb from "./Breadcrumb";
import ShopSection from "./ShopSection";
import { CartProvider } from 'react-use-cart';

function AllShop() {
  
    return (
      <CartProvider>
        <Header />
        <Breadcrumb/>
        <ShopSection/>
        <Footer/>
      </CartProvider>
    );
  
}
export default AllShop;
