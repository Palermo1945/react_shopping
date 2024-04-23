import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css'

export const Navbar = () => {
  return (
  <div className='navbar'>   
    <div className='links'>
      <div className='extras'>
    <Link to="/home">Home</Link>
    <Link to="/home">Contacts</Link>
    <Link to="/home">About Us</Link>
    </div>
   
      <Link to="/">Shop</Link>
      <Link to="/cart"><ShoppingCart size={32}  />
      </Link>
    </div>
    </div>
  );
};
