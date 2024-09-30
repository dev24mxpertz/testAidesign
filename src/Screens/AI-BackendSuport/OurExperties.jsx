import React from "react";

function OurExperties({ addtoRefs }) {
  const cardData = [
    {
      backGroundColor: "linear-gradient(180deg, #000000 -42.54%, #0B6380 100%)",
      Heading: "AI ANALYTICS",
      para: "Leverage our AI-driven data and predictive analysis expertise to forecast and identify trends and opportunities, and make informed decisions.",
      list: [
        "Data analysis",
        "Predictive analysis",
        "DESCRIPTIVE ANALYSIS",
        "PRESCRIPTIVE ANALYSIS                ",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #000000 -42.54%, #0B6380 100%)",
      Heading: "AI PROCESS MANAGEMENT",
      para: "Streamline workflows and boost efficiency with our custom AI automation solutions for single or multiple unique operations, reducing manual tasks and improving process performance insights.                  .",
      list: [
        "Workflow AUTOMATION",
        "Decision Support",
        "Predictive Maintenance",
        "Resource Allocation",
        "Compliance Management",
        "process mining",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #AD6CA5 -42.54%, #0B6380 100%)",
      Heading: "SUPPLY CHAIN",
      para: "Optimise your supply chain with AI solutions that improve forecasting, reduce waste, and streamline logistics.",
      list: [
        "Demand Forecasting",

        "Order Processing",
        "Logistics Optimisation",
        "Inventory management",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #AD6CA5 -42.54%, #0B6380 100%)",
      Heading: "IT AND CYBERSECURITY",
      para: "Protect your business with AI-based IT and cybersecurity measures that detect real-time threats and mitigate cyber risks.",
      list: [
        "Automated Monitoring and Alerting",
        "Incident Response",
        "Data Backup and Recovery",
        "Fraud Detection",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #AD6CA5 0%, #606051 127.05%)",
      Heading: "RETAIL AND E-COMMERCE",
      para: "Drive sales and enhance customer experiences with AI solutions that personalise interactions and optimise inventory.",
      list: [
        "Personalised Recommendations",
        "AI-driven customer insights",
        "Dynamic Pricing",
        "Inventory Management",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #AD6CA5 0%, #606051 127.05%)",
      Heading: "COMPUTER VISION",
      para: "Automate visual data processing, enhance quality control, and improve customer interactions with AI-driven computer vision solutions.",
      list: [
        "Object Detection and Recognition",
        "Image Segmentation",
        "Facial Recognition",
        "Motion Detection",
        "Pattern Recognition",
        "Image and Video Processing",
      ],
    },
    {
      backGroundColor: "linear-gradient(180deg, #ADA29D -77.92%, #0B6380 100%)",
      Heading: "HIRING AND RECRUITING",
      para: "Optimise recruitment from sourcing to selection with AI-powered solutions that ensure efficient acquisition of top talent.",
      list: ["Recruitment", "Onboarding", "Performance Management"],
    },
    {
      backGroundColor: "linear-gradient(180deg, #ADA29D -77.92%, #0B6380 100%)",
      Heading: "FINANCE AND ACCOUNTING",
      para: "Automate financial processes, increase accuracy, and support better decision-making with our AI-driven finance and accounting solutions.",
      list: [
        "Invoice Processing",
        "Expense Management",
        "Financial Forecasting",
      ],
    },
  ];

  return (
    <>
      <div className="cardConatiner">
        {cardData.map((item, index) => (
          <div
            key={index}
            ref={addtoRefs}
            // className="expertiesCard"
            className={` ${index % 2 === 0 ? "expertiesCard" : "expertiesCardreverse"}`}
          >
            <div className="cardList">
              {item.list.map((listItem, index) => (
                <div className="cardList_h3" key={index}>
                  {listItem.toUpperCase()}
                </div>
              ))}
            </div>
            <div className="content_card">
              <h1 className="cardHd">{item.Heading}</h1>
              <p className="cardPara">{item.para}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OurExperties;
