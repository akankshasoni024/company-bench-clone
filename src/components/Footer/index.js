import React from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <p>hello@companybench.com</p>
            <address>
              <p>
                402, Summer Court, Magarpatta City, Pune, Maharashtra 411013.
              </p>
            </address>
            <div class="footer-social" >
              <a
                class="icon-socials icon-facebook"
                href="https://www.facebook.com/companybench"
                target="blank"
              >
                <Facebook />
              </a>
              <a
                class="icon-socials icon-twitter"
                href="https://twitter.com/company_bench"
                target="blank"
              >
                <Twitter />
              </a>
              <a
                class="icon-socials icon-linkedin"
                href="https://www.linkedin.com/company/companybench/"
                target="blank"
              >
                <LinkedIn />
              </a>

              {/* <a href="#"><img src="facebook-icon.png" alt="Facebook"></a>
                <a href="#"><img src="twitter-icon.png" alt="Twitter"></a>
                <a href="#"><img src="linkedin-icon.png" alt="LinkedIn"></a> */}
            </div>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Top 10 IT Companies In India</a>
              </li>
              <li>
                <a href="#">IT Companies In Mumbai</a>
              </li>
              <li>
                <a href="#">IT Companies In Pune</a>
              </li>
              <li>
                <a href="#">IT Companies In Bangalore</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Staff Augmentation</a>
              </li>
              <li>
                <a href="#">Direct Hire</a>
              </li>
              <li>
                <a href="#">Hire Train & Deploy</a>
              </li>
              <li>
                <a href="#">Master Vendor</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>FAQ</h3>
            <ul>
              <li>
                <a href="#">Client FAQ</a>
              </li>
              <li>
                <a href="#">Vendor FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Other Links</h3>
            <ul>
              <li>
                <a href="#">Remote Developer Jobs</a>
              </li>
              <li>
                <a href="#">Developers Resume</a>
              </li>
              <li>
                <a href="#">Freelancers</a>
              </li>
              <li>
                <a href="#">Interview Q&A</a>
              </li>
              <li>
                <a href="#">Salaries</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
