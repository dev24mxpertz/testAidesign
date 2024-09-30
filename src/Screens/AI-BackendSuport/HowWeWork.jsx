import React from "react";
import TopImg from "../../Assets/images/topDot.png"
import BottomImg from "../../Assets/images/bottomDot.png"

function HowWeWork() {
  const data = [
    {
      id: "01",
      question: "CONSULTATION AND ASSESSMENT",

      answere:
        "We start with an in-depth consultation to understand your business objectives, challenges, and current processes.",
    },
    {
      id: "02",
      question: "SOLUTION DESIGN AND DEVELOPMENT",

      answere:
        "Our team designs and develops AI models customised to your specific requirements. We ensure seamless integration with your existing systems for a smooth transition and minimal disruption.",
    },
    {
      id: "03",
      question: "IMPLEMENTATION AND TRAINING",

      answere:
        "We implement AI solutions and provide comprehensive training to your staff, ensuring they are equipped to leverage the new technology effectively.",
    },
    {
      id: "04",
      question: "ONGOING SUPPORT AND OPTIMISATION",

      answere:
        "Our commitment to your success doesn’t end with implementation. We offer continuous support and optimisation to ensure your AI solutions remain effective and evolve with your business needs.",
    },
  ];


  return (
    <div className="main_how_it_works_container">
      <div className="bachground-purple">
        <div className="aboutTopContainer HowWeWorkContainer">
          <div>
            <h1 className=" text-black HowitHD">HOW WE WORK</h1>
            <div className="faqSection">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={` ${item.id % 2 === 0 ? "HowWeWorkCard" : ""}`}
                >
                  <div className="faqArray howWeWorkBox">
                    <div>
                      <p className="paraIndex">{item.id}.</p>
                    </div>
                    <div className="paraContent">
                      <p className="paraIndex">{item.question}</p>

                      <p className="paraAns">{item.answere}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="TopDotImg">
            <img src={TopImg} alt="topImg" />
          </div> */}
          {/* <div className="BottomTopImg">
            <img src={BottomImg} alt="bottomImg" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HowWeWork;
