import React from 'react';
import '../styles/header.css';
import '../styles/fonts.css';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="slider-text">
          <a href="https://www.google.com">Open Wednesday - Sunday 9:30am-4:30pm and Bank Holidays!</a>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Diddly Squat Farm" />
          <span>Little England Farm</span>
        </div>
        <ul className="nav-links">
          <li><a href="#">SHOP</a></li>
          <li><a href="#">OUR STORY</a></li>
          <li><a href="#">GIFTS</a></li>
          <li><a href="#">BUNDLES</a></li>
        </ul>
        <div className="nav-icons">
          <a href="#"><i className="fas fa-search"></i></a>
          <a href="#"><i className="fas fa-user"></i></a>
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
