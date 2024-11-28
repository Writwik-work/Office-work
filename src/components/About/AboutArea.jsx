import React from "react";
import { Link } from "react-router-dom";
import config from "../componentsConfig.json"; // Import JSON file

const AboutArea = () => {
  const { aboutArea } = config; // Extract aboutArea data from JSON

  return (
    <section className={aboutArea.backgroundClass}>
      <div className={aboutArea.containerClass}>
        <div className="about-inner">
          <div className="row align-items-center justify-content-center">
            {/* Image Section */}
            <div className="col-46 order-0 order-lg-2">
              <div className="about-img text-end">
                <img src={aboutArea.image.src} alt={aboutArea.image.alt} />
              </div>
            </div>

            {/* Content Section */}
            <div className="col-54">
              <div className="about-content">
                {/* Section Title */}
                <div className="section-title mb-25">
                  <span className="sub-title">{aboutArea.sectionTitle.subTitle}</span>
                  <h2 className="title">{aboutArea.sectionTitle.title}</h2>
                </div>

                {/* Description */}
                <p>{aboutArea.description}</p>

                {/* List Items */}
                <ul className="list-wrap">
                  {aboutArea.listItems.map((item, index) => (
                    <li key={index}>
                      <div className="icon">
                        <img src={item.icon} alt={`${item.title} Icon`} />
                      </div>
                      <div className="content">
                        <h4 className="title">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Content Bottom */}
                <div className="about-content-bottom">
                  <span>{aboutArea.contentBottom.text}</span>
                  <div className="read-more-btn">
                    <Link
                      to={aboutArea.contentBottom.button.link}
                      className={aboutArea.contentBottom.button.classes}
                    >
                      {aboutArea.contentBottom.button.text} <span></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
