import React from "react";

function Creater() {
  return (
    <>
      <div className="Creater_Wrapper">
        <div className="col-12 text-center d-flex flex-column align-items-center">
          <p className="highlighted-head-creater">
            Best Ai Business Manage Software
          </p>
          <h1 className="col-12 my-1 aibased-heading_creater">
            The best creators <span>trust us</span>
          </h1>
        </div>
        <div className="col-12 brands_section">
          <div className="col-12 col-xxl-2 col-lg-3   col-md-5 text-center">
            <img
              style={{ boxShadow: "1px 3px 7px 1px #89c1c1a6" }}
              className="img-fluid"
              src={require("../../../Assets/images/brand1.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-xxl-2 col-lg-3 col-md-5 text-center">
            <img
              style={{ boxShadow: "1px 3px 7px 1px #89c1c1a6" }}
              className="img-fluid"
              src={require("../../../Assets/images/brand5.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-xxl-2 col-lg-3 col-md-5 text-center">
            <img
              style={{ boxShadow: "1px 3px 7px 1px #89c1c1a6" }}
              className="img-fluid"
              src={require("../../../Assets/images/brand3.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-xxl-2 col-lg-3 col-md-5 text-center">
            <img
              style={{ boxShadow: "1px 3px 7px 1px #89c1c1a6" }}
              className="img-fluid"
              src={require("../../../Assets/images/brand4.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-xxl-2 col-lg-3 col-md-5 text-center">
            <img
              style={{ boxShadow: "1px 3px 7px 1px #89c1c1a6" }}
              className="img-fluid"
              src={require("../../../Assets/images/brand5.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Creater;
