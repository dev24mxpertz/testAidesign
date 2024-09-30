// import React, { useEffect, useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { io } from 'socket.io-client'
// import axios from 'axios';
// import { Avatar, Button, Modal, Switch } from 'antd';
// import { UserOutlined } from '@ant-design/icons';

// function Chat() {
//     const [users, setUsers] = useState();
//     const [showUserProfile, setShowUserProfile] = useState(false);
//     const userId = useSelector(state => state.auth.userId);
//     console.log(userId)
//     const [showChat, setShowChat] = useState(false);
//     const [selectUserId, setselectUserId] = useState(null);
//     const token = useSelector(state => state.auth.token);
//     const [selectedConversation, setSelectedConversation] = useState(null);
//     const [messagesData, setmessagesData] = useState(null);
//     const [prevMessages, setprevMessages] = useState(null);
//     const [conversationId, setconversationId] = useState(null);
//     console.log(conversationId)
//     const handleProfileClick = () => {
//         setShowUserProfile(true);
//     };
//     const [selectedUser, setSelectedUser] = useState();
//     const [selectedUserId, setSelectedUserId] = useState(null);
//     const [selectedsUserId, setSelectedsUserId] = useState(null);
//     const [messages, setMessages] = useState([]);
//     console.log(messages)
//     const handleUserSelection = (userId) => {
//         setSelectedUserId(userId);
//         const user = users.find(user => user._id === userId);
//         setSelectedUser(user);
//         setShowChat(true);
//         setselectUserId(userId);
//     };
//     const [socket, setSocket] = useState(null)
//     console.log('Socket:', socket);

//     useEffect(() => {
//         const newSocket = io('http://localhost:3002');
//         console.log(newSocket)
//         newSocket.on('connect', () => {
//             newSocket.emit('addUser', userId);
//         });
//         setSocket(newSocket);
//     }, [userId]);
//     // useEffect(() => {
//     //     console.log('Socket:', socket);
//     //     if (socket) {
//     //         socket.on('getUsers', users => {
//     //             console.log('Active users:', users);
//     //         });
//     //     }
//     // }, [socket]);

//     useEffect(() => {
//         if (socket) {
//             socket.on('getMessage', (newMessage) => {
//                 console.log('Received message:', newMessage);
//                 setMessages(prevMessages => [...prevMessages, newMessage]);
//                 console.log('Updated messages state:', messages); // Log updated messages state
//             });
//         } else {
//             console.log('Socket not available. Connection might not be established.');
//         }
//         // // Clean up event listeners on component unmount
//         // return () => {
//         //     console.log('Cleaning up socket event listeners');
//         //     if (socket) {
//         //         socket.off('getMessage');
//         //     }
//         // };
//     }, [socket, messages]);

//     const handleUserData = (data) => {
//         const { id: suserid } = data;
//         setSelectedsUserId(suserid);
//     };
//     useEffect(() => {
//         window.addEventListener('resize', handleResize);
//         handleResize();
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//     const handleResize = () => {
//         const isLargeScreen = window.innerWidth > 900;
//         setShowChat(isLargeScreen);
//     };
//     const usersdataFromLocalStorage = localStorage.getItem('userselectId');
//     const userData = localStorage.getItem('userselectId');
//     const handleConversationSelect = async (conversationId, user) => {
//         try {
//             const messagesResponse = await fetch(`http://localhost:3000/api/message/${conversationId}`);
//             const messagesData = await messagesResponse.json();
//             const messages = messagesData.map(item => item.message);
//             setconversationId(conversationId);
//             setmessagesData(messagesData);
//             console.log(conversationId);
//             // if (socket) { // Check if socket is not null
//             //     socket.on('newMessage', (newMessage) => {
//             //         if (newMessage.conversationId === conversationId) {
//             //             setSelectedConversation(prevConversation => ({
//             //                 ...prevConversation,
//             //                 messagesData: [...prevConversation.messagesData, newMessage]
//             //             }));
//             //         }
//             //     });
//             // }
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         }
//     };
//     if (Array.isArray(messagesData)) {
//         messagesData.map((data, index) => {
//             const { message, user } = data;
//             return null;
//         });
//     }
//     const [conversations, setConversation] = useState([]);
//     const [usersdata, setusersdata] = useState([]);
//     const [Userselected, setUserselected] = useState([]);
//     useEffect(() => {
//         const fetchConversations = async () => {
//             const res = await fetch(`http://localhost:3000/api/conversation/${userId}`, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'applications/json',
//                 },
//             })
//             const resData = await res.json()
//             setConversation(resData)
//         }
//         fetchConversations()
//     }, [userId])

//     const sendDataToParent = (data) => {
//         handleUserData(data);
//     };

//     useEffect(() => {
//         if (socket) {
//             socket.on('userConnected', () => {
//                 // Handle user connection
//             });
//             return () => {
//                 socket.off('userConnected');
//             };
//         }
//     }, [socket]);

//     const handleConversationSelection = async (conversationId, userselectId, receiver, selectedsUserId) => {
//         try {
//             console.log(conversationId);
//             const foundConversation = conversations.find(conversation =>
//                 conversation.user._id === userselectId._id
//             );

//             console.log('User conversation:', foundConversation);
//             if (foundConversation) {
//                 const messages = foundConversation.messages;
//                 handleConversationSelect(conversationId, userId, messages, receiver);
//                 console.log('User conversation:', receiver);
//                 setUserselected(userselectId);
//             } else {
//                 const receiverId = userselectId._id;
//                 const user = usersdata.find(user => user._id === userId);
//                 const res = await fetch(`http://localhost:3000/api/message/${conversationId}?senderId=${userId}&&receiverId=${receiverId}`, {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     }
//                 });
//                 const resData = await res.json();
//                 console.log(userId);
//                 console.log(conversationId);
//                 console.log(receiverId);
//                 setReceiverID(receiverId)
//                 if (resData) {
//                     const messages = resData.map(item => item.message);
//                 }
//             }
//             handleConversationSelect(conversationId, userId, messages, receiver);
//             setUserselected(userselectId);
//             sendDataToParent(userselectId);
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         }
//     };
//     const fetchUsers = async () => {
//         try {
//             // console.log(userId)
//             const response = await axios.get(`http://localhost:3000/get_userby_admin/${userId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setusersdata(response.data.users);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//         }
//     };
//     useEffect(() => {
//         fetchUsers();
//     }, []);

//     // chatinterface
//     const messagesEndRef = useRef(null);
//     useEffect(() => {
//         scrollToBottom();
//     });

//     const scrollToBottom = () => {
//         if (messagesEndRef.current) {
//             messagesEndRef.current.scrollIntoView({ behavior: 'auto' });
//         }
//     };
//     useEffect(() => {
//         setReceiverID(selectedsUserId);
//     }, [selectedsUserId]);

//     const [input, setInput] = useState('');
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [receiverID, setReceiverID] = useState(null);
//     const [user, setUser] = useState(null);
//     // useEffect(() => {
//     //     setUser(userId);
//     //     socket?.emit('addUser', userId?.id);
//     //     socket?.on('getUsers', users => {
//     //     })
//     //     const handleMessage = (data) => {
//     //         setMessages(prevMessages => [...prevMessages, { user, message: data.message }]);
//     //     };
//     //     socket?.on('sendMessage', handleMessage);
//     //     return () => {
//     //         socket?.off('sendMessage', handleMessage);
//     //     };
//     // }, [socket, userId])

//     const handleButtonClick = () => {
//         console.log('Button clicked, calling handleSendMessage...');
//         handleSendMessage(); // Check if this function is being called
//     };
//     const handleSendMessage = async () => {
//         console.log('Sender ID:', userId);
//         console.log('Conversation ID:', conversationId);
//         console.log('Sending message:', input);
//         console.log('Receiver ID:', receiverID);

//         try {
//             // Call the API to save the message data to the database
//             const response = await axios.post('http://localhost:3000/api/message', {
//                 conversationId: conversationId,
//                 senderId: userId,
//                 message: input,
//                 receiverId: receiverID
//             });

//             // Check if the API call was successful
//             if (response.status === 200) {
//                 console.log('Message saved to the database successfully');

//                 // If the message is successfully saved to the database, emit it via Socket.IO
//                 if (socket) {
//                     // Emit message via Socket.IO
//                     socket.emit('sendMessage', {
//                         conversationId: conversationId,
//                         senderId: userId,
//                         message: input,
//                         receiverId: receiverID
//                     });

//                     console.log('Message sent via Socket.IO');
//                     console.log(input);

//                     // Clear input after sending
//                     setInput('');
//                 } else {
//                     console.error('Socket is not initialized.');
//                 }
//             } else {
//                 console.error('Error saving message to the database:', response.data);
//             }
//         } catch (error) {
//             console.error('Error saving message to the database:', error);
//         }
//     };

//     const handlePopupOpen = () => {
//         setIsModalVisible(true);
//     };

//     const Clear = () => {
//         setIsModalVisible(false);
//     }
//     const handleInputChange = (e) => {
//         setInput(e.target.value);
//     };

//     const modalContent = (
//         <div className='chat_setting_wrapper'>
//             <div className=''>
//                 <div className='chat_profile'>
//                     <Avatar size={125} src={''} />
//                 </div>
//                 <div>
//                     <h1 className='text-center mx-5'>{''}</h1>
//                 </div>
//                 <div>
//                     <ul className='User_info_form'>
//                         <li className='mb-3'>
//                             <span><i className="fa-solid fa-phone"></i></span>
//                             <div>
//                                 <input type="text" value={''} />
//                             </div>
//                         </li>
//                         <li className='mb-3'>
//                             <span><i className="fa-regular fa-envelope"></i></span>
//                             <div>
//                                 <input type="text" value={''} />
//                             </div>
//                         </li>
//                         <li className='mb-3'>
//                             <span><i className="fa-solid fa-tag"></i></span>
//                             <div>
//                                 <input type="text" defaultValue={'Add Tags'} />
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className='DNDWrapper mt-4'>
//                     <p>DND (Opt out of marketing Campaigns)</p>
//                     <Switch value={''} />
//                     <p className='mt-3'>Active Campaigns / Workflows</p>
//                     <button className='btn text-white'><span className=''><i className="fa-solid fa-plus"></i></span> Add</button>
//                 </div>

//                 <div className='setting_actions'>
//                     <Button className='dashboard-btn my-3' style={{ marginRight: '5px' }}>Create Opportunity</Button>
//                     <Button className='dashboard-btn'>Schedule</Button>
//                 </div>

//             </div>
//         </div>
//     );
//     return (
//         <>
//             <div className=' h-100 d-flex flex-wrap col-12'>
//                 <div className="chatbot-container">
//                     <div className="chatbot-container-1">
//                         {/* <UserList selectedsUserId={selectedsUserId} socket={socket} users={users} onSelectUser={handleUserSelection} onConversationSelect={handleConversationSelect} onUserData={handleUserData} /> */}
//                         <div className="chatbot-header">
//                             <div className="chatbot-buttons">
//                                 <button style={{ border: '1px solid #000', padding: '3px 10px', borderRadius: '10px', backgroundColor: 'dimgrey' }} className="chatbot-button" onClick={() => setShowChat(true)} >chat</button>
//                                 <button style={{ border: '1px solid #000', padding: '3px 10px', borderRadius: '10px', backgroundColor: 'dimgrey' }} className="chatbot-button" onClick={() => setShowChat(false)} >contact</button>
//                             </div>
//                         </div>
//                         <div className="chatbot-search">
//                             <input
//                                 type="text"
//                                 placeholder="Search here..."
//                                 className="chatbot-search-input"
//                             // onChange={handleSearch}
//                             />
//                         </div>
//                         <div>
//                             {showChat ? (
//                                 <div>
//                                     {conversations ? (
//                                         <div className="chatbot-messages">
//                                             {
//                                                 conversations.length > 0 ?
//                                                     conversations.map((conversation) => {
//                                                         return (
//                                                             <div key={conversation.conversationId} className="chatbot-message" onClick={() =>
//                                                                 handleConversationSelection(conversation.conversationId, conversation.user)}>
//                                                                 <div className="chatbot-avatar">
//                                                                     <Avatar src={conversation.user.profileImageUrl} alt={`${conversation.user.username}'s avatar`} style={{ width: '35px', height: '35px', marginRight: '0px' }} />
//                                                                 </div>
//                                                                 <div className="chatbot-message-content">
//                                                                     <div className="chatbot-message-header flex-column">
//                                                                         <div className="chatbot-message-sender">{conversation.user.username}</div>
//                                                                         <div className="chatbot-message-timestamp">{(conversation.user.email)}</div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         )
//                                                     }) : <div>Loading conversations...</div>
//                                             }
//                                         </div>
//                                     ) : (
//                                         <div>Loading conversations...</div>
//                                     )}
//                                 </div>
//                             ) : (
//                                 <div className="chatbot-messages">
//                                     {usersdata ? (
//                                         <div className="chatbot-messages">
//                                             {usersdata.length > 0 ?
//                                                 usersdata.map((user) => {
//                                                     return (
//                                                         <div key={user.id} className="chatbot-message" onClick={() =>
//                                                             handleConversationSelection('new', user) // Pass null for conversationId for new conversation
//                                                         }>
//                                                             <div className="chatbot-avatar">
//                                                                 <Avatar src={user.profileImageUrl} alt={`${user.username}'s avatar`} style={{ width: '35px', height: '35px', marginRight: '0px' }} />
//                                                             </div>
//                                                             <div className="chatbot-message-content">
//                                                                 <div className="chatbot-message-header flex-column">
//                                                                     <div className="chatbot-message-sender">{user.username}</div>
//                                                                     <div className="chatbot-message-timestamp">{user.email}</div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 }) : <div>Loading conversations...</div>
//                                             }
//                                         </div>
//                                     ) : (
//                                         <div>Loading conversations...</div>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     </div>
//                 </div>
//                 <div className='message_screen_wrappe col-xxl-9 col-lg-8 col-12'>
//                     {/* <ChatInterface socket={socket} selectedsUserId={selectedsUserId} onUserData={handleUserData} usersdata={users} conversation={selectedConversation} onSendMessage={handleSendMessage} onBack={handleBackButtonClick} userId={{ id: userId }} conversationId={selectedConversation?.conversationId} user={selectedUser} selectedUser={selectedUser} /> */}
//                     <>
//                         {(
//                             <>
//                                 <div className=' col-12 chat_title_menu d-flex  align-items-center flex-row'>
//                                     <div className='d-flex justify-content-between align-items-center flex-row w-100'>
//                                         <button className='back-button m-0 btn btn-transparent text-white border-0'>
//                                             <span><i className="fa-solid fa-arrow-left"></i></span>
//                                         </button>
//                                         <div>
//                                             {/* {username} */}
//                                         </div>
//                                     </div>
//                                     <div className='chat_title_menu_action d-flex justify-content-end align-items-center flex-row w-100'>
//                                         {window.innerWidth >= 2500 ? (
//                                             <div>
//                                                 {modalContent}
//                                             </div>
//                                         ) : (
//                                             <button className='m-0 btn btn-transparent text-white border-0' onClick={handlePopupOpen}>
//                                                 <UserOutlined />Open Profile
//                                             </button>
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div style={{ borderleft: '1px solid #828282' }} className="col-xxl-12 col-lg-12 col-md-12 col-12 chat-message-screen">
//                                     <div className="chat-message-screen">
//                                         <div className="chat-messages">
//                                             {messagesData && messagesData.length > 0 ? (
//                                                 messagesData.map((data, index) => {
//                                                     const { message, user } = data;
//                                                     const isuserId = user.id === userId;

//                                                     return (
//                                                         <div className={`chat-message ${isuserId ? 'user-message' : 'bot-message'}`} key={index}>
//                                                             <div className="message-content">
//                                                                 {/* <img
//                                                                     style={{ filter: '' }}
//                                                                     src={username === 'user' ? username : ''}
//                                                                     alt={''}
//                                                                     className="avatar"
//                                                                 /> */}
//                                                                 <div className='me-2 ms-2'>
//                                                                     {user.username}
//                                                                 </div>
//                                                                 <div
//                                                                     className={` message-text rounded-b-xl p-3 mb-6 ${isuserId ? 'right-chat' : 'left-chat'}`}
//                                                                 >
//                                                                     {message}
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     );
//                                                 })
//                                             ) : (
//                                                 <div className='text-center text-lg font-semibold mt-24'>No Messages</div>
//                                             )}
//                                             <div ref={messagesEndRef} />
//                                         </div>

//                                     </div>

//                                     <div className='Message_wrapper'>
//                                         <div className='message_input mb-3'>
//                                             <textarea
//                                                 value={input}
//                                                 onChange={(e) => setInput(e.target.value)}
//                                                 placeholder='Type a message'
//                                                 name="postContent"
//                                                 rows={4}
//                                                 cols={40} />
//                                         </div>
//                                         <div className='d-flex justify-content-between message_actions'>
//                                             <div className='d-flex align-items-center justify-content-center'>
//                                                 <div className='d-flex justify-content-between'>
//                                                     <div className='d-flex align-items-center justify-content-center'>
//                                                         <button className='m-0 btn btn-transparent text-white border-0'>

//                                                             <i className="fa-regular fa-face-smile"></i>
//                                                         </button>
//                                                         <button className='m-0 btn btn-transparent text-white border-0'>

//                                                             <i className="fa-solid fa-paperclip"></i>
//                                                         </button>

//                                                         <button className='m-0 btn btn-transparent text-white border-0'>

//                                                             <i className="fa-solid fa-minimize"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <button onClick={Clear} className='m-0 btn btn-transparent text-white border-0'>
//                                                     Clear
//                                                 </button>
//                                                 <button onClick={handleSendMessage} className='m-0 btn btn-transparent text-white border-0 send_button'>
//                                                     <span><i className="fa-regular fa-paper-plane"></i></span> Send
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <Modal title='User Profile' visible={isModalVisible} onCancel={() => setIsModalVisible(false)} footer={null} >
//                                     {modalContent}
//                                 </Modal>
//                             </>
//                         )
//                         }
//                     </>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Chat
