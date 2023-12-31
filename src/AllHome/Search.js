import React from 'react'
import { CartProvider } from 'react-use-cart';
export default function Search() {
  return (
    <CartProvider>
        <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
            <div className="search-close-switch">+</div>
            <form className="search-model-form">
                <input type="text" id="search-input" placeholder="Search here....."/>
            </form>
        </div>
    </div>
    </CartProvider>
  )
}
