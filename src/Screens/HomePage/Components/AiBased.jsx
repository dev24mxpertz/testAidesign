import React, { useEffect, useState, useRef } from "react";
import image1 from "../../../Assets/images/10%.png";
import image2 from "../../../Assets/images/20%.png";
import image3 from "../../../Assets/images/40%.png";
import image4 from "../../../Assets/images/60%.png";
import image5 from "../../../Assets/images/80%.png";

function AiBased() {
  const [progress, setProgress] = useState(0);
  const cardContainerRef = useRef(null);

  // Array of image URLs
  const imageUrls = [
    image1, // Image at 10%
    image2, // Image at 20%
    image3, // Image at 40%
    image4, // Image at 60%
    image5, // Image at 80%
  ];

  const imagePositions = [10, 30, 50, 70, 90]; // Percentages where images will be placed

  useEffect(() => {
    const cardContainer = cardContainerRef.current;

    const updateProgress = () => {
      const totalScrollWidth =
        cardContainer.scrollWidth - cardContainer.clientWidth;
      const scrollLeft = cardContainer.scrollLeft;
      const progressPercentage = (scrollLeft / totalScrollWidth) * 100;
      setProgress(progressPercentage);
    };

    const handleScroll = () => {
      requestAnimationFrame(updateProgress);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      cardContainer.scrollLeft += event.deltaY;
    };

    cardContainer.addEventListener("scroll", handleScroll);
    cardContainer.addEventListener("wheel", handleWheel);

    return () => {
      cardContainer.removeEventListener("scroll", handleScroll);
      cardContainer.removeEventListener("wheel", handleWheel);
    };
  }, []); // Dependency array is empty to run once after mount

  return (
    <>
      <div className="aibased_wrapper">
        <div className="d-flex flex-wrap justify-content-evenly flex-column-reverse">
          <div className="d-flex justify-content-center w-100">
            <div className="text-center link-dark w-100">
              <h1 className="aibased-heading my-3 text-uppercase">
                Chat Automation
              </h1>
              <p className="aibased-paragraph-automation">
                Transform over 80% of your support requests into automated
                processes across all digital channels with cutting-edge AI
                powered bots. Effortlessly boosts customer experience, empower
                your agents, and enhance operational efficiency with Pinnacle’s
                advanced AI agents.
              </p>
              <div
                className="Automation-overall-progress-bar-container"
                style={{ position: "relative", width: "100%", height: "50px" }}
              >
                <div
                  className="Automation-overall-progress-bar"
                  style={{
                    width: `${progress}%`,
                    height: "100%",
                    backgroundColor: "black", // Change color as needed
                    position: "absolute",
                    top: "22px",
                    left: 0,
                    height: "8px",
                    borderRadius: "5px",
                  }}
                ></div>
                {imagePositions.map((position, index) => (
                  <img
                    key={index}
                    src={imageUrls[index]} // Use the corresponding image URL
                    alt={`Progress ${position}%`}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: `${position}%`,
                      transform: "translate(-50%, -50%)", // Centers the image
                      display: progress >= position ? "block" : "block", // Show only if progress is reached
                      width: "40px", // Adjust the size as needed
                      height: "40px", // Adjust the size as needed
                      filter: progress >= position ? "none" : "blur(1px)",
                    }}
                  />
                ))}
              </div>
              <div className="Automation-card-container" ref={cardContainerRef}>
                <div className="Automation-card">
                  <div className="Automation-card-content">
                    <div className="Automation-card-image">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/Chatbot-in-10-Minutes.png")}
                        alt="AI Bot"
                      />
                    </div>
                    <div className="Automation-card-text">
                      <h1>10%</h1>
                      <h3 className="text-uppercase text-justify">
                        Hit the road with a gen AI bot you can launch in
                        minutes.
                      </h3>
                      <p className="text-justify">
                        Connect a knowledge source and instantly create a gen AI
                        bot with Pinnacle. Take care of FAQ-style questions,
                        increase first-touch resolutions, and reach 10%
                        automation. Seamlessly incorporate the capabilities of
                        ChatGPT into your support center immediately.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Automation-card">
                  <div className="Automation-card-content">
                    <div className="Automation-card-image">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/Chatbot-in-10-Minutes.png")}
                        alt="AI Bot"
                      />
                    </div>
                    <div className="Automation-card-text">
                      <h1>20%:</h1>
                      <h3 className="text-uppercase text-justify">
                        {" "}
                        Take the wheel by adding control and customisation with
                        dialogues.
                      </h3>
                      <p className="text-justify">
                        {" "}
                        Tackle more complex customer questions in our
                        easy-to-use, no-code Dialogue builder and seamlessly
                        escalate to an agent when needed.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Automation-card">
                  <div className="Automation-card-content">
                    <div className="Automation-card-image">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/Chatbot-in-10-Minutes.png")}
                        alt="AI Bot"
                      />
                    </div>
                    <div className="Automation-card-text">
                      <h1>40%:</h1>
                      <h3 className="text-uppercase text-justify">
                        {" "}
                        SHIFT INTO HIGH GEAR, UNLOCKING END TO END AUTOMATION
                        WITH BACKEND INTEGRATIONS.
                      </h3>
                      <p className="text-justify">
                        {" "}
                        Authenticate customers, provide personalised responses
                        with information from any back office software, and
                        improve your CSAT along the way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Automation-card">
                  <div className="Automation-card-content">
                    <div className="Automation-card-image">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/Chatbot-in-10-Minutes.png")}
                        alt="AI Bot"
                      />
                    </div>
                    <div className="Automation-card-text">
                      <h1>60%:</h1>
                      <h3 className="text-uppercase text-justify">
                        {" "}
                        GET MORE MILEAGE OUT OF YOUR DATA WITH INSIGHTS FROM
                        ROBUST ANALYTICS SUITE.
                      </h3>
                      <p className="text-justify">
                        {" "}
                        Explore escalation attempts, areas to investigate,
                        conversation drop-offs (and more) to fine – tune your
                        dialogues and optimise your support processes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="Automation-card">
                  <div className="Automation-card-content">
                    <div className="Automation-card-image">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/Chatbot-in-10-Minutes.png")}
                        alt="AI Bot"
                      />
                    </div>
                    <div className="Automation-card-text">
                      <h1>80%:</h1>
                      <h3 className="text-uppercase text-justify">
                        {" "}
                        Accelerate business growth and drive continued success
                        with customer insights.
                      </h3>
                      <p className="text-justify">
                        {" "}
                        Put your customers at the heart of decision – making and
                        improve more than just your support function. Discover
                        opportunities to add new use cases, languages, and
                        markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiBased;
