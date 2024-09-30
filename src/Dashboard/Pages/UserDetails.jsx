import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function UserDetails() {
  const [isUserIdDisabled, setIsUserIdDisabled] = useState(false);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const fileInputRef = useRef(null);
  const [avatarSrc, setAvatarSrc] = useState("");
  const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: "",
    UserId: "",
    Phone: "",
    Address: "",
    Role: "",
  });
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        // Fetch user details
        const response = await fetch(
          `http://localhost:3000/get_user/${userId}`
        );
        if (response.ok) {
          const userData = await response.json();
          setFormData((prevFormData) => ({
            ...prevFormData,
            Username: userData.username || "",
            Email: userData.email || "",
            UserId: userData.id || "", // Assuming this ID is used to fetch user details
          }));
          setIsUserIdDisabled(true);
          console.log("Fetched user data successfully:", userData);

          // Fetch user details using the obtained ID
          const userResponse = await fetch(
            `http://localhost:3000/get_user_details/${userId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (userResponse.ok) {
            const userData = await userResponse.json();
            setFormData((prevFormData) => ({
              ...prevFormData,
              // Update or merge with the previously set user data
              Phone: userData.phone,
              Address: userData.address,
              Role: userData.role,
              // Include other fields as necessary
            }));
            console.log("Fetched user details successfully:", userData);
          } else {
            console.error("Failed to fetch user details.");
          }
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        setAvatarSrc(dataURL);
        localStorage.setItem("avatarSrc", dataURL); // Save to local storage
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
    const method = "POST";
    const url = "http://localhost:3000/update_user_details";

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...formData, UserId: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("response data:", data);
        toast.success("Saved Successfully");

        // Update the form data state with the new values
        setFormData((prevFormData) => ({
          ...prevFormData,
          Username: data.Username || prevFormData.Username,
          Email: data.Email || prevFormData.Email,
          Phone: data.Phone || prevFormData.Phone,
          UserId: data.UserId || prevFormData.UserId,
          Address: data.Address || prevFormData.Address,
          Role: data.Role || prevFormData.Role,
        }));
      } else {
        const errorData = await response.json();
        alert(`Failed to update user details: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error updating user details:", error);
      alert("Error updating user details. Please try again later.");
    }
  };

  return (
    <>
      <div className="user-details my-3">
        <div className="popup-bg">
          <div className="user-details-heading">
            <h3>User Details</h3>
          </div>
          <div className="user-avatar">
            <Avatar
              style={{ border: "1px solid" }}
              src={avatarSrc || "fallback_avatar_image_url"}
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
          <div className="user-details-form">
            {/* Input fields */}
            <div>
              <input
                autoComplete="off"
                className="form-input-user"
                type="text"
                name="Username"
                placeholder="Username"
                value={formData.Username}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-user"
                type="email"
                name="Email"
                placeholder="Email"
                value={formData.Email}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-user"
                type="password"
                name="Password"
                placeholder="Password"
                value={formData.Password}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-user"
                type="text"
                name="UserId"
                placeholder="User ID"
                value={formData.UserId}
                onChange={handleChange}
                disabled={isUserIdDisabled}
              />
            </div>
            <div
              className="d-flex w-100 flex-column"
              style={{ alignItems: "end" }}
            >
              <input
                autoComplete="off"
                className="form-input-user"
                type="text"
                name="Phone"
                placeholder="Phone"
                value={formData.Phone}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-user"
                type="text"
                name="Address"
                placeholder="Address"
                value={formData.Address}
                onChange={handleChange}
              />
              <input
                autoComplete="off"
                className="form-input-user"
                type="text"
                name="Role"
                placeholder="Role"
                value={formData.Role}
                onChange={handleChange}
              />
              <button className="dashboard-btn" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetails;
