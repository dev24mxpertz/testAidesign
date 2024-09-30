import React from 'react'
import sideImg3 from "../../Assets/images/sideImg3.png";
import sideImg4 from "../../Assets/images/sideImg4.png";

function WhyChooseUs() {

    const data = [
      {
        id: "01",
        question: "BESPOKE SOLUTIONS",
        colorText: "Our AI solutions are not one-size-fits-all! ",
        answere:
          "We closely collaborate with you to design and deliver customised solutions to ensure that our AI tools are fine-tuned to address your unique business requirements, providing the most effective outcomes.",
      },
      {
        id: "02",
        question: "SEAMLESS INTEGRATION",
        colorText:
          "We prioritise making the integration of AI solutions as smooth and effortless as possible.  ",
        answere:
          "Our technology is designed to work harmoniously with your existing systems, minimising disruption and ensuring a quick and efficient transition. Whether you’re introducing AI into your operations for the first time or expanding its role, our seamless integration process guarantees a smooth implementation that enhances your business capabilities.",
      },
      {
        id: "03",
        question: "EXPERTISE",
        colorText:
          "With years of experience to guide and deep industry knowledge, our team of AI professionals brings unparalleled expertise to every project.",
        answere:
          "Stay ahead with our cutting-edge AI solutions, driven by our commitment to innovation and excellence, and partner with experts who push the boundaries of AI.",
      },
      {
        id: "04",
        question: "PARTNERSHIP FOR LASTING IMPACT",
        colorText:
          "We believe in building long-term partnerships based on trust, transparency, and mutual success. ",
        answere:
          "We provide ongoing support and continuous optimisation to ensure our AI solutions keep delivering value as your business grows. Your success is our priority, now and in the future.",
      },
    ];
    return (
      <div className="whyChooseBg">
        <img className="whychoosebgimg1" src={sideImg3} alt="sideImg3" />
            <img className="whychoosebgimg2" src={sideImg4} alt="sideImg4" />
        <div className="bachground-purple">
          <div className="aboutTopContainer ">
            <div>
              <h1 className=" text-black AboutHeading">WHY CHOOSE US?</h1>
              <div className="faqSection">
                {data.map((item, index) => (
                  <div key={index} className="faqArray">
                    <div>{/* <p className="paraIndex">{item.id}</p> */}</div>
                    <div className="paraContent">
                      <p className="paraIndex">{item.question}</p>
                      <p className="paramargin">
                        {item.colorText.split(" ").map((word, i) => (
                          <span key={i} className="gradient-text">
                            {word}{" "}
                          </span>
                        ))}
                      </p>
                      <p className="paraAns">{item.answere}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default WhyChooseUs
