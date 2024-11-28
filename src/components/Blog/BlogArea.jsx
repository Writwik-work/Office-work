import React from "react";
import BlogAreaItem from "./BlogAreaItem";
import config from "../componentsConfig.json"; // Import JSON configuration

const BlogArea = () => {
  const { blogArea } = config;

  return (
    <section className={blogArea.sectionClass}>
      <div className={blogArea.containerClass}>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">{blogArea.titleSection.subTitle}</span>
              <h2 className="title">{blogArea.titleSection.title}</h2>
              <p>{blogArea.titleSection.description}</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogArea.blogItems.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <BlogAreaItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
