import { Avatar } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function ChatBotScreen2() {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [companyLogo, setCompanyLogo] = useState("");
  const [companyName, setCompanyName] = useState("");

  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [showForm, setShowForm] = useState(false); // State to control the form visibility
  const [userName, setUserName] = useState(""); // State to store user name
  const [userEmail, setUserEmail] = useState(""); // State to store user email
  const messagesEndRef = useRef(null);
  const chatBotContainerRef = useRef(null);
  const navigate = useNavigate();

  const back = () => {
    navigate("/dashboard/ChatBot/chat/CodeGenerate");
  };

  const getImage = async () => {
    console.log("getImage function called");
    try {
      const response = await axios.get(
        `http://localhost:3000/image/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageData = response.data.data; // Assuming your image API response structure
      console.log(imageData);
      setCompanyLogo(imageData.url);
      setCompanyName(imageData.name);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    getImage();
  }, []);

  const Edithandle = () => {
    navigate("/dashboard/ChatBot/chat", { state: { fromEdit: true } });
  };

  const Generate = () => {
    console.log(companyName);
    navigate("/dashboard/ChatBot/chat/CodeGenerate");
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (inputValue.trim() !== "") {
      const userQuestion = inputValue.trim().toLowerCase();

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userQuestion, isUser: true },
      ]);

      try {
        const response = await axios.get(
          `http://localhost:3000/search/${userId}?query=${userQuestion}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = response.data;

        if (responseData.answer) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: responseData.answer, isUser: false },
          ]);
        } else {
          setShowForm(true); // Show the form if no answer is returned
        }
      } catch (error) {
        console.error("Error fetching response from backend:", error);
      }

      setInputValue("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send the data to your backend
    console.log("Form submitted", { userName, userEmail });
    setShowForm(false); // Hide the form after submission
  };

  return (
    <div className="modal-chat-bac">
      <div ref={chatBotContainerRef} className="chat-bot-container">
        <div className="model-hader-s2">
          <div className="model-company-logo">
            <Avatar size={64} src={companyLogo} />
          </div>
          <div className="model-company-name">
            <h2>{companyName}</h2>
          </div>
        </div>
        <div className="model-chat-layout" style={{ padding: "25px" }}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isUser ? "sender-msg" : "reciver-msg"}
            >
              <div className="msg-border">
                <h3>{message.text}</h3>
              </div>
              <div>
                <img
                  style={{ filter: "grayscale(1)" }}
                  src={
                    message.isUser
                      ? require("../../Assets/images/chat-bot-icon-3.png")
                      : require("../../Assets/images/chat-bot-icon-4.png")
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="model-footer-s2">
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />
            <button
              style={{ fontSize: "16px" }}
              className="dashboard-btn"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="form-container">
          <h3>
            We couldn't find an answer. Please provide your details below:
          </h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
      <div className="d-flex w-100 pt-4">
        <div className="d-flex w-100 justify-content-end gap-3">
          <button
            style={{ fontSize: "16px" }}
            className="dashboard-btn"
            onClick={Edithandle}
          >
            Edit Profile
          </button>
          <button
            style={{ fontSize: "16px" }}
            className="dashboard-btn"
            onClick={Generate}
          >
            Generate Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotScreen2;
