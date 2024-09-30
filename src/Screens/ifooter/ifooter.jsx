import { Link } from "react-router-dom";
import "../../Styles/Ifooter.css";
import newlogo from "../../Assets/images/newlogo.png";
import facebooklogo from "../../Assets/images/facebookvectoricon.png";
import twitterimg from "../../Assets/images/twitterimg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Ifooter = () => {

  // navrattanholdings_static;
  const slideRefs = useRef([]);
  slideRefs.current = [];

  const addToRefs = (el) => {
    if (el && !slideRefs.current.includes(el)) {
      slideRefs.current.push(el);
    }
  };

  const slideRefs2 = useRef([]);
  slideRefs2.current = [];

  const addToRefs2 = (el) => {
    if (el && !slideRefs2.current.includes(el)) {
      slideRefs2.current.push(el);
    }
  };

  const slideRefs3 = useRef([]);
  slideRefs3.current = [];

  const addToRefs3 = (el) => {
    if (el && !slideRefs3.current.includes(el)) {
      slideRefs3.current.push(el);
    }
  };

  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      const [leftPara, centerPara, rightPara, lastPara, verylastPara] =
        slide.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        leftPara,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
      )
        .fromTo(
          centerPara,
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          rightPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          lastPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo(
          verylastPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2 }
        );
    });
    // --------------------------------------------------------------------------
    slideRefs2.current.forEach((slide, index) => {
      const [leftPara, centerPara, rightPara] = slide.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        leftPara,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          centerPara,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          rightPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.5"
        );
    });
    // ---------------------------------------------------------------------------
    slideRefs3.current.forEach((slide, index) => {
      const [leftPara, centerPara, rightPara] = slide.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slide,
          start: "top 120%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        leftPara,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          centerPara,
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          rightPara,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.5"
        );
    });
  }, []);

  return (
    <div className="Ifooter_main_div">
      <div className="Ifooter_main_upperdiv">
        <div className="Ifooter_main_first_section" ref={addToRefs}>
          <Link className="Ifooter_main_first_section_link">HOME</Link>
          <div className="Ifooter_main_first_section_link_line"></div>
          <div className="Ifooter_main_first_section_logo_div">
            <img src={newlogo} alt="newlogo" />
          </div>
          <p className="Ifooter_main_first_section_logo_div_p">
            We Devise and Develop AI Workforce customised to your Business.
          </p>
          <div className="Ifooter_main_first_section_socialdiv">
            <Link
              target="_blank"
              to="https://www.linkedin.com/company/altusintel/"
              className="Ifooter_main_first_section_socialdiv_Icon"
            >
              <i class="bi bi-linkedin"></i>
            </Link>
            {/* <Link
              target="_blank"
              to="https://www.linkedin.com/company/altusintel/"
              className="Ifooter_main_first_section_socialdiv_Icon_img"
            >
              <img width={16} src={facebooklogo} alt="facebooklogo" />
            </Link> */}
            <Link
              target="_blank"
              to="https://x.com/altusintel"
              className="Ifooter_main_first_section_socialdiv_Icon_img"
            >
              <img src={twitterimg} alt="twitterimg" />
            </Link>
            <Link
              target="_blank"
              to="https://www.instagram.com/altus_intel?igsh=NXo0NDN4YnIyOWtm&utm_source=qr"
              className="Ifooter_main_first_section_socialdiv_Icon"
            >
              <i class="bi bi-instagram"></i>
            </Link>
          </div>
        </div>
        {/* -*----------------------------------------------------- */}
        <div className="Ifooter_main_second_section" ref={addToRefs}>
          <Link className="Ifooter_main_second_section_link">
            Company Links
          </Link>
          <div className="Ifooter_main_second_section_link_line"></div>
          <div className="Ifooter_main_second_section_linkdiv" ref={addToRefs}>
            <Link to="/" className="Ifooter_main_second_section_linkdiv_link">
              Home
            </Link>
            <Link
              to="/About"
              className="Ifooter_main_second_section_linkdiv_link"
            >
              About Us
            </Link>
            <Link
              to="/aicustomerservice"
              className="Ifooter_main_second_section_linkdiv_link"
            >
              AI Workforce Frontend
            </Link>
            <Link
              to="/AIcustomworkforce"
              className="Ifooter_main_second_section_linkdiv_link"
            >
              AI Workforce Backend
            </Link>
            <Link
              to="/Contact"
              className="Ifooter_main_second_section_linkdiv_link"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* -*------------------------------------------------------ */}
        <div className="Ifooter_main_third_section" ref={addToRefs2}>
          <Link className="Ifooter_main_second_section_link">Contact Info</Link>
          <div className="Ifooter_main_second_section_link_line"></div>
          <div className="footer_divided_section">
            <Link
              to="#"
              className="footer_divided_section_LINK"
              onClick={(e) => {
                window.open("mailto:inquire@altus-intel.com", "_blank");
                e.preventDefault();
              }}
            >
              inquire@altus-intel.com
            </Link>
          </div>
        </div>
      </div>
      <div className="Ifooter_main_lowerdiv" ref={addToRefs3}>
        <p>
          © 2023 - 2024 ALTUS AI AUTOMATION AND CONSULTING. All Rights Reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Ifooter;
