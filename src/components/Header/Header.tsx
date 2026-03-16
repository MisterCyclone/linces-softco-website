// Import react and styling
import React from 'react';
import './Header.css';

import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <div className='header'>
    <img src={logo} className='header-logo'/>
    <div className='header-pages'>
      <p>Home</p>
      <p>About Us</p>
      <p>Velocity CTDMS</p>
      <p>Services</p>
      <p>Contact</p>
      <p>Book a Demo</p>
    </div>
  </div>
);

export default Header;