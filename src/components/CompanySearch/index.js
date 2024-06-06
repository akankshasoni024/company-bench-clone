import React from "react";
import "./styles.css";

const CompanyCard = () => {
  return (
    <div>
      <h1>Top IT Companies</h1>
      <div className="pp">
        <p>
          Following are the Top location based IT companies, Please click to see
          more
        </p>
      </div>
      <div className="container">
        <div className="box">Top 10 IT companies in India</div>
        <div className="box">Top Software Development companies in Mumbai</div>
        <div className="box">Top IT companies in Pune</div>
        <div className="box">
          Top Software Development companies in Bangalore
        </div>
        <div className="box">Top Software Development companies in Delhi</div>
        <div className="box">
          Top Software Development companies in Hyderabad
        </div>
        <div className="box">Best Software companies in Chennai</div>
        <div className="box">Top Software companies in Gurgaon</div>
        <div className="box">Top Software companies in Jaipur</div>
        <div className="box">Top Software companies in Ahmedabad</div>
        <div className="box">Top Software companies in Indore</div>
        <div className="box">
          Top 10 Software Development companies in Noida
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
