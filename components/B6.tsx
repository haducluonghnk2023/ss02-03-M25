import React from "react";
import "./B6.scss";

export default function B6() {
  return (
    <div className="container">
      <div className="navigation">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#updates">Updates</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#about-us">About Us</a>
          </li>
        </ul>
        <div className="account">
          <div className="account-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM12 4c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 16c-2.5 0-4.71-1.28-6-3.221 0.033-1.99 4-3.079 6-3.079s5.967 1.089 6 3.079C16.71 18.72 14.5 20 12 20z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
