import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../Styles/Login/authentication.css";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setAuth } from "../../Redux/slices/authSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Login failed. Please try again.");
      }

      const data = await response.json();
      if (data.token) {
        // Dispatch action to update token and userId in authSlice
        dispatch(
          setAuth({ token: data.token, userId: data.userId, role: data.role })
        );

        toast.success("Welcome user");
        navigate("/dashboard");
      } else {
        throw new Error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
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
              <h1>LOGIN</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <Input
                  size="large"
                  placeholder="Email ID"
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
              </div>
              <div className="forgot-password">
                <Link to="/ForgotPassword">Forgot Password?</Link>
              </div>
              <div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-btn my-4"
                  loading={loading}
                >
                  LOGIN
                </Button>
              </div>
            </form>
            <div className="login-lower">
              <h4>
                Dont have an account ? <Link to="/signup">Sign Up</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
