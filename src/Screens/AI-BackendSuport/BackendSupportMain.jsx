import React, { useEffect, useRef } from "react";
import "../../Styles/aboutUs.css";
import "../../Styles/AlSupport.css";
import "../../Styles/CustomerSupport.css";
import ArrowBottom from "../../Assets/images/downArrow.png";
import OurExperties from "./OurExperties";
import HowWeWork from "./HowWeWork";
import SupportForm2 from "../HomePage/Components/SupportForm2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BackendSupportMain() {
  const scrolltoref = useRef(null);
  const scrolltoFormref = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const Hanldebuttons = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop - 250,
      behavior: "smooth",
    });
  };

  const CRMIMAGES = [
    "AI ANALYTICS",
    "AI PROCESS MANAGEMENT",
    "SUPPLY CHAIN",
    "IT AND CYBERSECURITY",
    "RETAIL AND E-COMMERCE",
    "COMPUTER VISION",
    "HIRING AND RECRUITING",
    "FINANCE AND ACCOUNTING",
  ];

  return (
    <div>
      <div className="BAckendAiBg">
        <div className="bachground-purple">
          <div className="aboutTopContainer ">
            <div>
              <h1 className=" text-black newAboutHd ">AI BACK-END SUPPORT</h1>

              <p className="  text-black BESPOKE">
                Revolutionising Business with Bespoke AI Workforce.
              </p>
              <p className=" text-black  aboutPara paraBackendAi">
                Altus specialise in AI devising and developing AI Workforce, to
                provide customised back-end support solutions to help your
                business improve efficiency, increase productivity, and
                streamline operations. Our team of experts leverages the latest
                AI advancements to deliver transformative results customised to
                your unique needs.
              </p>
            </div>
            <div className="exploreBox">
              <button
                className="btnExplore bg-black text-white"
                onClick={() => Hanldebuttons(scrolltoref)}
              >
                EXPLORE EXPERTISE
              </button>
              {/* <div className="arrowImg">
                <img src={ArrowBottom} alt="arrow" />
              </div> */}
            </div>
          </div>
        </div>
        <div className="Main_backendSupport_div_display">
          <div className="marquee">
            {CRMIMAGES.map((el, index) => (
              <ul key={index}>
                <li className="Custom_imagee2">{el}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      {/* ===========================================================================================Our Experties================================================================ */}

      <div className="bg-white">
        <div className="bachground-purple">
          <div>
            <h1 ref={addToRefs} className=" text-black AboutHd ourExperHd">
              OUR EXPERTISE
            </h1>
            <div ref={scrolltoref}>
              <OurExperties addtoRefs={addToRefs} />
            </div>
            <div className="exploreBox">
              <button
                onClick={() => Hanldebuttons(scrolltoFormref)}
                ref={addToRefs}
                className="btnExplore EnquireBtn"
              >
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================================================================================HOW WE WORK================================================================ */}

      <div>
        <HowWeWork />
      </div>

      {/* ======================================================================================================Form======================= */}

      <div className="bg-white">
        <div ref={scrolltoFormref} className="bachground-purple">
          <div className="aboutTopContainer ">
            <h1 className=" text-black HowitHD paddinghd">
              GET STARTED WITH EXPERT AI CONSULTING
            </h1>
            <p className="paraAns paraForm">
              Complete the form below, and our team of experts will be in touch
              to discuss your unique needs and how we can help you achieve your
              goals.
            </p>
          </div>
        </div>
      </div>
      <SupportForm2 />
    </div>
  );
}

export default BackendSupportMain;
