import './Navbar.css';

import React from 'react'
import logo from '../assets/images/Logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='fitness-logo' className='navbar__logo'/>
      <ul className='navbar__links'>
            <li>
                <NavLink to='/' className='navbar__navlinks'>Home</NavLink>
            </li>
            <li>
                <a href='#exercise' className='navbar__anchor'>Exercises</a>
            </li>
      </ul>
    </div>
  )
}

export default Navbar
