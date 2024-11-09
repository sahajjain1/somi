// About.js
import React from "react";
import "./About.css";
import companyImage1 from './comp1.jpg'; // Adjust the path as needed
import companyImage2 from './comp2.jpg'; // Adjust the path as needed

const About = () => (
  <div className="about">
    <h1>GTC Group</h1>

    <div className="about-images">
      <img src={companyImage1} alt="GTC Office Building" className="about-image" />
      <img src={companyImage2} alt="GTC Production Facility" className="about-image" />
    </div>

    <div className="about-section">
      <h2>Overview</h2>
      <p>
        GTC Group is a Trading Company established in 1980, extending its
        expertise to the flour mill industry. Our high-quality wheat flour
        consistently meets the expectations of our customers. We operate with
        high ethical standards, adhering to a strict code of conduct and values.
      </p>
    </div>

    <div className="about-section">
      <h2>Vision</h2>
      <p>
        Gopal Trading Company takes pride in its reputation as a brand known for
        quality and trust. We leverage our goodwill among customers and partners
        by adopting modern technology to deliver superior products.
      </p>
    </div>

    <div className="about-section">
      <h2>Our Network</h2>
      <p>
        GTC Group has an extensive network across central and western India,
        particularly in Madhya Pradesh and Maharashtra, building strong
        relationships over the past 10 decades.
      </p>
    </div>

    <div className="about-section">
      <h2>Mission</h2>
      <p>
        Gopal Trading Company strives for excellence in all products, aiming for
        the highest customer satisfaction and maintaining our corporate
        standards in the flour mill industry.
      </p>
    </div>
  </div>
);

export default About;
