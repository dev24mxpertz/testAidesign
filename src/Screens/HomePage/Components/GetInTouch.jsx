import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getInTouchUser } from "../../../Redux/slices/getintouchSlice";

function GetInTouch() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
    companySize: "",
    Industry: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
    companySize: "",
    Industry: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) return;
    if (name === "mobile" && !/^\d*$/.test(value)) return;
    if (name === "subject" && !/^[a-zA-Z\s]*$/.test(value)) return;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check if all required fields are filled in
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
      isValid = false;
    } else if (formData.mobile.length < 7) {
      // Check if mobile length is less than 7
      newErrors.mobile = "Mobile number must be at least 7 digits long";
      isValid = false;
    }
    // if (!formData.email.trim()) {
    //     newErrors.email = 'Email is required';
    //     isValid = false;
    // }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }
    // ---------------------------------------------------
    if (!formData.companySize.trim()) {
      newErrors.companySize = "Company Size is required";
      isValid = false;
    }
    // --------------------------------------------------Industry
    if (!formData.Industry.trim()) {
      newErrors.Industry = "Industry Name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSendClick = async () => {
    const isValid = validateForm();
    if (isValid) {
      try {
        // Dispatch the action to make API call
        await dispatch(getInTouchUser(formData));
        // Clear form fields after successful submission
        setFormData({
          name: "",
          mobile: "",
          email: "",
          subject: "",
          message: "",
          companySize: "",
          Industry: "",
        });
        // Show success message
        toast.success("Join Our Network successful!");
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error submitting form. Please try again later.");
      }
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  return (
    <div className="GetInTouch_Wrapper">
      <div className="containerr">
        <div>
          <div className="col-12 d-flex flex-column align-items-center mb-5">
            <h1 className="contact-us-h1 text-uppercase">Contact Us</h1>
          </div>
        </div>
        <div className="col-12 d-flex w-100 justify-content-around">
          <div className="col-12">
            <div className="contact_form mx-auto getintouch-box">
              {/* Input fields */}
              <div className="d-flex w-100 justify-content-around">
                <div
                  style={{ width: "45%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="text"
                      className="form-control-1"
                      name="name"
                      placeholder="Name"
                      pattern="[A-Za-z ]+"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.name}</span>
                  </div>
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="tel"
                      minLength={7}
                      maxLength={15}
                      className="form-control-1"
                      name="mobile"
                      placeholder="Mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.mobile}</span>
                  </div>
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="number"
                      minLength={7}
                      maxLength={15}
                      className="form-control-1"
                      name="companySize"
                      placeholder="Company Size"
                      value={formData.companySize}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.companySize}</span>
                  </div>
                </div>
                <div
                  style={{ width: "45%" }}
                  className="d-flex flex-column justify-content-around"
                >
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="email"
                      className="form-control-1"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.email}</span>
                  </div>
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="text"
                      className="form-control-1"
                      name="subject"
                      placeholder="Subject"
                      pattern="[A-Za-z ]+"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.subject}</span>
                  </div>
                  <div style={{ width: "100%", marginBottom: "0px" }}>
                    <input
                      type="text"
                      minLength={7}
                      maxLength={15}
                      className="form-control-1"
                      name="Industry"
                      placeholder="Industry Name"
                      value={formData.Industry}
                      onChange={handleChange}
                    />
                    <br />
                    <span className="error-form-1">{errors.Industry}</span>
                  </div>
                </div>
                {/* ------------------ */}

                {/* ------------------- */}
              </div>
              <div
                style={{
                  width: "100%",
                  margin: "0px 48px",
                  marginBottom: "0px",
                }}
              >
                <textarea
                  style={{ height: "125p" }}
                  className="form-control-2"
                  name="message"
                  rows="6"
                  placeholder="Write Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <br />
                <span className="error-form-1">{errors.message}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button
            style={{ backgroundColor: "#1f1f28", color: "white" }}
            className="getintouch-summit-btn"
            onClick={handleSendClick}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
