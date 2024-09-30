import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal, Form } from "antd";
import { useSelector } from "react-redux";

function PlanDetail() {
  const [isUserIdDisabled, setIsUserIdDisabled] = useState(true);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { userId1 } = location.state;
  const [avatarSrc, setAvatarSrc] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [planDetails, setPlanDetails] = useState(null);

  const handleChangePlan = (e) => {
    const plan = e.target.value;
    setSelectedPlan(plan);
    setPlanDetails(getPlanDetails(plan));
  };
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    UserId: "",
    Phone: "",
    user_Address: "",
    Role: "",
    profileImageUrl: "",
  });

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Fetch user details
        const response = await fetch(
          `http://localhost:3000/get_user/${userId1}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const userData = await response.json();
          setFormData((prevFormData) => ({
            ...prevFormData,
            Username: userData.username || "",
            Email: userData.email || "",
            Phone: userData.phone || "",
            UserId: userData.id || "",
            profileImageUrl: userData.profileImageUrl || "",
            user_Address: userData.user_Address || "",
            user_Type: userData.user_Type || "",
            Other: userData.Other || "",
            Role: userData.role || "",
          }));
          setIsUserIdDisabled(true);
          console.log("Fetched user data successfully:", userData);
        } else {
          console.error("Failed to fetch user profile.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserDetails();
    // Check for a saved avatar source in local storage
    const savedAvatarSrc = localStorage.getItem("avatarSrc");
    if (savedAvatarSrc) {
      setAvatarSrc(savedAvatarSrc);
    }
  }, [userId]);

  const handleBack = () => {
    navigate(`/dashboard/Paymentdetail`);
  };

  const changePlan = (user) => {
    setSelectedUser(user);
    setShowUserModal(true);
  };

  const handleCloseUserModal = () => {
    setSelectedUser(null);
    setShowUserModal(false);
  };

  const handleCancelAddUser = () => {
    setShowUserModal(false);
    setSelectedPlan("");
  };

  const getPlanDetails = (plan) => {
    // Logic to get plan details based on the selected plan
    switch (plan) {
      case "Basic":
        return {
          name: "Basic Plan",
          price: "$10",
          limit: "5",
          visit: "100",
          description: "This is the basic plan with limited features.",
        };
      case "Premium":
        return {
          name: "Premium Plan",
          price: "$20",
          limit: "15",
          visit: "500",
          description:
            "This is the premium plan with more features than the basic plan.",
        };
      case "Ultimate":
        return {
          name: "Ultimate Plan",
          price: "$30",
          limit: "Unlimited",
          visit: "Unlimited",
          description: "This is the ultimate plan with all features included.",
        };
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <Modal
          visible={showUserModal}
          onCancel={handleCloseUserModal}
          footer={null}
          title="Change Plan"
          className="add-popup"
        >
          {/* <input autoComplete="off" className='form-input' type="text" name="username" placeholder="Name" value={formData.Username} /> */}
          {formData && (
            <div className="popup-bg">
              <div className="d-flex">
                <div className="w-100 d-flex flex-column gap-3 mt-2">
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="username"
                    value={formData.Username}
                    placeholder="Name"
                  ></input>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="username"
                    value={formData.Email}
                    placeholder="Email"
                  ></input>
                </div>
                <div className="w-100 d-flex flex-column gap-3 align-items-end mt-2">
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="username"
                    value={"Basic"}
                    placeholder="Current Plan"
                  ></input>
                  <input
                    autoComplete="off"
                    className="form-input"
                    type="text"
                    name="username"
                    value={"10$"}
                    placeholder="Plan Price"
                  ></input>
                </div>
              </div>
              <div>
                <select
                  className="form-input w-100"
                  name="role"
                  value={selectedPlan}
                  onChange={handleChangePlan}
                >
                  <option value="" disabled hidden>
                    New Plan
                  </option>
                  <option className="form-inpu" value="Basic">
                    Basic Plan
                  </option>
                  <option className="form-input" value="Premium">
                    Premium Plan
                  </option>
                  <option className="form-input" value="Ultimate">
                    Ultimate Plan
                  </option>
                </select>
              </div>
              {planDetails && (
                <div style={{ marginTop: "10px", textAlign: "start" }}>
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-2 pe-5 ps-0">
                          <strong>Name:</strong>
                        </td>
                        <td className="p-2 pe-5 ps-0">{planDetails.name}</td>
                      </tr>
                      <tr>
                        <td className="p-2 pe-5 ps-0">
                          <strong>Monthly Price:</strong>
                        </td>
                        <td className="p-2 pe-5 ps-0">{planDetails.price}</td>
                      </tr>
                      <tr>
                        <td className="p-2 pe-5 ps-0">
                          <strong>User Limit:</strong>
                        </td>
                        <td className="p-2 pe-5 ps-0">
                          {planDetails.limit} User
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 pe-5 ps-0">
                          <strong>Visit:</strong>
                        </td>
                        <td className="p-2 pe-5 ps-0">{planDetails.visit}</td>
                      </tr>
                      <tr>
                        <td className="p-2 pe-5 ps-0">
                          <strong>Description:</strong>
                        </td>
                        <td className="p-2 pe-5 ps-0">
                          {planDetails.description}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              <div style={{ textAlign: "start" }} className="d-flex gap-2 mb-2">
                <button
                  style={{ marginRight: "5px" }}
                  className="dashboard-btn"
                  onClick={handleCancelAddUser}
                >
                  Cancel
                </button>
                <button className="dashboard-btn" onClick={""}>
                  Update
                </button>
              </div>
            </div>
          )}
        </Modal>
        <div style={{ marginBottom: "40px" }}>
          <div className="payment-heading">
            <h3>User</h3>
          </div>
          <div className="payment-uper">
            <table className="table" style={{ margin: "0" }}>
              <tbody>
                <tr>
                  <td>User Name</td>
                  <td>{formData.Username}</td>
                </tr>
                <tr>
                  <td>User Email</td>
                  <td>{formData.Email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style={{ marginBottom: "40px" }}>
          <div className="payment-heading">
            <h3>My Subscriptions</h3>
          </div>
          <div className="payment-uper">
            <table className="table" style={{ margin: "0" }}>
              <tbody>
                <tr>
                  <td>Your current balance is:</td>
                  <td>10548.54₹</td>
                </tr>
                <tr>
                  <td>Next Payment Due:</td>
                  <td>December 25,2023 (abc Service)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="payment-heading">
            <h3>Email Service</h3>
          </div>
          <div className="subscription-info d-flex justify-content-between">
            <div>
              <p>Price plan:</p>
              <h5>Primium Subscription 2500 (324.6₹)</h5>
              <p>Maximum subscribers: 2500</p>
              <div className="d-flex flex-column gap-3">
                <button
                  onClick={() => changePlan(selectedUser)}
                  className="dashboard-btn"
                >
                  Change my plan
                </button>
                <button className="dashboard-btn">Cancel subscription</button>
              </div>
            </div>
            <div className="payment-lower">
              <table className="table " style={{ margin: "0" }}>
                <tbody>
                  <tr>
                    <td>Status:</td>
                    <td>Active</td>
                  </tr>
                  <tr>
                    <td>Valid until:</td>
                    <td>December 25, 2023</td>
                  </tr>
                  <tr>
                    <td>Subscription activated on:</td>
                    <td>November 25, 2023</td>
                  </tr>
                  <tr>
                    <td>Monthly payment:</td>
                    <td>₹325.70</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <button
          style={{ fontSize: "16px" }}
          className="dashboard-btn"
          onClick={handleBack}
        >
          Back
        </button>
      </div>
    </>
  );
}

export default PlanDetail;
