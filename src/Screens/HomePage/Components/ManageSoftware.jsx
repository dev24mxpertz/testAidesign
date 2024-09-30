import React from "react";

function ManageSoftware() {
  return (
    <>
      <div style={{ backgroundColor: "#ffffff" }}>
        <div>
          <div>
            <h1 className="col-12 manage_heading pt-4">Meet The Software</h1>
          </div>
          <div className="Manage_software_wrapper">
            <div className="col-12 col-md-5 d-flex flex-wrap text-md-start text-center justify-content-center justify-content-md-start gap-5">
              {/* <p className='discription'>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt labore dolore magna aliquyam erat sed diam voluptua.</p> */}
              <div className="manage_software_list col-12">
                <ul>
                  <li className="manage-software-list-inner text-uppercase">
                    Chat Automation
                  </li>

                  <li className="manage-software-list-inner text-uppercase">
                    Your Business Analytics
                  </li>

                  <li className="manage-software-list-inner text-uppercase">
                    Manage Your Daily Tasks
                  </li>

                  <li className="manage-software-list-inner text-uppercase">
                    Manage Your Daily Product
                  </li>

                  <li className="manage-software-list-inner text-uppercase">
                    Rich Your Visitor Profiles
                  </li>

                  <li className="manage-software-list-inner text-uppercase">
                    Smart Notifications
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-9 col-xxl-4 col-md-5 text-center">
              <img
                className="img-fluid"
                src={require("../../../Assets/images/manageSoft.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageSoftware;
