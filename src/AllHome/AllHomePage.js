import React from 'react';
import Offcanvas from './Offcanvas';
import Header from './Header';
import Hero from './Hero';
import Banner from './Banner';
import Product from './Product';
import Categories from './Categories';
import InstaSection from './InstaSection';
import LatestBlog from './LatestBlog';
import Footer from './Footer';
import Search from './Search';
import { CartProvider } from 'react-use-cart';

function AllHomePage() {
  return (
    <CartProvider>
        <Offcanvas/>
        <Header/>
        <Hero/>
        <Banner/>
        <Product/>
        <Categories/>
        <InstaSection/>
        <LatestBlog/>
        <Footer/>
        <Search/>
    </CartProvider>
  )
}

export default AllHomePage