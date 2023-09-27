import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="follow-us">
        <p>Follow Us On:</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <img src="github-icon.png" alt="GitHub" />
          </a>
          <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://youtube.com/youryoutube" target="_blank" rel="noopener noreferrer">
            <img src="youtube-icon.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="company-logo">
        <img src="company-logo.png" alt="Company Logo" />
      </div>
      <ul className="footer-links">
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
