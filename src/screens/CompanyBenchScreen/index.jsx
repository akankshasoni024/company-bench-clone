import React from "react";
import Main from "../../assets/main.png";
import CompanyCard from "../../components/CompanyCard";
import CompanySearch from "../../components/CompanySearch";
import WhyUs from "../../components/WhyUs";
import ContactForm from "../../components/ContactForm";
import AllCompaniesCard from "../../components/AllCompaniesCard";
import "./styles.css";

const CompanyBenchScreen = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="imageWrapper">
          <img src={Main} alt="main" />
        </div>
        <div class="heading">
          <h1 className="main-heading">
            <strong>Software Companies In Gurgaon</strong>
          </h1>
          <h2 className="sub-heading">
            Are you looking for Software Companies in Gurgaon
          </h2>
        </div>
        <div>
          <CompanyCard />
        </div>
        <div>
          <AllCompaniesCard />
        </div>
        <div>
          <CompanySearch />
        </div>
        <div>
          <WhyUs />
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default CompanyBenchScreen;
