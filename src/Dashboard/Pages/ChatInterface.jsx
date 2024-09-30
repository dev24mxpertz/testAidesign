import axios from "axios";
import { Avatar, Button, Modal, Switch } from "antd";
import React, { useState, useRef, useEffect } from "react";
import { UserOutlined } from "@ant-design/icons";

const ChatInterface = ({
  socket,
  conversation,
  onUserData,
  onBack,
  currentUser,
  selectedsUserId,
}) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };
  // console.log(selectedsUserId);working

  const [input, setInput] = useState("https://www.mxpertz.com");
  const [messages, setMessages] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [receiverID, setReceiverID] = useState(null);
  console.log(messages);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(currentUser);
    socket?.emit("addUser", currentUser?.id);
    socket?.on("getUsers", (users) => {
      console.log("activeUsers :>>".users);
    });

    const handleMessage = (data) => {
      console.log("Received message:", data);
      setMessages((prevMessages) => [
        ...prevMessages,
        { user, message: data.message },
      ]);
    };

    if (socket) {
      socket.on("getMessage", (messagesData) => {
        console.log("Received message:", messagesData);
        setMessages(messagesData);
      });
    }

    socket?.on("sendMessage", handleMessage);

    return () => {
      // Clean up event listeners
      socket?.off("sendMessage", handleMessage);
    };
  }, [socket, currentUser]);

  useEffect(() => {
    if (socket) {
      socket.on("getMessage", (newMessage) => {
        if (newMessage.conversationId === conversation.conversationId) {
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        }
      });
    }
    return () => {
      // Clean up event listener
      // socket.off('getMessage');
    };
  }, [socket, conversation]);
  // const handleUserData = (data) => {
  //     // Do something with the data received from the UserList component
  //     console.log('Data received from UserList:', data);
  //     // Update the state or perform any other actions as needed
  // };

  useEffect(() => {
    setReceiverID(selectedsUserId);
  }, [selectedsUserId]);

  if (!conversation) {
    return <div>Loading conversation...</div>;
  }

  // Destructure conversation data
  const { conversationId, messagesData } = conversation;
  // console.log(conversation);

  messagesData.map((data, index) => {
    const { message, user } = data;
    // Rest of the code remains the same
    return null;
  });
  // const handleSendMessage = () => {
  //     if (input.trim() === '') return;
  //     onSendMessage(input);
  //     setInput('');
  // };
  const handleSendMessage = async () => {
    console.log("Sender ID:", currentUser.id);
    console.log("Conversation ID:", conversationId);
    console.log("Message:", input);
    console.log("Receiver ID:", receiverID);

    try {
      socket?.emit("sendMessage", {
        conversationId: conversationId,
        senderId: currentUser.id,
        message: input,
        receiverId: receiverID,
      });
      console.log("Message sent via Socket.IO");

      const response = await axios.post("http://localhost:3000/api/message", {
        conversationId: conversationId, // Using conversationId from props
        senderId: currentUser.id, // Assuming you have currentUser object with id
        message: input,
        receiverId: receiverID,
      });

      // console.log('Message sent successfully');
      socket.emit("sendMessage", input);
      setInput("");
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response.data);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const handlePopupOpen = () => {
    setIsModalVisible(true);
  };

  const Clear = () => {
    setIsModalVisible(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const modalContent = (
    <div className="chat_setting_wrapper">
      <div className="">
        <div className="chat_profile">
          <Avatar size={125} src={""} />
        </div>
        <div>
          <h1 className="text-center mx-5">{""}</h1>
        </div>
        <div>
          <ul className="User_info_form">
            <li className="mb-3">
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
              <div>
                <input type="text" value={""} />
              </div>
            </li>
            <li className="mb-3">
              <span>
                <i className="fa-regular fa-envelope"></i>
              </span>
              <div>
                <input type="text" value={""} />
              </div>
            </li>
            <li className="mb-3">
              <span>
                <i className="fa-solid fa-tag"></i>
              </span>
              <div>
                <input type="text" defaultValue={"Add Tags"} />
              </div>
            </li>
          </ul>
        </div>
        <div className="DNDWrapper mt-4">
          <p>DND (Opt out of marketing Campaigns)</p>
          <Switch value={""} />
          <p className="mt-3">Active Campaigns / Workflows</p>
          <button className="btn text-whit">
            <span className="">
              <i className="fa-solid fa-plus"></i>
            </span>{" "}
            Add
          </button>
        </div>

        <div className="setting_actions">
          <Button className="dashboard-btn my-3" style={{ marginRight: "5px" }}>
            Create Opportunity
          </Button>
          <Button className="dashboard-btn">Schedule</Button>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {
        <>
          <div className=" col-12 chat_title_menu d-flex  align-items-center flex-row">
            <div className="d-flex justify-content-between align-items-center flex-row w-100">
              <button
                className="back-button m-0 btn btn-transparent text-whit border-0"
                onClick={onBack}
              >
                <span>
                  <i className="fa-solid fa-arrow-left"></i>
                </span>
              </button>
              <div>{/* {username} */}</div>
            </div>
            <div className="chat_title_menu_action d-flex justify-content-end align-items-center flex-row w-100">
              {window.innerWidth >= 2500 ? (
                <div>{modalContent}</div>
              ) : (
                <button
                  className="m-0 btn btn-transparent text-whit border-0"
                  onClick={handlePopupOpen}
                >
                  <UserOutlined />
                  Open Profile
                </button>
              )}
            </div>
          </div>
          <div
            style={{ borderleft: "1px solid #828282" }}
            className="col-xxl-12 col-lg-12 col-md-12 col-12 chat-message-screen"
          >
            <div className="chat-message-screen">
              <div className="chat-messages">
                {messagesData && messagesData.length > 0 ? (
                  messagesData.map((data, index) => {
                    const { message, user } = data;
                    const isCurrentUser = user.id === currentUser.id;

                    return (
                      <div
                        className={`chat-message ${
                          isCurrentUser ? "user-message" : "bot-message"
                        }`}
                        key={index}
                      >
                        <div className="message-content">
                          {/* <img
                                                        style={{ filter: '' }}
                                                        src={username === 'user' ? username : ''}
                                                        alt={''}
                                                        className="avatar"
                                                    /> */}
                          <div className="me-2 ms-2">{user.username}</div>
                          <div
                            className={` message-text rounded-b-xl p-3 mb-6 ${
                              isCurrentUser ? "right-chat" : "left-chat"
                            }`}
                          >
                            {message}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center text-lg font-semibold mt-24">
                    No Messages
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            <div className="Message_wrapper">
              <div className="message_input mb-3">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message"
                  name="postContent"
                  rows={4}
                  cols={40}
                />
              </div>
              <div className="d-flex justify-content-between message_actions">
                <div className="d-flex align-items-center justify-content-center">
                  <div className="d-flex justify-content-between">
                    {/* <div className='d-flex align-items-center justify-content-center message_type'>
                                    <button className=' btn btn-transparent text-whit border-0'>SMS</button>
                                    <button className='btn btn-transparent text-whit border-0'>Email</button>
                                </div> */}
                    <div className="d-flex align-items-center justify-content-center">
                      <button className="m-0 btn btn-transparent text-whit border-0">
                        <i className="fa-regular fa-face-smile"></i>
                      </button>
                      <button className="m-0 btn btn-transparent text-whit border-0">
                        <i className="fa-solid fa-paperclip"></i>
                      </button>

                      <button className="m-0 btn btn-transparent text-whit border-0">
                        <i className="fa-solid fa-minimize"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={Clear}
                    className="m-0 btn btn-transparent text-whit border-0"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleSendMessage}
                    className="m-0 btn btn-transparent text-whit border-0 send_button"
                  >
                    <span>
                      <i className="fa-regular fa-paper-plane"></i>
                    </span>{" "}
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal
            title="User Profile"
            visible={isModalVisible}
            onCancel={() => setIsModalVisible(false)}
            footer={null}
          >
            {modalContent}
          </Modal>
        </>
      }
    </>
  );
};

export default ChatInterface;
