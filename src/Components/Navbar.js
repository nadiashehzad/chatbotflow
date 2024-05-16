import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    <nav className='bg-green-400 p-4  '>
      <ul className='flex justify-center space-x-6' >
        <li>
        <Link to="/">
          <div className='text-red-200 hover:text-yellow-400 py-2 font-bold font-serif'>
          Home
          </div>
          </Link>
        </li>
        
        <li>
          <Link to="/about">
          <div className='text-red-200 hover:text-yellow-400 py-2 font-bold font-serif'>
          About
          </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
  

}

export default Navbar