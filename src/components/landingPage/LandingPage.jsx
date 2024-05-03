import React from 'react'
import Resturant from '../resturant/Resturant';
import Filter from '../filters/Filter';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';


function LandingPage() {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  return (
    <div >
    <div className='flex flex-col px-44 mx-auto'>
         <Filter />
         <div className='grid grid-cols-4'>
         {
          array.map((element,i) => (
           <Link to='/restaurant'> <Resturant key={i}/></Link>
          ))
         }
         </div>
    </div>
    <Footer />
    </div>
  )
}

export default LandingPage