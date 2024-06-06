import React from "react";
import "./styles.css";
import { ReactComponent as SendUsEnquiry } from "../../assets/SendUsEnquiry.svg";

const ContactForm = () => {
  return (
    <div className="contact-us-wrapper">
      <h1 style={{ color: "#05264e" }}>Send Us Enquiry</h1>
      <div className="container">
        <div className="illustration">
          <SendUsEnquiry className="contact-svg" />
        </div>
        <div className="form-container">
          <form>
            <input
              type="text"
              name="first-name"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="last-name"
              placeholder="Last Name"
              required
            />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="company" placeholder="Company" required />
            <input type="tel" name="phone" placeholder="Phone" required />
            <textarea
              name="description"
              placeholder="Description"
              required
            ></textarea>
            <div className="captcha-container">
              <div className="g-recaptcha" data-sitekey="your-site-key"></div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
