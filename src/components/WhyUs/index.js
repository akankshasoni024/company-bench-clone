import React from "react";
import "./styles.css";
import { ReactComponent as OverheadCost } from "../../assets/OverheadCost.svg";
import { ReactComponent as EnsureHassel } from "../../assets/EnsureHassel.svg";
import { ReactComponent as AvailabilityOfRight } from "../../assets/AvailabilityOfRight.svg";
import { ReactComponent as Step } from "../../assets/Step.svg";

const WhyUs = () => {
  return (
    <div>
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p className="intro-text">
          At Company Bench, we are highly selective about the software, domains,
          and technologies we focus on. We provide companies with
          state-of-the-art solutions that help them build a team of skilled
          professionals.
        </p>
        <div className="features">
          <div className="feature">
            <OverheadCost className="svg" />
            {/* <img src={OverheadCost} alt="Save Overhead Costs" /> */}
            <h3 style={{ color: "#05264e" }}>Save The Overhead Costs</h3>
            <p>
              Waiting time for a resource for hire is passed, Company Bench nick
              of time resource management product.
            </p>
          </div>
          <Step className="connecting-svg" />
          <div className="feature">
            <AvailabilityOfRight className="svg" />
            <h3 style={{ color: "#05264e" }}>
              Availability of Right Resources Across The Globe
            </h3>
            <p>
              Availability of resource is the most precious and an integrated
              part, then finding the right resource, We at company bench has
              cracked the code of this immensely important criteria, and
              showcased you only available resources across the globe.
            </p>
          </div>
          <Step className="connecting-svg" />
          <div className="feature">
            <EnsureHassel className="svg" />
            <h3 style={{ color: "#05264e" }}>Ensure Hassle Free Hiring</h3>
            <p>
              We will take care of all your hiring and resource management needs
              and present you a customized, tailored solution to meet your
              present and future demand of resources.
            </p>
          </div>
        </div>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default WhyUs;
