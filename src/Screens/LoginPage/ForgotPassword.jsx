import { Button, Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [timer, setTimer] = useState(0);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleSendOTP = async () => {
    if (!email) {
      message.error("Please enter your email");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/forgot_password",
        { email }
      );
      console.log(response.data);
      message.success(response.data.message);
      setTimer(60); // Start the timer for 60 seconds
      setShowResetPassword(true); // Show the reset password inputs
    } catch (error) {
      setShowResetPassword(true);
      console.error("Forgot password error:", error);
      message.error("Failed to send OTP. Please try again.");
    }
    setLoading(false);
  };

  const handleResendOTP = () => {
    if (timer === 0) {
      handleSendOTP();
    } else {
      message.info(
        `Please wait ${timer} seconds before requesting another OTP`
      );
    }
  };

  const handleResetPassword = async () => {
    if (!otp || !newPassword) {
      message.error("Please enter OTP and new password");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/reset_password/verify_otp",
        { otp, newPassword }
      );
      console.log(response.data);
      message.success(response.data.message);
      navigate("/signin");
    } catch (error) {
      console.error("Reset password error:", error);
      message.error("Failed to reset password. Please try again.");
    }
    setLoading(false);
  };

  const handleGoBack = () => {
    setShowResetPassword(false);
  };

  return (
    <>
      <div className="login-bg">
        <div className="blur-bg">
          <div className="login-card">
            <div className="login-upper mb-4">
              <img
                className="img-fluid"
                src={require("../../Assets/images/user-icon.png")}
                alt=""
              />
            </div>
            <div className="login-upper">
              <h1>Forgot Password</h1>
            </div>
            <form>
              <div>
                {showResetPassword ? (
                  <>
                    <form>
                      <Input
                        size="large"
                        className="forgot-btn"
                        placeholder="OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <Input
                        size="large"
                        type="password"
                        className="forgot-btn"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                    </form>
                    <div className="w-100 d-flex justify-content-end mt-2">
                      <button
                        type="link"
                        onClick={handleResendOTP}
                        disabled={timer > 0}
                        style={{
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        Resend OTP {timer > 0 ? `(${timer})` : ""}
                      </button>
                    </div>
                  </>
                ) : (
                  <Input
                    size="large"
                    placeholder="Email Id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    prefix={
                      <img
                        src={require("../../Assets/images/mail-icon.png")}
                        alt=""
                        className="input-icon"
                      />
                    }
                  />
                )}
              </div>
              <div>
                {showResetPassword ? (
                  <>
                    <Button
                      type="primary"
                      onClick={handleResetPassword}
                      className="login-btn my-4"
                      loading={loading}
                    >
                      Reset Password
                    </Button>
                    <div className="w-100 d-flex justify-content-end ">
                      <button
                        type="link"
                        onClick={handleGoBack}
                        style={{
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        Back
                      </button>
                    </div>
                  </>
                ) : (
                  <div>
                    <Button
                      type="primary"
                      onClick={handleSendOTP}
                      className="login-btn my-4"
                      loading={loading}
                      disabled={timer > 0}
                    >
                      Send OTP {timer > 0 ? `(${timer})` : ""}
                    </Button>
                    <div className="w-100 d-flex justify-content-end ">
                      <button
                        type="link"
                        style={{
                          background: "transparent",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none", color: "black" }}
                          to="/signin"
                        >
                          Back to Login
                        </Link>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
