import React from 'react'
import Headers from './headers/Headers'
import LandingPage from './landingPage/LandingPage'
import Cart from './cart/Cart';
import CartHeaders from './headers/CartHeaders';
import RestaurantMenu from './resturant/RestaurantMenu';
import Resturant from './resturant/Resturant';

function Home() {
  // const cartSelected = localStorage.getItem('cartSelected');
  // localStorage.removeItem('cartSelected');
  // console.log(cartSelected);
  return (
    <div>
      <Headers />
      {/* <Cart /> */}
      <LandingPage /> 
    </div>
  );
}

export default Home