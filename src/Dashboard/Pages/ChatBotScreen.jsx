import { Avatar, Button, Spin } from "antd"; // Import Spin for loader
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for making HTTP requests
import { useSelector } from "react-redux";

function ChatBotScreen() {
  const [companyName, setCompanyName] = useState("");
  const [avatarSrc, setAvatarSrc] = useState("");
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const newName = event.target.value;
    setCompanyName(newName);
    console.log(newName); // Optionally, log the new name for debugging
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("userId", userId); // Replace 'USER_ID' with the actual user ID
      formData.append("name", companyName);
      formData.append("image", file);

      // Make a POST request to your backend server to upload the image and save the company name
      const response = await axios.post(
        "http://localhost:3000/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Redirect to the chat page after successful submission
      navigate("/dashboard/chatbot");
    } catch (error) {
      console.error("Error:", error);
      // Handle error if necessary
    } finally {
      setLoading(false); // Set loading to false after submission completes
    }
  };

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        setAvatarSrc(dataURL); // Set avatarSrc to the data URL for preview
      };
      reader.readAsDataURL(selectedFile);
      setFile(selectedFile); // Set the file object in state
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const sendMessage = () => {
    navigate("/dashboard/chatbot/chat");
  };

  return (
    <>
      <div className="chat-bot-screen">
        <div className="add-company-avatar m-0">
          {/* <Avatar shape='square' size={64} style={{ border: '1px solid #828282', width: '100px', height: '60px' }} src={avatarSrc} /> */}
          <div
            style={{
              border: "1px solid #828282",
              width: "100px",
              height: "60px",
              backgroundImage: `url(${avatarSrc})`, // Set the background image using avatarSrc
              backgroundSize: "cover", // Optional: Adjust background size as needed
            }}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <Button className="upload-button" onClick={handleClick}>
            Upload Image
          </Button>
        </div>
        <div className="add-model-1">
          <div className="d-flex">
            <input
              type="text"
              className="chat-input-screen"
              placeholder="Enter Your Company Name"
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <button
          style={{ fontSize: "16px" }}
          className="dashboard-btn"
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? <Spin /> : "Save"}
        </button>
      </div>
    </>
  );
}

export default ChatBotScreen;
