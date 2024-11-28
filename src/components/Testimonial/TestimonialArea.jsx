import React from "react";
import config from "../componentsConfig.json"; // JSON is saved here
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  // Fetch data and slick settings from the JSON
  const { testimonialArea } = config;

  return (
    <section className={testimonialArea.sectionClass}>
      <div className={testimonialArea.containerClass}>
        <div className={testimonialArea.rowClass}>
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">{testimonialArea.sectionTitle.subTitle}</span>
              <h2 className="title">{testimonialArea.sectionTitle.title}</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row testimonial-active">
            <SlickSlider
              settings={{
                ...testimonialArea.slickSettings,
                beforeChange: function (currentSlide, nextSlide) {
                  var $animatingElements = $(
                    '.single-slider[data-slick-index="' + nextSlide + '"]'
                  ).find("[data-animation]");
                  doAnimations($animatingElements);
                },
              }}
            >
              {testimonialArea.testimonialItems.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3",
                    index % 2 === 0 && "testimonial-item-wrap-item-even"
                  )}
                >
                  <TestimonialAreaItem item={item} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
