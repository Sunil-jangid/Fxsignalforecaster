import React from "react";
import "./Navbar.css";
import insta from "./instagram.png";
import telegram from "./telegram.png";

function Navbar() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                style={{ color: "#f0a739",paddingRight:"100px" }}
                onClick={() => handleScrollToSection("home")}
              >
                Fx SIGNAL FORECASTER<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                style={{ color: "white" }}
                onClick={() => handleScrollToSection("home")}
              >
                Home<span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                style={{ color: "white" }}
                onClick={() => handleScrollToSection("about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                style={{ color: "white" }}
                onClick={() => handleScrollToSection("services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#testimonial"
                style={{ color: "white" }}
                onClick={() => handleScrollToSection("testimonial")}
              >
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={insta} alt="Instagram" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://t.me/FXsignalforecaster22" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="WhatsApp" />
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0"></form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
