import "../../../Styles/Supportform.css";

const SupportForm2 = () => {
    return (
      <div className="main_Supportform_div">
        <div className="main_support_flex_div">
          <div className="main_support2_flex_left_div">
            <h3>START YOUR JOURNEY TOWARD AI-POWERED SUCCESS</h3>
            <p>
              Fill out the form, and let's begin the conversation on how we can
              transform your business together.
            </p>
          </div>
          <div className="main_support_flex_right_div">
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style"
                placeholder="FIRST NAME"
              />
              <input
                className="supportform_input_style"
                placeholder="LAST NAME"
              />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style"
                placeholder="BUSINESS EMAIL"
              />
              <input className="supportform_input_style" placeholder="PHONE" />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style"
                placeholder="COUNTRY CODE"
              />
              {/* <input
                className="supportform_input_style"
                placeholder="AREA OF INTEREST"
              /> */}
              <select
                style={{ color: "grey" }}
                className="supportform_input_style"
              >
                <option value="" disabled selected>
                  AREA OF INTEREST
                </option>
                <option value="option1">AI Customer Support</option>
                <option value="option2">AI Backend Support</option>
                <option value="option2">Other</option>
              </select>
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style_message"
                placeholder="YOUR MESSAGE"
              />
            </div>
            {/* ---------------------------------------------- */}
            <div className="main_support_flex_right_div_section">
              <input
                className="supportform_input_style"
                placeholder="HOW DID YOU HEAR ABOUT US?"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default SupportForm2;
