import React from 'react'
import swiggyLogo from '../../public/swiggy-logo.png'


function Footer() {
  return (
    <div className='flex bg-slate-800 px-48 py-16'>
        <div className=' flex flex-row text-white'>
            <img src={swiggyLogo} alt="logo" className='w-16 h-fit' />
            <span className='font-bold text-xl '>Swiggy</span>
        </div>
        <div className='flex flex-col ml-12 space-y-5'>
            <h3 className='font-bold text-lg text-white'>Company</h3>
            <ul className='text-gray-400'>
                <li className='pb-2'>About</li>
                <li className='pb-2'>Careers</li>
                <li className='pb-2'>Team</li>
                <li className='pb-2'>Swiggy one</li>
                <li className='pb-2'>Swiggy Instamart</li>
                <li className='pb-2'>Swiggy Genie</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer