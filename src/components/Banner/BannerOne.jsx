import React from "react";
import { Link } from "react-router-dom";
import bannerData from "../componentsConfig.json"; // Import JSON config

const BannerOne = () => {
  const { banner } = bannerData; // Extract banner data from JSON

  return (
    <section className={banner.backgroundClass}>
      <div className={banner.containerClass}>
        <div className={banner.rowClass}>
          {/* Left Image Section */}
          <div className="col-lg-6">
            <div
              className={banner.leftImage.animationClass}
              data-wow-delay={banner.leftImage.animationDelay}
            >
              <img src={banner.leftImage.src} alt={banner.leftImage.alt} />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6">
            <div className="banner-content">
              <span
                className={banner.content.subTitle.animationClass}
                data-wow-delay={banner.content.subTitle.animationDelay}
              >
                {banner.content.subTitle.text.split(" ").map((word, index) => (
                  <React.Fragment key={index}>
                    {word === banner.content.subTitle.highlight ? (
                      <strong>{word}</strong>
                    ) : (
                      word
                    )}{" "}
                  </React.Fragment>
                ))}
              </span>
              <h2
                className={banner.content.title.animationClass}
                data-wow-delay={banner.content.title.animationDelay}
              >
                {banner.content.title.text}
              </h2>
              <Link
                to={banner.content.ctaButton.link}
                className={banner.content.ctaButton.buttonClass}
                data-wow-delay={banner.content.ctaButton.animationDelay}
              >
                {banner.content.ctaButton.text} <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Shapes */}
      <div className="banner-shape-wrap">
        {banner.shapes.map((shape, index) => (
          <img
            key={index}
            src={shape.src}
            alt={shape.alt}
            className={shape.class || ""}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerOne;
