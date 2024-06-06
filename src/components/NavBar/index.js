import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-brand">
          <div>
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="Company Logo" />
            </Link>
          </div>
          <div>
            <button className="navbar-toggler" onClick={handleMenuToggle}>
              <span className="navbar-toggler-icon">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </span>
            </button>
          </div>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="navbar-list">
            <li className="navbar-item desktop-view">
              <Link to="/apply-for-job" className="navbar-link">
                Apply For Job
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/hire-developer" className="navbar-link">
                Hire Developer
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/find-job" className="navbar-link">
                Find a Job
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/find-candidates" className="navbar-link">
                Find Candidates
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/blog" className="navbar-link">
                Blog
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact-us" className="navbar-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="navbar-auth">
            <h4 className="mobile-view-only your-account-heading">
              Your Account
            </h4>
            <Link to="/register" className="navbar-button">
              Register
            </Link>
            <Link
              to="/sign-in"
              className="navbar-button navbar-button--primary"
            >
              Sign in
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
