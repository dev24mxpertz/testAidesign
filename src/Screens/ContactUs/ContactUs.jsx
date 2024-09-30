import React from "react";
import contactus_image1 from "../../Assets/images/contactus_image1.png";
import contactus_image2 from "../../Assets/images/contactus_image2.png";
import contactus_image3 from "../../Assets/images/contactus_image3.png";
import SupportForm3 from "../HomePage/Components/SupportForm3";
import { display } from "@mui/system";

const ContactUs = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column ",
      }}
    >
      <div className="main_contactus_div">
        <div className="main_contactus_upper_section">
          <div className="bachground-purple postionrelative_style">
            {/* <img
              className="main_contactus_upper_section_img"
              src={contactus_image1}
              alt="custom_slider_image"
            /> */}
            <h2 className="main_contactus_upper_section_h2">
              WE ARE HERE TO HELP
            </h2>
            <h3 className="main_contactus_upper_section_h3">
              GET IN TOUCH TODAY
            </h3>
            <p className="main_contactus_upper_section_p">
              Whether you’re curious about our services, need guidance on your
              next steps, or want to discuss how we can support your business
              goals, our team is ready to help. Fill out the form below or send
              us an email, and we’ll get back to you promptly.
            </p>
          </div>
        </div>
        {/* <div className="main_contactus_lower_section">
          <img
            className="main_contactus_lower_section_img"
            src={contactus_image2}
            alt="contactus_image2"
          />
          <h2 className="main_contactus_lower_section_h2">WHY REACH OUT?</h2>
          <ul className="main_contactus_lower_section_ul">
            <li>
              Learn more about our AI solutions they can benefit your business
            </li>
            <li>Recieve expert advice tallored to your unique needs.</li>
            <li>
              Start a conversation about your specific business challenges.
            </li>
          </ul>
        </div> */}
      </div>
      <div className="main_contactus_form_div">
        <div className="bachground-purple">
          <div className="main_contactus_content_form_div">
            <img
              className="main_contactus_content_form_div_img"
              src={contactus_image3}
              alt="main_contactus_content_form_div_img"
            />
            <p className="main_contactus_content_form_div_h3">EMAIL US</p>
            <p className="main_contactus_content_form_div_h4">
              inquire@altus-intel.com
            </p>
            <h4 className="main_contactus_content_form_div_h4_2">
              OR FILL THE FORM BELOW
            </h4>
          </div>
        </div>
      </div>
      <SupportForm3 />
    </div>
  );
};

export default ContactUs;
