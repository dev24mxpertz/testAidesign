import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function CompanyProfile() {
  const [isCompanyIDDisabled, setIsCompanyIDDisabled] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const fileInputRef = useRef("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    userId: "",
    user_Address: "",
    user_Type: "",
    Other: "",
    profileImageUrl: "",
  });
  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        // Fetch user details
        const userResponse = await fetch(
          `http://localhost:3000/get_user/${userId}`
        );
        if (userResponse.ok) {
          const userData = await userResponse.json();
          console.log("Fetched user data successfully:", userData);
          setFormData((prevFormData) => ({
            ...prevFormData,
            username: userData.username || "",
            email: userData.email || "",
            phone: userData.phone || "",
            userId: userData.id || "",
            profileImageUrl: userData.profileImageUrl || "",
            phone: userData.phone || "",
            user_Address: userData.user_Address || "",
            user_Type: userData.user_Type || "",
            Other: userData.Other || "",
          }));
          setIsCompanyIDDisabled(true);
          setAvatarSrc(userData.profileImageUrl || "");
          console.log("Fetched user data successfully:", userData);
        } else {
          console.error("Failed to fetch user profile.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchProfileDetails();
    // Check for a saved avatar source in local storage
    const savedAvatarSrc = localStorage.getItem("avatarSrc");
    if (savedAvatarSrc) {
      setAvatarSrc(savedAvatarSrc);
    }
  }, [userId]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        setAvatarSrc(dataURL);
        localStorage.setItem("avatarSrc", dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpdate = async () => {
    const userId = formData.userId;
    const method = "POST";
    const uploadUrl = `http://localhost:3000/api/image/upload/${userId}`; // Adjust the URL based on your backend

    const updatedFormData = { ...formData };
    Object.keys(updatedFormData).forEach((key) => {
      if (updatedFormData[key] === "") {
        updatedFormData[key] = null;
      }
    });

    const formDataWithImage = new FormData();
    formDataWithImage.append("image", fileInputRef.current.files[0]);

    Object.entries(updatedFormData).forEach(([key, value]) => {
      formDataWithImage.append(key, value);
    });

    try {
      // Upload image first
      const uploadResponse = await fetch(uploadUrl, {
        method: "POST",
        body: formDataWithImage,
      });

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image");
      }

      // Once image is uploaded, update user data
      const updateUrl = `http://localhost:3000/update_user/${userId}`;
      const response = await fetch(updateUrl, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response Data:", data);
        toast.success("Saved Successfully");

        setFormData((prevFormData) => ({
          ...prevFormData,
          username: data.username || prevFormData.username,
          email: data.email || prevFormData.email,
          phone: data.phone || prevFormData.phone,
          user_Address: data.user_Address || prevFormData.user_Address,
          user_Type: data.user_Type || prevFormData.user_Type,
          Other: data.Other || prevFormData.Other,
          profileImageUrl: data.profileImageUrl || prevFormData.profileImageUrl,
        }));
      } else {
        const errorData = await response.json();
        alert(`Failed to update user data: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating user data:", error);
      alert("Error updating user data. Please try again later.");
    }
  };

  return (
    <>
      <div className="company-add my-3">
        <div className="popup-bg">
          <div className="add-employee-heading">
            <h3>Company Profile</h3>
          </div>
          <div className="add-company-avatar">
            {/* <Avatar value={formData.profileImageUrl} style={{ border: '1px solid' }} src={formData.profileImageUrl} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }} /> */}
            <Avatar
              value={formData.profileImageUrl}
              style={{ border: "1px solid #000" }}
              src={avatarSrc} // Use formData.profileImageUrl directly
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <button className="dashboard-btn" onClick={handleClick}>
              Upload Image
            </button>
          </div>
          <div className="add-employee-form">
            {/* Input fields */}
            <div>
              {/* Company Details Left Side */}
              <input
                autoComplete="off"
                className="form-input-company"
                type="text"
                name="username"
                placeholder="Company Name"
                value={formData.username}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-company"
                type="email"
                name="email"
                placeholder="Company Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-company"
                type="tel"
                name="phone"
                placeholder="Company Phone"
                value={formData.phone}
                onChange={handleChange}
                pattern="[0-9]*"
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
                }
              />
              <input
                autoComplete="off"
                className="form-input-company"
                type="text"
                name="Company_ID"
                placeholder="Company ID"
                value={formData.userId}
                onChange={handleChange}
                disabled={isCompanyIDDisabled}
              />
            </div>
            <div
              className="d-flex w-100 flex-column"
              style={{ alignItems: "end" }}
            >
              {/* Company Details Right Side */}
              <input
                autoComplete="off"
                className="form-input-company"
                type="text"
                name="user_Address"
                placeholder="Company Address"
                value={formData.user_Address}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-company"
                type="text"
                name="user_Type"
                placeholder="Company Type"
                value={formData.user_Type}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-company"
                type="text"
                name="Other"
                placeholder="Other"
                value={formData.Other}
                onChange={handleChange}
              />
              {/* <button className='dashboard-btn' onClick={handleSubmit}>Save</button> */}
              <button className="dashboard-btn" onClick={handleUpdate}>
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyProfile;
