import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../../Styles/Login/authentication.css";
import { useDispatch } from "react-redux";
import { signupUser } from "../../Redux/slices/signupSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errorMsg = "";

    if (name === "email") {
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errorMsg = emailRegex.test(value) ? "" : "Invalid email format";
    }

    if (name === "password") {
      // Password strength checking
      const passwordStrengthRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      errorMsg = passwordStrengthRegex.test(value)
        ? ""
        : "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    if (name === "username") {
      // Company Name validation (accepts only characters)
      const companyNameRegex = /^[a-zA-Z\s]*$/; // Allow only letters and whitespace
      errorMsg = companyNameRegex.test(value)
        ? ""
        : "Company Name should be letters";
    }

    setErrors({
      ...errors,
      [name]: errorMsg,
    });

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   for (const key in errors) {
  //     if (errors[key]) {
  //       alert('Please fix all errors before signing up!');
  //       setLoading(false);
  //       return;
  //     }
  //   }

  //   for (const key in formData) {
  //     if (formData[key].trim() === '') {
  //       alert('All fields are required!');
  //       setLoading(false);
  //       return;
  //     }
  //   }

  //   if (formData.password !== formData.confirmPassword) {
  //     alert('Passwords do not match!');
  //     setLoading(false);
  //     return;
  //   }

  //   try {
  //     await dispatch(signupUser(formData));
  //     alert('Signup successful!');
  //     navigate("/signin");
  //   } catch (error) {
  //     console.error('Error during signup:', error);
  //     // Handle error
  //   } finally {
  //     setLoading(false); // Reset loading state regardless of success or failure
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);

    for (const key in errors) {
      if (errors[key]) {
        alert("Please fix all errors before signing up!");
        setLoading(false);
        return;
      }
    }

    for (const key in formData) {
      if (formData[key].trim() === "") {
        alert("All fields are required!");
        setLoading(false);
        return;
      }
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/signup",
        formData
      );
      if (
        response &&
        response.status === 201 &&
        response.data &&
        response.data.success
      ) {
        alert("Signup successful!");
        navigate("/signin");
      } else {
        if (
          response.status === 400 &&
          response &&
          response === "User already has an account"
        ) {
          setErrorMessage("User already has an account");
        } else {
          const errorMessage =
            response && response.data
              ? response.data.message || "Signup failed"
              : "Signup failed";
          setErrorMessage(errorMessage);
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Please ReCheck Email and Password");
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message || "Signup failed"
          : "Signup failed";
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
    }
    // try {
    //   // Dispatch signupUser action
    //   await dispatch(signupUser(formData));
    //   // Display success message
    //   alert('Signup successful!');
    //   // Navigate to the signin page
    //   navigate("/signin");
    // } catch (error) {
    //   console.error('Error during signup:', error);
    //   // No need to display error message here, it's already handled in the slice
    // } finally {
    //   // Reset loading state
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <div>
        <Link style={{ textDecoration: "none" }} to="/">
          <Button className="login-back-btn">
            <ArrowLeftOutlined /> Back
          </Button>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="Signup-bg">
          <div className="blur-bg">
            <div className="login-card">
              <div className="login-upper my-4">
                <img
                  className="img-fluid"
                  src={require("../../Assets/images/user-icon.png")}
                  alt=""
                />
              </div>
              <div className="login-upper">
                <h1>SIGN UP</h1>
              </div>
              <div className="login-upper">
                <h4>Create Your Account</h4>
              </div>
              <div>
                {/* <Input size="large" placeholder="Company Name" name="username" value={formData.username} onChange={handleChange} prefix={<img src={require("../../Assets/images/user_icon.png")} alt="" className='input-icon' />} />
              <Input size="large" placeholder="company email Id" name="email" value={formData.email} onChange={handleChange} prefix={<img src={require("../../Assets/images/mail-icon.png")} alt="" className='input-icon' />} />
              <Input.Password size="large" placeholder="Password" name="password" value={formData.password} onChange={handleChange} prefix={<img src={require("../../Assets/images/lock-icon.png")} alt="" className='input-icon' />} />
              <Input.Password size="large" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} prefix={<img src={require("../../Assets/images/lock-icon.png")} alt="" className='input-icon' />} /> */}
                <Input
                  size="large"
                  placeholder="Company Name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  prefix={
                    <img
                      src={require("../../Assets/images/user_icon.png")}
                      alt=""
                      className="input-icon"
                    />
                  }
                />
                {errors.username && (
                  <p className="error-msg">{errors.username}</p>
                )}
                <Input
                  size="large"
                  placeholder="Company Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  prefix={
                    <img
                      src={require("../../Assets/images/mail-icon.png")}
                      alt=""
                      className="input-icon"
                    />
                  }
                />
                {errors.email && <p className="error-msg">{errors.email}</p>}
                <Input.Password
                  size="large"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  prefix={
                    <img
                      src={require("../../Assets/images/lock-icon.png")}
                      alt=""
                      className="input-icon"
                    />
                  }
                />
                {errors.password && (
                  <p className="error-msg">{errors.password}</p>
                )}
                <Input.Password
                  size="large"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  prefix={
                    <img
                      src={require("../../Assets/images/lock-icon.png")}
                      alt=""
                      className="input-icon"
                    />
                  }
                />
                {errors.confirmPassword && (
                  <p className="error-msg">{errors.confirmPassword}</p>
                )}
              </div>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-btn my-3"
                  loading={loading}
                >
                  Sign Up
                </Button>
              </div>
              <div className="sign-up-with">
                <img
                  className="img-fluid mx-2"
                  src={require("../../Assets/images/Group 144.png")}
                  alt="google"
                  style={{
                    width: "100%",
                    maxWidth: "40px",
                    filter: "drop-shadow(0px 0px 2px black)",
                  }}
                />
                <img
                  className="img-fluid mx-2"
                  src={require("../../Assets/images/Group 152.png")}
                  alt="facebook"
                  style={{
                    width: "100%",
                    maxWidth: "40px",
                    filter: "drop-shadow(0px 0px 2px black)",
                  }}
                />
              </div>
              <div className="login-lower my-3">
                <h4>
                  Already have an account?{" "}
                  <NavLink
                    to="/signin"
                    style={{ color: "#37ACFD", textDecoration: "none" }}
                  >
                    Log in
                  </NavLink>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
