// import React, { createContext, useContext, useState } from 'react';

// const ChatContext = createContext();

// export const useChat = () => useContext(ChatContext);

// export const ChatProvider = ({ children }) => {
//   const [messages, setMessages] = useState([]);
//   const [chatOpen, setChatOpen] = useState(false); // Added state for chat open/close
//   const [userResponse, setUserResponse] = useState('');

//   const addMessage = (message) => {
//     setMessages((prevMessages) => [...prevMessages, message]);
//   };
//   const updateUserResponse = (response) => {
//     // Implement your logic for updating user response here
//     // For example, you can set it in the state or perform any other action
//     console.log('User response:', response);
//   };

//   // Include chatOpen and setChatOpen in the context value
//   return (
//     <ChatContext.Provider value={{ messages, addMessage, chatOpen, setChatOpen, updateUserResponse,userResponse, setUserResponse }}>
//       {children}
//     </ChatContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  const [userMessages, setUserMessages] = useState([]);
  
  const addUserMessage = (message) => {
    setUserMessages((prevMessages) => [...prevMessages, message]);
  };

  const addBotMessage = (message) => {
    setUserMessages((prevMessages) => [...prevMessages, { text: message, isUser: false }]);
  };

  return (
    <ChatContext.Provider value={{ userMessages, addUserMessage, addBotMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

// import React, { createContext, useContext, useState } from 'react';

// const ChatContext = createContext();

// export const ChatProvider = ({ children }) => {
//     const [messages, setMessages] = useState([]);

//     // Simulate getting a bot response
//     const getBotResponse = (userInput) => {
//         // Example: Echo the user input or provide a default response
//         return `Bot: ${userInput}` || "Bot: I'm not sure how to respond to that.";
//     };

//     return (
//         <ChatContext.Provider value={{ messages, setMessages, getBotResponse }}>
//             {children}
//         </ChatContext.Provider>
//     );
// };

// // Custom hook to use chat context
// export const useChat = () => useContext(ChatContext);
