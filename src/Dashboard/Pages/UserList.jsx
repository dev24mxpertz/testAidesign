import axios from "axios";
import { useSelector } from "react-redux";
import { Avatar } from "antd";
import React, { useEffect, useState } from "react";

const UserList = ({
  socket,
  users,
  onConversationSelect,
  onUserData,
  selectedsUserId,
}) => {
  // const [filteredUsers, setFilteredUsers] = useState(users);
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);
  const [conversations, setConversation] = useState([]);
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(true);
  const [usersdata, setusersdata] = useState([]);
  const [Userselected, setUserselected] = useState([]);
  const [selectedIdUser, setSelectedIdUser] = useState(selectedsUserId);

  console.log(selectedIdUser);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) || user.mobile.includes(query)
    );
    setConversation(filtered);
  };
  // useEffect(() => {
  //     setFilteredUsers(users);
  // }, [users]);
  useEffect(() => {
    const fetchConversations = async () => {
      const res = await fetch(
        `http://localhost:3000/api/conversation/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "applications/json",
          },
        }
      );
      const resData = await res.json();
      console.log("Fetched messages:", resData);
      console.log("resData :>> ", resData);
      setConversation(resData);
    };
    fetchConversations();
  }, [userId]);

  useEffect(() => {
    if (socket) {
      socket.on("getMessage", (newMessage) => {
        // Update the conversations state with the new message
        setConversation((prevConversations) => {
          const updatedConversations = prevConversations.map((conversation) => {
            if (conversation.conversationId === newMessage.conversationId) {
              return {
                ...conversation,
                messagesData: [...conversation.messagesData, newMessage],
              };
            }
            return conversation;
          });
          return updatedConversations;
        });
      });
    }
    return () => {
      // Cleanup the event listener
      // socket.off('getMessage');
    };
  }, [socket]);

  const sendDataToParent = (data) => {
    // console.log('Data received from UserList:', data);
    onUserData(data);
  };
  useEffect(() => {
    if (socket) {
      // Example of listening for an event
      socket.on("userConnected", (data) => {
        console.log("User connected:", data);
      });

      // Clean up function to remove event listener when component unmounts
      return () => {
        socket.off("userConnected");
      };
    }
  }, [socket]);

  // const handleConversationSelection = async (conversationId, userselectId, receiver, user) => {
  //     try {

  //         const userConversation = conversations.find(conversation => conversation.user._id === userselectId._id);

  //         if (userConversation) {
  //             // let resData;
  //             const receiverId = userselectId._id;
  //             const user = usersdata.find(user => user._id === userId);
  //             const res = await fetch(`http://localhost:3000/api/message/${conversationId}?senderId=${userId}&&receiverId=${receiverId}`, {
  //                 method: 'GET',
  //                 headers: {
  //                     'Content-Type': 'application/json'
  //                 }
  //             });

  //             resData = await res.json();

  //             console.log(userId);
  //             console.log(conversationId);
  //             // console.log(receiverId);

  //             // const resData = await res.json();
  //             const messages = resData.map(item => item.message);
  //             onConversationSelect(conversationId, userId, messages, receiver);
  //             // console.log(usersdata);
  //             // console.log(userselectId);
  //             setUserselected(userselectId);
  //             sendDataToParent(userselectId);
  //         } else {

  //         }

  //     } catch (error) {
  //         console.error('Error fetching messages:', error);
  //     }
  // };

  //     const handleConversationSelection = async (conversationId, userselectId, receiver, user) => {
  //     try {
  //         console.log('Conversations:', conversations);
  //         console.log('Userselect ID:', userselectId._id);

  //         let resData = null;

  //         const conversations = conversations.find(conversation =>
  //             conversation.members && conversation.members.includes(userselectId._id)
  //         );

  //         console.log('User conversation:', conversations);

  //         if (conversations) {
  //             const messages = conversations.messages;
  //             onconversationSelect(userselectId._id, userId, messages, conversations.receiver);
  //             setUserselected(userselectId);
  //             sendDataToParent(userselectId);
  //         } else {
  //             const receiverId = userselectId._id;
  //             const user = usersdata.find(user => user._id === userId);
  //             const res = await fetch(`http://localhost:3000/api/message/${conversationId}?senderId=${userId}&&receiverId=${receiverId}`, {
  //                 method: 'GET',
  //                 headers: {
  //                     'Content-Type': 'application/json'
  //                 }
  //             });

  //             resData = await res.json();

  //             console.log(userId);
  //             console.log(conversationId);

  //             if (resData) {
  //                 const messages = resData.map(item => item.message);
  //                 onConversationSelect(conversationId, userId, messages, receiver);
  //                 setUserselected(userselectId);
  //                 sendDataToParent(userselectId);
  //             }
  //         }
  //     } catch (error) {
  //         console.error('Error fetching messages:', error);
  //     }
  // };

  const handleConversationSelection = async (
    conversationId,
    userselectId,
    receiver,
    selectedsUserId
  ) => {
    try {
      console.log("Conversations:", conversations);
      console.log("Userselect ID:", selectedIdUser);

      let resData = null;

      const foundConversation = conversations.find(
        (conversation) => conversation.user._id === userselectId._id
      );

      console.log("User conversation:", foundConversation);

      if (foundConversation) {
        const messages = foundConversation.messages;
        onConversationSelect(conversationId, userId, messages, receiver);
        setUserselected(userselectId);
        sendDataToParent(userselectId);
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

        if (resData) {
          const messages = resData.map((item) => item.message);
        }
      }
      onConversationSelect(conversationId, userId, messages, receiver);
      setUserselected(userselectId);
      sendDataToParent(userselectId);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      console.log(userId);
      const response = await axios.get(
        `http://localhost:3000/get_userby_admin/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setusersdata(response.data.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  // console.log(messages)
  return (
    <>
      <div className="chatbot-header">
        <div className="chatbot-buttons">
          <button
            style={{
              border: "1px solid #000",
              padding: "3px 10px",
              borderRadius: "10px",
              backgroundColor: "dimgrey",
            }}
            className="chatbot-button"
            onClick={() => setShowChat(true)}
          >
            chat
          </button>
          <button
            style={{
              border: "1px solid #000",
              padding: "3px 10px",
              borderRadius: "10px",
              backgroundColor: "dimgrey",
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
          placeholder="Search here..."
          className="chatbot-search-input"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div>
          {showChat ? (
            <div>
              {conversations ? (
                <div className="chatbot-messages">
                  {conversations.length > 0 ? (
                    conversations.map((conversation) => {
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
              {usersdata ? (
                <div className="chatbot-messages">
                  {usersdata.length > 0 ? (
                    usersdata.map((user) => {
                      return (
                        <div
                          key={user.id}
                          className="chatbot-message"
                          onClick={
                            () => handleConversationSelection("new", user) // Pass null for conversationId for new conversation
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
    </>
  );
};

export default UserList;
