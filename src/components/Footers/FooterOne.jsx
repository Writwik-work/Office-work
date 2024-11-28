import React from "react";
import { Link } from "react-router-dom";
import config from "../componentsConfig.json"; // Import JSON configuration

const FooterOne = () => {
  const { footerOne } = config;

  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* Logo and Social Links */}
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="logo">
                    <Link to={footerOne.footerTop.logo.link}>
                      <img src={footerOne.footerTop.logo.src} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      {footerOne.footerTop.socialLinks.map((social, index) => (
                        <li key={index} className={social.isActive ? "active" : ""}>
                          <a href={social.link}>
                            <i className={social.iconClass}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="footer-contact">
                    <span>{footerOne.footerTop.support.label}</span>
                    <h2 className="title">
                      <a href={footerOne.footerTop.support.phone.link}>
                        {footerOne.footerTop.support.phone.number}
                      </a>
                    </h2>
                  </div>
                </div>
              </div>

              {/* Sections */}
              {footerOne.footerTop.sections.map((section, index) => (
                <div key={index} className="col-lg-3 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">{section.title}</h4>
                    <div className="fw-link">
                      <ul className="list-wrap">
                        {section.links?.map((link, idx) => (
                          <li key={idx}>
                            <Link to={link.link}>{link.text}</Link>
                          </li>
                        ))}
                        {section.contactDetails?.map((detail, idx) => (
                          <li key={idx}>
                            <img src={detail.icon} alt="" />
                            {detail.link ? (
                              <a href={detail.link}>{detail.text}</a>
                            ) : (
                              <span>{detail.text}</span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="cart-img">
                  <img src={footerOne.footerBottom.cartImage} alt="Cart" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-text text-end">
                  <p>{footerOne.footerBottom.copyright}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
