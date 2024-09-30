// import React, { useState, useRef, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ModalCreate() {
//     const [messages, setMessages] = useState([
//         { text: "Hello! How can I assist you today?", isUser: false }
//     ]);
//     const [inputValue, setInputValue] = useState('');
//     const messagesEndRef = useRef(null);
//     const navigate = useNavigate    ();

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     const scrollToBottom = () => {
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     };

//     const sendMessage = () => {
//         if (inputValue.trim() !== '') {
//             const userQuestion = { text: inputValue, isUser: true };
//             const botAnswer = { text: "This is the answer to your question.", isUser: false };

//             setMessages(prevMessages => [...prevMessages, userQuestion, botAnswer]);
//             setInputValue('');
//         }
//     };
//     const next = () => {
//         navigate('/dashboard/Modal/Modalchat/');
//     };

//     return (
//         <div className='modal-chat-back'>
//             <div style={{ padding: '25px', paddingBottom: '0px' }}>
//                 {messages.map((message, index) => (
//                     <div key={index} className={message.isUser ? 'sender-msg' : 'reciver-msg'}>
//                         <div className='msg-border'>
//                             <h3>{message.text}</h3>
//                         </div>
//                         <div>
//                             <img style={{ filter: 'grayscale(1)' }} src={message.isUser ? require("../../Assets/images/chat-bot-icon-2.png") : require("../../Assets/images/chat-bot-icon-1.png")} alt='' />
//                         </div>
//                     </div>
//                 ))}
//                 <div ref={messagesEndRef} />
//             </div>
//             <div className='add-model'>
//                 <div className="input-container">
//                     <input
//                         type="text"
//                         className="chat-input"
//                         placeholder="Type your message..."
//                         value={inputValue}
//                         onChange={(e) => setInputValue(e.target.value)}
//                         onKeyPress={(e) => {
//                             if (e.key === 'Enter') {
//                                 sendMessage();
//                             }
//                         }}
//                     />
//                     {/* <button style={{ fontSize: '16px',marginRight:'5px' }} className="dashboard-btn" onClick={sendMessage}>Send</button> */}
//                     <button style={{ fontSize: '16px' }} className="dashboard-btn" onClick={next}>Create</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ModalCreate;

import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";

function ModalCreate() {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const messagesEndRef = useRef(null);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);

  function tokenHasExpired(token) {
    if (!token) {
      return true; // No token, consider it expired
    }
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds
      return decoded.exp < currentTime;
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // On error, consider the token expired
    }
  }

  useEffect(() => {
    if (tokenHasExpired(token)) {
      // Handle expired token
      console.log("Token has expired.");
      // Potentially redirect to login or refresh the token
    } else {
      // Token is valid
      console.log("Token is valid.");
    }
  }, [token]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const addQA = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/questionanswer/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: [{ question, answer }] }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: question, isUser: true },
          { text: answer, isUser: false },
        ]);
        setQuestion("");
        setAnswer("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Failed to send questions and answers:", error);
      toast.error("Failed to send questions and answers");
    }
  };

  const next = () => {
    navigate("/dashboard/Modal/Modalchat/");
  };
  const all = () => {
    navigate("/dashboard/Modal/ViewallQandA/");
  };

  return (
    <div className="modal-chat-back">
      <div
        className="add-model"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="input-container"
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your question..."
              style={{
                display: "block",
                margin: "10px auto",
                width: "100%",
                textAlign: "left",
                border: "1px solid #000",
                borderRadius: "100px",
              }}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <input
              type="text"
              className="chat-input"
              placeholder="Type your answer..."
              style={{
                display: "block",
                margin: "10px auto",
                width: "100%",
                textAlign: "left",
                border: "1px solid #000",
                borderRadius: "100px",
              }}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
          <div className="d-flex w-100 justify-content-center">
            <button
              style={{ fontSize: "16px", margin: "10px 5px" }}
              className="dashboard-btn"
              onClick={addQA}
            >
              Add Q & A
            </button>
            <button
              style={{ fontSize: "16px", margin: "10px 5px" }}
              className="dashboard-btn"
              onClick={next}
            >
              Next
            </button>
            <button
              style={{ fontSize: "16px", margin: "10px 5px" }}
              className="dashboard-btn"
              onClick={all}
            >
              See All Q & A
            </button>
          </div>
        </div>
      </div>
      {messages.length > 0 && (
        <div className="model-qa-box">
          <div className="model-qa-box-2">q & a chat</div>
          <div className="model-qa-box-1">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.isUser ? "sender-msg" : "reciver-msg"}
              >
                <div className="msg-border">
                  <h3>{message.text}</h3>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalCreate;
