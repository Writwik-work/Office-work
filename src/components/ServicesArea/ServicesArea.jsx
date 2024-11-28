import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";
import config from "../componentsConfig.json"; // Import JSON file

const ServicesArea = () => {
  const { servicesList } = config.servicesArea; // Access data from JSON

  return (
    <section className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {servicesList.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
