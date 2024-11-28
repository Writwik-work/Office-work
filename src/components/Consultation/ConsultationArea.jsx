import React from "react";
import ConsultationAreaForm from "./ConsultationAreaForm";
import config from "../componentsConfig.json"; // Import JSON configuration

const ConsultationArea = () => {
  const { consultationArea } = config;

  return (
    <section className={consultationArea.sectionClass}>
      <div className={consultationArea.containerClass}>
        <div className={consultationArea.rowClass}>
          <div className="col-lg-7">
            <div className="consultation-content">
              <div className="section-title mb-25">
                <img src={consultationArea.content.iconSrc} alt="" />
                <span className="sub-title">{consultationArea.content.subTitle}</span>
                <h2 className="title">{consultationArea.content.title}</h2>
              </div>
              <p>{consultationArea.content.description}</p>
              <div className="consultation-list">
                <ul className="list-wrap">
                  {consultationArea.content.listItems.map((item, index) => (
                    <li key={index}>
                      <div className="icon">
                        <img src={item.iconSrc} alt="" />
                        <span>{item.iconText}</span>
                      </div>
                      <div className="content">
                        <h6 className="title">{item.title}</h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <ConsultationAreaForm />
          </div>
        </div>
      </div>

      <div className="consultation-shape-wrap">
        {consultationArea.shapeImages.map((shape, index) => (
          <img key={index} src={shape.src} alt="" className={shape.className} />
        ))}
      </div>
    </section>
  );
};

export default ConsultationArea;
