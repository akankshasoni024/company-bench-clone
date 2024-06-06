import React from "react";
import "./styles.css";
import { ReactComponent as RightJobHead } from "../../assets/RightJobHead.svg";
import { ReactComponent as LeftJobHead } from "../../assets/LeftJobHead.svg";

const CompanyCard = () => {
  return (
    <div className="company-card">
      <div className="company-card-max-width">
        <div className="company-card-header">
          <h1>Software Companies In Gurgaon</h1>
        </div>
        <div className="company-card-content">
          <p>
            In today's global market, India seems to be the greatest exporter of
            information technology. The Indian Information Technology business
            is dominated by exports, which account for 79 percent of overall
            income. Company Bench, Tata Consultancy Services, Tech Mahindra,
            Infosys, Wipro, and HCL are the "5 Largest Indian IT Assistance
            Companies," while Gurgaon, Hyderabad, Bangalore, and Chennai are the
            key IT centers across the nation.
          </p>
          <p>
            In today's global market, India seems to be the greatest exporter of
            information technology. The Indian Information Technology business
            is dominated by exports, which account for 79 percent of overall
            income. Company Bench, Tata Consultancy Services, Tech Mahindra,
            Infosys, Wipro, and HCL are the "5 Largest Indian IT Assistance
            Companies," while Gurgaon, Hyderabad, Bangalore, and Chennai are the
            key IT centers across the nation.
          </p>
          <div className="company-card-header">
            {" "}
            <h1>Why IT Software Companies in Gurgaon are so popular?</h1>
          </div>
          <div className="company-card-content">
            <p>
              Gurgaon, formally recognized as Gurugram, seems to be the finance
              and technology hub of both Haryana and Delhi, which is positioned
              close to the Delhi-Haryana borderline. It is regarded as a
              significant Information Technology and financial center across
              India.{" "}
            </p>
            <p>
              Citizens from both areas appreciate the abundance of amenities as
              well as the lifestyle that has migrated here from all around the
              nation. This is where India's 1st live concert, drama, and luxury
              location, Palace of Wonders, can be found. Gurgaon's Cyber Center
              is a popular gathering spot for locals and experts.
            </p>
          </div>
          <div className="company-card-header">
            {" "}
            <h1>Why us?</h1>
          </div>
          <div className="company-card-content">
            <p>
              Gurgaon is not just recognized for its IT industries and financial
              centers, however, it also has a diverse range of activities.
              Gurgaon draws a large number of investors and residents from
              around India. Investors want to establish IT parks, and
              individuals seek to work for the best companies in Gurgaon while
              living comfortably. As a result, if you operate a company in
              Gurgaon and want to recruit the best IT workers, we are your best
              stop.
            </p>
            <p>
              Once you've joined Company Bench, you'll have access to the
              fastest deployment of the top IT specialists on an urgent basis,
              saving you the time and effort of approaching a recruitment firm
              and spending a fortune on them.
            </p>
            <p>
              Aside from that, if you're looking for the greatest IT industry to
              engage with and create a foundation in, here's a list of top IT
              Software Companies in Gurgaon that we feel would fit your company
              needs:
            </p>
          </div>
        </div>
      </div>
      <div className="svg-container">
        <LeftJobHead />
        <RightJobHead />
      </div>
    </div>
  );
};

export default CompanyCard;
