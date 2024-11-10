import React from 'react';
import '../styles/footer.css';
import logo from '../images/logo.png';
import tractorIcon from '../images/tractor - Copy.png';
import grain from '../images/grain.png';
import grain2 from '../images/grain.png';
import grain3 from '../images/grain.png';
import grain4 from '../images/grain.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Logo and Social Icons Section */}
        <div className="footer-logo-section">
          <img src={logo} alt="Diddly Squat Farm" className="footer-logo" />
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="footer-links-section">
          <div className="footer-column">
            <h4>SHOP</h4>
            <ul>
              <li><a href="#">All</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Kitchen</a></li>
              <li><a href="#">LittleEngland Drinks</a></li>
              <li><a href="#">Bundles</a></li>
              <li><a href="#">Gifts</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>SUPPORT</h4>
            <ul>
              <li><a href="#">Privacy Statement</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">T&C's</a></li>
              <li><a href="#">Refund Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>ADDRESS & OPENING HOURS</h4>
            <p>5-12 Chipping Norton Road, Chipping Norton, OX7 3PE</p>
            <p>Wednesday to Sunday - 9:30am to 4:30pm & Bank Holidays!</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h4>GET AHEAD OF THE HERD!</h4>
          <p>Sign up to our newsletter to ensure that you are the first to hear about everything farm related, special offers, and the inside scoop on all Brook's mishaps.</p>
          <form>
            <label>Email address*</label>
            <input type="email" required />
            <button className="submit" type="submit">SIGN ME UP!</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>© 2024 Little England Farm Shop - Designed & developed by twentynine_</p>
        
      </div>

    </footer>
  );
};

export default Footer;
