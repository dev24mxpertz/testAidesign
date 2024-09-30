import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { useSelector } from "react-redux";

function ModalChat() {
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", isUser: false },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [askedToConnect, setAskedToConnect] = useState(false);

  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    if (inputValue.trim() !== "") {
      const userQuestion = inputValue.trim().toLowerCase();

      // Add the user's message to the sender's section
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: userQuestion, isUser: true },
      ]);

      try {
        // Send the user's question to the backend
        const response = await axios.get(
          `http://localhost:3000/search/${userId}?query=${userQuestion}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Get the response from the backend
        const responseData = response.data;

        // Add the response message to the receiver's section
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: responseData.answer, isUser: false },
        ]);
      } catch (error) {
        console.error("Error fetching response from backend:", error);
        // Handle error if necessary
      }

      setInputValue(""); // Clear the input field after processing
    }
  };

  const CodeGenerate = () => {
    navigate("/dashboard/ChatBot/chat/CodeGenerate");
  };

  const back = () => {
    navigate("/dashboard/Modal");
  };

  return (
    <div>
      <div>
        <Button className="dashboard-btn mb-3" onClick={back}>
          Back
        </Button>
      </div>
      <div>
        <div style={{ height: "55vh" }} className="modal-chat-back">
          <div style={{ padding: "25px", height: "45vh" }}>
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
          <div className="add-model">
            <div
              style={{ borderTop: "1px solid #000" }}
              className="input-container"
            >
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
              {/* <button
                style={{ fontSize: "16px" }}
                className="dashboard-btn"
                onClick={CodeGenerate}
              >
                Code Generate
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalChat;
