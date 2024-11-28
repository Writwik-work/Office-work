import React, { useEffect } from "react";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";
import headerData from "../componentsConfig.json";
import cn from "classnames";

const HeaderOne = () => {
  useEffect(() => {
    /*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        $("#sticky-header").removeClass("sticky-menu");
        $(".scroll-to-target").removeClass("open");
      } else {
        $("#sticky-header").addClass("sticky-menu");
        $(".scroll-to-target").addClass("open");
      }
    });

    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function () {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(300);
        }
      );
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }

    /*=============================================
	=          header btn active               =
=============================================*/
    $(function () {
      $(".header-btn").on("click", function () {
        $(".header-contact-wrap, .body-contact-overlay").toggleClass("active");
        $("body").toggleClass("fix");
        return false;
      });
      $(".body-contact-overlay").on("click", function () {
        $(".header-contact-wrap, .body-contact-overlay").removeClass("active");
        $("body").removeClass("fix");
        return false;
      });
    });
  }, []);

  const { pathname } = useLocation();
  const header = headerData;

  const isActiveClassName = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <>
      <header>
        <div id="sticky-header" className="menu-area transparent-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-nav-toggler">
                  <i className="fas fa-bars"></i>
                </div>

                <div className="menu-wrap">
                  <nav className="menu-nav">
                    {/* Logo */}
                    <div className="logo">
                      <Link to={header.logo.link}>
                        <img src={header.logo.src} alt={header.logo.alt} />
                      </Link>
                    </div>

                    {/* Navigation */}
                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                      <ul className="navigation">
                        {header.navigation.map((navItem, index) => (
                          <li
                            key={index}
                            className={cn(
                              navItem.subMenu.length > 0 &&
                                "menu-item-has-children",
                              navItem.link === pathname && "active"
                            )}
                          >
                            <Link to={navItem.link}>{navItem.label}</Link>
                            {navItem.subMenu.length > 0 && (
                              <ul className="sub-menu">
                                {navItem.subMenu.map((subItem, subIndex) => (
                                  <li
                                    key={subIndex}
                                    className={cn(
                                      isActiveClassName(subItem.link)
                                    )}
                                  >
                                    <Link to={subItem.link}>
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="header-action">
                      <ul className="list-wrap">
                        <li className="header-btn">
                          <a
                            href={header.ctaButton.link}
                            className={header.ctaButton.classes}
                          >
                            {header.ctaButton.text} <span></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* <!-- Mobile Menu  --> */}
                <div className="mobile-menu">
                  <nav className="menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="nav-logo">
                      <Link to="/">
                        <img src="/img/logo/logo.png" alt="Logo" />
                      </Link>
                    </div>
                    <div className="menu-outer">
                      {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                    </div>

                    <div className="social-links">
                      <ul className="clearfix list-wrap">
                        {header.socialLinks.map((social, index) => (
                          <li key={index}>
                            <a href={social.link}>
                              <i className={social.iconClass}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="menu-backdrop"></div>
                {/* <!-- End Mobile Menu --> */}
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="header-contact-wrap">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="left-side-content">
                    <h3 className="title">Contact</h3>
                    <div className="row">
                      <div className="col-xl-4 col-lg-5 col-md-6">
                        <div className="contact-info-list">
                          <ul className="list-wrap">
                            <li>
                              <div className="icon">
                                <svg
                                  viewBox="0 0 22 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path {...headerData.icons.email.paths[0]} />
                                </svg>
                              </div>
                              <div className="content">
                                <a href={`mailto:${headerData.contact.email}`}>
                                  {headerData.contact.email}
                                </a>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <svg
                                  viewBox="0 0 20 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    {...headerData.icons.location.paths[0]}
                                  />
                                </svg>
                              </div>
                              <div className="content">
                                <span>{headerData.contact.address}</span>
                              </div>
                            </li>
                            <li>
                              <div className="icon">
                                <svg
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path {...headerData.icons.clock.paths[0]} />
                                </svg>
                              </div>
                              <div className="content">
                                <span>{headerData.contact.availability}</span>
                              </div>
                            </li>
                          </ul>
                          <div className="lats-chat">
                            <Link to={headerData.contact.chatLink}>
                              Let’s Chat
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-8 col-lg-7 col-md-6">
                        <div className="our-best-project">
                          <div className="content">
                            <h4 className="title">
                              {headerData.projectHighlight.title}
                            </h4>
                            <Link
                              to={headerData.projectHighlight.buttonLink}
                              className="btn"
                            >
                              {headerData.projectHighlight.buttonText}{" "}
                              <span></span>
                            </Link>
                          </div>
                          <div className="thumb">
                            <img
                              src={headerData.projectHighlight.imageSrc}
                              alt="Project Highlight"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="customer-support-wrap">
                    <h4 className="title">
                      {headerData.customerSupport.title}
                    </h4>
                    <div className="customer-support-content">
                      <div className="content-top">
                        <img
                          src={headerData.customerSupport.imageSrc}
                          alt="Customer Support"
                        />
                        <h4 className="title">
                          {headerData.customerSupport.helpText}
                        </h4>
                      </div>
                      <p>
                        {headerData.customerSupport.description}
                        <Link to="/contact">Get in touch</Link>
                      </p>
                      <div className="content-bottom">
                        {headerData.customerSupport.supportLinks.map(
                          (link, index) => (
                            <Link key={index} to={link.link}>
                              {link.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-contact-overlay"></div>
          {/* <!-- header-contact-end --> */}
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
