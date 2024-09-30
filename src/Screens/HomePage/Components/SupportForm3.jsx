import React from "react"
import "../../../Styles/Supportform.css"; 

const SupportForm3  = () => {

    return (
      <div className="main_Supportform3_div">
        <div className="main_support_flex_div2">
          <div className="main_support3_flex_left_div">
            <h3>WE VALUE YOUR ENQUIRY</h3>
            <p>
              complete the form, and our team will connect with you shortly to
              address your questions and explore how we can work together.
            </p>
          </div>
          <div className="main_support_flex_right_div">
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style2"
                placeholder="FIRST NAME"
              />
              <input
                className="supportform_input_style2"
                placeholder="LAST NAME"
              />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style2"
                placeholder="BUSINESS EMAIL"
              />
              <input className="supportform_input_style2" placeholder="PHONE" />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style2"
                placeholder="COUNTRY CODE"
              />
              {/* <input
                className="supportform_input_style2"
                placeholder="SUBJECT OF INQUIRY"
              /> */}
              <select
                style={{ color: "grey" }}
                className="supportform_input_style2"
              >
                <option value="" disabled selected>
                  SUBJECT OF INQUIRY
                </option>
                <option value="option1">AI Customer Support</option>
                <option value="option2">AI Backend Support</option>
                <option value="option2">Other</option>
              </select>
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style2_message"
                placeholder="YOUR MESSAGE"
              />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style2"
                placeholder="HOW DID YOU HEAR ABOUT US?"
              />
            </div>
          </div>
        </div>
      </div>
    );

}


export default SupportForm3