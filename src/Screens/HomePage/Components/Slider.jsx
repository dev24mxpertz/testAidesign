import React from "react";
import { RightOutlined } from "@ant-design/icons";

function Slider() {
  return (
    <>
      <div className="Slider-wrapper d-flex flex-column">
        <div>
          <div
            style={{ margin: "50px" }}
            className="d-flex flex-wrap justify-content-evenly align-items-center"
          >
            <div className="col-12 col-md-7 text-md-start text-center">
              <div>
                <h1 className="slider-heading text-uppercase">
                  The{" "}
                  <span className="slider-heading-inner text-uppercase">
                    #1
                  </span>{" "}
                  AI solution for <br />
                  customer support
                </h1>
                <p className="slider-sub-heading col-12 col-xxl-9 col-ls-7 col-md-10">
                  Unleash the Future: Transforming Buisness Operations with{" "}
                  <br /> Our Revolutionary AI Technology
                </p>
                <div>
                  <div className="pt-3 d-flex flex-column gap-3">
                    <div className="d-flex gap-3 slider-sub-heading-inner">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/ai.svg.png")}
                        alt=""
                      />
                      <p>Efficient Customer Support</p>
                    </div>
                    <div className="d-flex gap-3 slider-sub-heading-inner">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/launch.svg fill.png")}
                        alt=""
                      />
                      <p>24/7 Availability</p>
                    </div>
                    <div className="d-flex gap-3 slider-sub-heading-inner">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/relieved-01.png")}
                        alt=""
                      />
                      <p>Workload Reduction</p>
                    </div>
                    <div className="d-flex gap-3 slider-sub-heading-inner">
                      <img
                        className="img-fluid"
                        src={require("../../../Assets/images/cursor.svg fill.png")}
                        alt=""
                      />
                      <p>User-Friendly Interface</p>
                    </div>
                  </div>
                </div>
                {/* <div className='col-12  my-sm-4 pt-3'>
                                    <button to="/" className='slider-btn-learnmore text-decoration-none  fs-6'>Learn More<RightOutlined /></button>
                                </div> */}
              </div>
            </div>
            <div className="my-auto col-9 col-md-5">
              <div className="">
                <img
                  className="img-fluid"
                  alt=""
                  src={require("../../../Assets/images/Globe.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='slider-home-s-2 w-100'> */}
      {/* <div className='d-flex justify-content-evenly align-items-center w-100 ps-5 pe-5'>
                    <div className='w-25'>
                        <p>The world leading brands <br /> use Ultimate for chat <br /> automation</p>
                    </div>
                    <div className='w-75 d-flex flex-row justify-content-between flex-wrap'>
                        <img className='img-fluid sizing' alt='' src={require('../../../Assets/images/octane.png')} />
                        <img className='img-fluid sizing' alt='' src={require('../../../Assets/images/logoai.png')} />
                        <img className='img-fluid sizing' alt='' src={require('../../../Assets/images/yellowai.png')} />
                        <img className='img-fluid sizing' alt='' src={require('../../../Assets/images/storai.png')} />
                    </div>
                </div> */}
      {/* </div> */}
    </>
  );
}

export default Slider;
