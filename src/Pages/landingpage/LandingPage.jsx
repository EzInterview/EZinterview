import React from 'react';
import './LandingPage.css';
import headerImage from './header.jpeg';
import { Link } from 'react-router-dom';

// Redirect to Dashboard if Logged In

const LandingPage = () => {
  return (
    <div>
      <nav>
        <div className="nav__logo">
          <div>E</div>
          Learning
        </div>
        <ul className="nav__socials">
          <li>
            <a href="#"><i className="ri-twitter-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-facebook-circle-fill"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-pinterest-line"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </li>
        </ul>
        <div className="nav__contact">
          <div className="nav__contact__card">
            <span><i className="ri-phone-line"></i></span>
            <div>
              <p>Call Us</p>
              <h4>+01 98765 4321</h4>
            </div>
          </div>
          <div className="nav__contact__card">
            <span><i className="ri-mail-line"></i></span>
            <div>
              <p>Email Us</p>
              <h4>ezinterview01@gmail.com</h4>
            </div>
          </div>
        </div>
      </nav>
      <header className="header__container">
        <div className="header__image">
          <img src={headerImage} alt="header" />
        </div>
        <div className="header__content">
          <h1>EZInterview:
Revolutionizing hiring with <span>AI</span></h1>
          <p>
          EZInterview offers AI anti-cheat feature for fair requirements process.                              

          </p>
          <Link to="/signup">
            <button style={{ background: "#03A678" }}>Get Started</button>
          </Link>


        </div>
        <div className="details1">
            <h2>1. Why EZInterview?</h2>
            <p>
            EZInterview is a platform that helps companies to hire the best talent in the industry
            </p>
            <h2>2 .How it works?</h2>
            <p>
            EZInterview is a platform that helps companies to hire the best talent in the industry
            </p>
            <h2>3. How to get started?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aliquid quasi consequuntur necessitatibus in iusto, iure sint, dignissimos maiores eaque rem quod doloremque nostrum nihil aliquam qui! Dolorum, sint sapiente.</p>
        </div>
        <div className="details2">
            
        </div>

      </header>
      <footer className="footer">
        <div className="footer__content">
          <p>&copy; 2024 EZInterview. All rights reserved.</p>
          <ul className="footer__links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
