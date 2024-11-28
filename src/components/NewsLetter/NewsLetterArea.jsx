import React from "react";
import config from "../componentsConfig.json"; // Import JSON configuration

const NewsLetterArea = () => {
  const { newsLetterArea } = config;

  return (
    <section className={newsLetterArea.sectionClass}>
      <div className={newsLetterArea.containerClass}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-80">
              <span className="sub-title">{newsLetterArea.titleSection.subTitle}</span>
              <h2 className="title">
                {newsLetterArea.titleSection.title.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="newsletter-form">
              <form action="#">
                <input type="email" placeholder={newsLetterArea.form.placeholder} />
                <button type="submit" className="btn">
                  {newsLetterArea.form.buttonText} <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-shape-wrap">
        {newsLetterArea.shapes.map((shape, index) => (
          <img key={index} src={shape.src} alt="" className={shape.className} />
        ))}
      </div>
    </section>
  );
};

export default NewsLetterArea;
