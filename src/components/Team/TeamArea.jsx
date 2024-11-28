import React from "react";
import { Link } from "react-router-dom";
import config from "../componentsConfig.json"; // Import JSON file.

const TeamArea = () => {
  const { teamArea } = config;
  return (
    <section className={teamArea.sectionClass}>
      <div className={teamArea.containerClass}>
        <div className={teamArea.rowClass}>
          {/* Left Column */}
          <div className={teamArea.leftColumn.colClass}>
            <div className={teamArea.leftColumn.imgWrapClass}>
              {teamArea.leftColumn.images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={img.className}
                />
              ))}
            </div>
          </div>
          {/* Right Column */}
          <div className={teamArea.rightColumn.colClass}>
            <div className={teamArea.rightColumn.contentClass}>
              <div className="section-title mb-25">
                <span className="sub-title">
                  {teamArea.rightColumn.sectionTitle.subTitle}
                </span>
                <h2 className="title">
                  {teamArea.rightColumn.sectionTitle.title}
                </h2>
              </div>
              <p>{teamArea.rightColumn.description}</p>
              <Link to={teamArea.rightColumn.button.link} className={teamArea.rightColumn.button.className}>
                {teamArea.rightColumn.button.text} <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className={teamArea.shapeWrapClass}>
        {teamArea.shapes.map((shape, index) => (
          <img
            key={index}
            src={shape.src}
            alt={shape.alt}
            className={shape.className}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamArea;
