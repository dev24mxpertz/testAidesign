import React from "react";
import "../../../Styles/headerhome.css";
import downarrow from "../../../Assets/images/downArrow.png";
import masklayer1 from "../../../Assets/images/masklayer1.png";
import masklayer2 from "../../../Assets/images/masklayer2.png";
import { Link } from "react-router-dom";

const HeaderHome = () => {
  return (
    <div>
      {/* <div className="main_headerhome_div"> */}
      <div className="bgHeaderHomeTop">
        <div className="main_headerhome_first_div">
          <div className="headerHomeInnerBox ">
            <h1 className="headingsHeaderHome">
              HIRE AI WORKFORCE CUSTOMISED FOR YOUR BUSINESS
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="main_headerhome_second_div"> */}
      <div>
        <div className="main_headerhome_first_div">
          <div className="headerHomeInnerBox textBoxflex">
            {/* <h2>
              Unleash the Future: Transforming Business Operations with
              Revolutionary Altus Intelligent Technology.
            </h2> */}
            <h2>
              {"Advanced AI Solutions to reduce the burden on your workforce."
                .split(" ")
                .map((word, i) => (
                  <span
                    key={i}
                    className="main_headerhome_second_div_linear_word"
                  >
                    {word}{" "}
                  </span>
                ))}
              {/* allowing them to concentrate on higher-priority tasks. */}
            </h2>
          </div>
        </div>
      </div>
      {/* <div className="main_headerhome_third_div"> */}{" "}
      <div className="main_headerhome_third_div">
        <div className="main_headerhome_first_div">
          <div className="headerHomeInnerBox aIworkBox">
            <h1 className="abouthd3d">AI WORKFORCE</h1>
            <p className="main_headerhome_third_div_p">
              Altus offer a suite of innovative AI-based solutions designed to
              transform the way businesses operate. Our cutting-edge technology
              is customised to meet the unique needs of{" "}
              {"frontend and backend operations,".split(" ").map((word, i) => (
                <span key={i} className="main_headerhome_third_div_p_span">
                  {word}{" "}
                </span>
              ))}
              <span style={{ marginRight: "10px" }}>
                of companies, regardless of their size, providing an
              </span>
              {"AI Workforce".split(" ").map((word, i) => (
                <span key={i} className="main_headerhome_third_div_p_span">
                  {word}{" "}
                </span>
              ))}
              that efficiently empowers human capital.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="main_headerhome_first_div">
        {" "}
        <div className="headerHomeInnerBox">
          <div className="main_headerhome_fourth_div">
            <div style={{ width: "8%" }}>
              <img src={downarrow} alt="downarrow" />
            </div>
          </div>
        </div>
      </div> */}
      {/*====================================================================== next compon ============================================*/}
      <div>
        <div className="main_headerhome_fifth_div">
          <div className="main_headerhome_fifth_left_div">
            <div className="markerImg">
              <img
                src={masklayer1}
                // style={{ height: "100%" }}
                className="markerImg_style"
              />
            </div>
            <div className="insideImgBox">
              <h3>AI CUSTOMER SUPPORT</h3>
              <div className="main_headerhome_fifth_left_div_h4_div">
                <h4>MACHINE LEARNING</h4>
                <h4>EFFICIENT CUSTOMER SUPPORT</h4>
                <h4>WORKLOAD REDUCTION</h4>
                <h4>24/7 AVAILABILITY</h4>
                <h4>USER-FRIENDLY INTERFACE</h4>
              </div>
              <div className="main_headerhome_fifth_left_div_button_div">
                <Link to="/aicustomerservice">
                  <button className="main_headerhome_fifth_left_div_button">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="main_headerhome_fifth_right_div">
            <h2>AI WORKFORCE FOR FRONTEND CUSTOMER SUPPORT</h2>
            <h3>
              Customer support solutions with the tools, expertise, and
              strategies to achieve over 80% automation across digital support
              channels, including chat, email, messaging, and more.
            </h3>
          </div>
        </div>
      </div>
      <div>
        <div className="main_headerhome_fifth_div">
          <div className="main_headerhome_fifth_right_div whiteBoxDiv">
            <h2 className="whiteBoxDiv">
              BESPOKE AI WORKFORCE FOR BACKEND OPERATIONS
            </h2>
            <h3 className="whiteBoxDiv">
              Custom AI solutions for various back-end operations to meet your
              unique business requirements.
            </h3>
          </div>
          <div className="main_headerhome_fifth_left_div_below">
            <div className="markerImg">
              <img
                src={masklayer2}
                alt="masklayer"
                className="markerImg_style"
              />
            </div>
            <div className="insideImgBox">
              <h3> BESPOKE BACKEND SUPPORT</h3>
              <div className="main_headerhome_fifth_left_div_h4_div">
                <h4>CONSULTATION AND ASSESSMENT</h4>
                <h4>SOLUTION DESIGN AND DEVELOPMENT</h4>
                <h4>IMPLEMENTATION AND TRAINING</h4>
                <h4>ONGOING SUPPORT AND OPTIMISATION</h4>
              </div>
              <div className="main_headerhome_fifth_left_div_button_div">
                <Link to="/AIcustomworkforce">
                  <button className="main_headerhome_fifth_left_div_button">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
