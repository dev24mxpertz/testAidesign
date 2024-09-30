import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import axios from "axios";
import { Avatar, Button, Modal, Switch, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Picker from "emoji-picker-react";

function Chat() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [messagesData, setMessagesData] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [usersdata, setusersdata] = useState([]);
  const [Userselected, setUserselected] = useState(null);
  const [selectedsUserId, setSelectedsUserId] = useState(null);
  const [socket, setSocket] = useState(null);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [receiverID, setReceiverID] = useState(null);
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [showPicker, setShowPicker] = useState(false);
  const [filteredConversations, setFilteredConversations] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const fileInputRef = useRef(null);

  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  console.log(userId);

  const handleProfileClick = () => {
    setShowUserProfile(true);
  };

  const onEmojiClick = (emojiObject) => {
    if (emojiObject && emojiObject.emoji) {
      setInput((prevInput) => prevInput + emojiObject.emoji);
    }
    setShowPicker(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messagesData]);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    newSocket.on("connect", () => {
      newSocket.emit("addUser", userId);
    });
    newSocket.on("getMessage", (data) => {
      setMessagesData((prevMessages) => [
        ...prevMessages,
        { message: data.message, user: data.user },
      ]);
      showNotification(data.user.username, data.message);
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [userId]);

  useEffect(() => {}, [socket]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchConversations = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/conversation/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await res.json();
      setConversations(resData);
      setFilteredConversations(resData);
    } catch (error) {
      console.error("Error fetching conversations:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setReceiverID(selectedsUserId);
  }, [selectedsUserId]);

  const handleUserData = (data) => {
    const { id: suserid } = data;
    setSelectedsUserId(suserid);
  };

  const handleResize = () => {
    const isLargeScreen = window.innerWidth > 900;
    setShowChat(isLargeScreen);
  };

  const handleConversationSelect = async (conversationId, user) => {
    console.log("handleConversationSelect-------------");
    try {
      const messagesResponse = await fetch(
        `http://localhost:3000/api/message/${conversationId}`
      );
      const messagesData = await messagesResponse.json();
      const messages = messagesData.map((item) => item.message);
      setConversationId(conversationId);
      console.log("setMessagesData---------------");
      setMessagesData(messagesData);
      console.log(conversationId);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  console.log(messagesData, " ----------------- messageData --------- ");

  const sendDataToParent = (data) => {
    handleUserData(data);
  };

  const handleConversationSelection = async (
    conversationId,
    userselectId,
    receiver,
    messages,
    selectedsUserId
  ) => {
    try {
      console.log(conversationId);
      const foundConversation = conversations.find(
        (conversation) => conversation.user._id === userselectId._id
      );

      console.log("User conversation:", foundConversation);
      if (foundConversation) {
        const messages = foundConversation.messages;
        handleConversationSelect(conversationId, userId, messages, receiver);
        console.log("User conversation:", receiver);
        setUserselected(userselectId);
      } else {
        const receiverId = userselectId._id;
        const user = usersdata.find((user) => user._id === userId);
        const res = await fetch(
          `http://localhost:3000/api/message/${conversationId}?senderId=${userId}&&receiverId=${receiverId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const resData = await res.json();
        console.log(userId);
        console.log(conversationId);
        console.log(receiverId);
        setReceiverID(receiverId);
        if (resData) {
          const messages = resData.map((item) => item.message);
        }
      }
      handleConversationSelect(conversationId, userId, messages, receiver);
      setUserselected(userselectId);
      sendDataToParent(userselectId);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/getallusers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setusersdata(response.data.users);
      setFilteredUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  // const handleSendMessage = async () => {
  //   console.log("Sender ID:", userId);
  //   console.log("Conversation ID:", conversationId);
  //   console.log("Sending message:", input);
  //   console.log("Receiver ID:", receiverID);

  //   try {
  //     // Call the API to save the message data to the database
  //     if (receiverID !== null) {
  //       const response = await axios.post("http://localhost:3000/api/message", {
  //         conversationId: conversationId,
  //         senderId: userId,
  //         message: input,
  //         receiverId: receiverID,
  //       });
  //       console.log(response);
  //       if (response.status === 200) {
  //         console.log("Message saved to the database successfully");
  //         if (socket) {
  //           socket.emit("sendMessage", {
  //             conversationId: conversationId,
  //             senderId: userId,
  //             message: input,
  //             receiverId: receiverID,
  //           });

  //           console.log("Message sent via Socket.IO");
  //           console.log(input);
  //           setInput("");
  //         } else {
  //           console.error("Socket is not initialized.");
  //         }
  //       } else {
  //         console.error("Error saving message to the database:", response.data);
  //       }
  //     } else {
  //       message.error("Please Select the reciever first");
  //     }
  //   } catch (error) {
  //     console.error("Error saving message to the database:", error);
  //   }
  // };

  const handleSendMessage = async () => {
    try {
      if (receiverID) {
        const formData = new FormData();
        formData.append("conversationId", conversationId);
        formData.append("senderId", userId);
        formData.append("message", input);
        formData.append("receiverId", receiverID);
        if (file) {
          formData.append("file", file);
        }

        const response = await axios.post(
          "http://localhost:3000/api/message",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          if (socket) {
            socket.emit("sendMessage", {
              conversationId: conversationId,
              senderId: userId,
              message: input,
              receiverId: receiverID,
              file: file ? file.name : null,
            });

            setInput("");
            setFile(null);
          } else {
            console.error("Socket is not initialized.");
          }
        } else {
          console.error("Error saving message to the database:", response.data);
        }
      } else {
        message.error("Please select the receiver first");
      }
    } catch (error) {
      console.error("Error saving message to the database:", error);
    }
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchInput(searchValue);

    if (showChat) {
      const filtered = conversations.filter((conversation) =>
        conversation.user.username.toLowerCase().includes(searchValue)
      );
      setFilteredConversations(filtered);
    } else {
      const filtered = usersdata.filter((user) =>
        user.username.toLowerCase().includes(searchValue)
      );
      setFilteredUsers(filtered);
    }
  };

  const handlePopupOpen = () => {
    setIsModalVisible(true);
  };

  const Clear = () => {
    setInput("");
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const showNotification = (title, body) => {
    if (Notification.permission === "granted") {
      new Notification(title, { body });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, { body });
        }
      });
    }
  };

  useEffect(() => {
    fetchConversations();
  }, [userId]);

  const handleChatButtonClick = () => {
    setShowChat(true);
    fetchConversations(); // Fetch conversations when chat button is clicked
  };
  const modalContent = (
    <div className="chat_setting_wrapper">
      {Userselected ? (
        <>
          <div className="chat_profile">
            <Avatar size={125} src={Userselected.profileImageUrl || ""} />
          </div>
          <div>
            <h1 className="text-center mx-5">{Userselected.username || ""}</h1>
          </div>
          <div>
            <ul className="User_info_form">
              <li className="mb-3">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                <div>
                  <input
                    type="text"
                    value={Userselected.phone || ""}
                    readOnly
                  />
                </div>
              </li>
              <li className="mb-3">
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <div>
                  <input
                    type="text"
                    value={Userselected.email || ""}
                    readOnly
                  />
                </div>
              </li>
              <li className="mb-3">
                <span>
                  <i className="fa-solid fa-tag"></i>
                </span>
                <div>
                  <input
                    type="text"
                    value={Userselected.tags || "Add Tags"}
                    readOnly
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="DNDWrapper mt-4">
            <p>DND (Opt out of marketing Campaigns)</p>
            <Switch checked={Userselected.dnd || false} disabled />
            <p className="mt-3">Active Campaigns / Workflows</p>
            <button className="btn text-whit">
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>{" "}
              Add
            </button>
          </div>
          <div className="setting_actions">
            <Button
              className="dashboard-btn my-3"
              style={{ marginRight: "5px" }}
            >
              Create Opportunity
            </Button>
            <Button className="dashboard-btn">Schedule</Button>
          </div>
        </>
      ) : (
        <div className="text-black">No user selected</div>
      )}
    </div>
  );

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <div className=" h-100 d-flex flex-wrap col-12">
        <div className="chatbot-container">
          <div className="chatbot-container-1">
            <div className="chatbot-header">
              <div className="chatbot-buttons">
                <button
                  style={{
                    border: "1px solid #000",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  className="chatbot-button"
                  onClick={handleChatButtonClick}
                >
                  chat
                </button>
                <button
                  style={{
                    border: "1px solid #000",
                    padding: "3px 10px",
                    borderRadius: "10px",
                    color: "black",
                  }}
                  className="chatbot-button"
                  onClick={() => setShowChat(false)}
                >
                  contact
                </button>
              </div>
            </div>
            <div className="chatbot-search">
              <input
                type="text"
                value={searchInput}
                placeholder="Search here..."
                className="chatbot-search-input"
                onChange={handleSearch}
              />
            </div>
            <div>
              {showChat ? (
                <div>
                  {filteredConversations ? (
                    <div className="chatbot-messages">
                      {filteredConversations.length > 0 ? (
                        filteredConversations.map((conversation) => {
                          return (
                            <div
                              key={conversation.conversationId}
                              className="chatbot-message"
                              onClick={() =>
                                handleConversationSelection(
                                  conversation.conversationId,
                                  conversation.user
                                )
                              }
                            >
                              <div className="chatbot-avatar">
                                <Avatar
                                  src={conversation.user.profileImageUrl}
                                  alt={`${conversation.user.username}'s avatar`}
                                  style={{
                                    width: "35px",
                                    height: "35px",
                                    marginRight: "0px",
                                  }}
                                />
                              </div>
                              <div className="chatbot-message-content">
                                <div className="chatbot-message-header flex-column">
                                  <div className="chatbot-message-sender">
                                    {conversation.user.username}
                                  </div>
                                  <div className="chatbot-message-timestamp">
                                    {conversation.user.email}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div>Loading conversations...</div>
                      )}
                    </div>
                  ) : (
                    <div>Loading conversations...</div>
                  )}
                </div>
              ) : (
                <div className="chatbot-messages">
                  {filteredUsers ? (
                    <div className="chatbot-messages">
                      {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => {
                          return (
                            <div
                              key={user.id}
                              className="chatbot-message"
                              onClick={() =>
                                handleConversationSelection("new", user)
                              }
                            >
                              <div className="chatbot-avatar">
                                <Avatar
                                  src={user.profileImageUrl}
                                  alt={`${user.username}'s avatar`}
                                  style={{
                                    width: "35px",
                                    height: "35px",
                                    marginRight: "0px",
                                  }}
                                />
                              </div>
                              <div className="chatbot-message-content">
                                <div className="chatbot-message-header flex-column">
                                  <div className="chatbot-message-sender">
                                    {user.username}
                                  </div>
                                  <div className="chatbot-message-timestamp">
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div>Loading conversations...</div>
                      )}
                    </div>
                  ) : (
                    <div>Loading conversations...</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="message_screen_wrappe col-xxl-9 col-lg-8 col-12">
          <>
            {
              <>
                <div className=" col-12 chat_title_menu d-flex  align-items-center flex-row">
                  <div className="d-flex align-items-center flex-row w-100">
                    <button className="back-button m-0 btn btn-transparent text-whit border-0">
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </button>
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
                          const { message, user, file } = data;
                          const isuserId = user.id === userId;
                          return (
                            <div
                              className={`chat-message ${
                                isuserId ? "user-message" : "bot-message"
                              }`}
                              key={index}
                            >
                              <div className="message-content">
                                <div className="me-2 ms-2">{user.username}</div>
                                <div
                                  className={` message-text rounded-b-xl p-3 mb-6 ${
                                    isuserId ? "right-chat" : "left-chat"
                                  }`}
                                >
                                  {message}
                                  {
                                    file
                                    // && (
                                    //   <a href={`http://localhost:3000/uploads/${file}`} download>
                                    //     Download File
                                    //   </a>
                                    // )
                                  }
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="text-center text-lg font-semibold mt-24 text-black">
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
                        onChange={handleInputChange}
                        placeholder="Type a message"
                        name="postContent"
                        rows={4}
                        cols={40}
                      />
                    </div>
                    <div className="d-flex justify-content-between message_actions">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="emoji-picker">
                              <img
                                className="emoji-icon"
                                src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
                                onClick={() => setShowPicker((val) => !val)}
                              />
                              {showPicker && (
                                <Picker
                                  pickerStyle={{ width: "100%" }}
                                  onEmojiClick={onEmojiClick}
                                />
                              )}
                            </div>
                            <button className="m-0 btn btn-transparent text-whit border-0">
                              <i className="fa-solid fa-paperclip"></i>
                            </button>
                            {/* <label htmlFor="file-upload" className="m-0 btn btn-transparent text-whit border-0">
                              <i className="fa-solid fa-paperclip"></i>
                            </label> */}
                            {/* <input
                              type="file"
                              ref={fileInputRef}
                              style={{ display: "none" }}
                              onChange={handleFileChange}
                            /> */}
                            {/* <Button
                              onClick={() => fileInputRef.current && fileInputRef.current.click()}
                              style={{ marginRight: "10px" }}
                            >
                              📎
                            </Button>
                            {file && <span>{file.name}</span>} */}
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
                          onClick={() => handleSendMessage()}
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
        </div>
      </div>
    </>
  );
}

export default Chat;
