import React, { useState, useRef, useEffect } from 'react';
import { sendMessage as sendMessageLogic, getImage as getImageLogic } from './chatbotLogic'; 

function FloatingButton({ isChatOpen, setIsChatOpen }) {
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [companyLogo, setCompanyLogo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [messages, setMessages] = useState([{ text: "Hello! How can I assist you today?", isUser: false }]);
  const messagesEndRef = useRef(null);
  const chatBotContainerRef = useRef(null);

  const handleClick = () => {
    setIsTabOpen(!isTabOpen);
  };

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      console.log('Android device');
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      console.log('iOS device');
    } else if (/FBAN|FBAV/.test(userAgent)) {
      console.log('Facebook in-app browser');
    } else if (/Instagram/.test(userAgent)) {
      console.log('Instagram in-app browser');
    } else if (/Messenger/.test(userAgent)) {
      console.log('Messenger in-app browser');
    } else {
      console.log('Default case');
    }
  }, []);

  useEffect(() => {
    getImageLogic(setCompanyLogo, setCompanyName);
  }, []);

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [messages, isChatOpen]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // const handleSendMessage = async () => {
  //   if (typeof inputValue === 'string' && inputValue.trim() !== '') {
  //     const userQuestion = inputValue.trim().toLowerCase();
  
  //     setMessages(prevMessages => [...prevMessages, { text: userQuestion, isUser: true }]);
  //     setInputValue('');
  
  //     const messageObject = {
  //       Body: userQuestion,
  //     };
  
  //     try {
  //       const response = await sendMessageLogic(messageObject);

  //       console.log(response , "-------------ChatbotResponse----------");
  //       if (response.includes("An error occurred while processing your request")) {
  //         setShowForm(true);
  //       } else {
  //         setMessages(prevMessages => [...prevMessages, { text: response, isUser: false }]);
  //       }
  //     } catch (error) {
  //       console.error('Error sending message to WhatsApp:', error);
  //       setShowForm(true);
  //     }
  //     setInputValue('');
  //   }
  // };

const handleSendMessage = async () => {
  if (typeof inputValue === "string" && inputValue.trim() !== "") {
    const userQuestion = inputValue.trim().toLowerCase();

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userQuestion, isUser: true },
    ]);
    setInputValue("");

    const messageObject = {
      Body: userQuestion,
    };

    try {
      let response = await sendMessageLogic(messageObject);

      console.log(response, "-------------ChatbotResponse----------");

      let cleanedResponse = response;

      try {
        // Attempt to clean the response before setting it as a message
        cleanedResponse = response
          .replace(/[-*]/g, "") // Remove all dashes and asterisks
          .replace(/\s{2,}/g, " ") // Replace multiple spaces with a single space
          .trim(); // Trim extra spaces from start and end

        // Capitalize the first letter of each sentence.
        cleanedResponse = cleanedResponse
          .split(".")
          .map((sentence) => sentence.trim())
          .filter((sentence) => sentence.length > 0)
          .map(
            (sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1)
          )
          .join(". ");
      } catch (modificationError) {
        console.error(
          "Error modifying response message, using original response:",
          modificationError
        );
        // If any error occurs while modifying, fallback to original response
        cleanedResponse = response;
      }

      if (
        cleanedResponse.includes(
          "An error occurred while processing your request"
        )
      ) {
        setShowForm(true);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: cleanedResponse, isUser: false },
        ]);
      }
    } catch (error) {
      console.error("Error sending message to WhatsApp:", error);
      setShowForm(true);
    }
    setInputValue("");
  }
};





  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', { userName, userEmail });
    setShowForm(false);
  };
  
  return (
    <div>
      <button style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '90px',
        height: '90px',
        color: 'rgb(219, 185, 185)',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        zIndex: 1000,
      }}
      onClick={() => setIsChatOpen(!isChatOpen)}>
        <img style={{ width: '100%' , borderRadius:"50%" , border:"1px solid black"  }} src={require('../../../Assets/images/floting-chat-logo.png')} alt="Chat" />
      </button>
      {isChatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '105px',
          right: '65px',
          width: 'auto',
          height: 'auto',
          backgroundColor: 'transparent',
          boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
          zIndex: 999,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '25px'
        }}>
          <div>
            <div>
              <div ref={chatBotContainerRef}>
                <div style={{
                  borderRadius: '25px 25px 0px 0px',
                  backgroundColor: '#664ed5',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 20px',
                  borderLeft: '1px solid #828282',
                  borderRight: '1px solid #828282',
                  borderTop: '1px solid #828282'
                }}>
                  <div>
                    <img style={{ width: '65px', height: 'auto', borderRadius: '125px', filter: 'invert(1)' }} src={companyLogo} />
                  </div>
                  <div style={{ width: "100%", display: "flex", color: "white", justifyContent: "center", fontSize: '20px' }}>
                    <h2 style={{ width: "100%", display: "flex", color: "white", justifyContent: "center", fontSize: '20px' }}>{companyName}</h2>
                  </div>
                </div>
                <div style={{ padding: '25px', border: "1px solid #828282", backgroundColor: '#fff', padding: "25px", height: "40vh", overflow: "scroll", scrollbarWidth: "none", borderLeft: "1px solid #828282", BorderRight: "1px solid #828282" }}>
                  {messages.map((message, index) => (
                    <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'flex-end', padding: '20px 0px', flexDirection: message.isUser ? 'row' : 'row-reverse' }}>
                      <div>
                        <h3 style={{ border: "1px solid #828282", borderRadius: "31px", backgroundColor: "#664ed5", color: "white", margin: "0 10px", padding: "10px 20px", fontSize: "16px", width: '100%', maxWidth: '270px' }}>{message.text}</h3>
                      </div>
                      <div>
                        <img style={{  width: '100%', maxWidth: '45px' }} src={message.isUser ? "https://ik.imagekit.io/dev19/chat-bot-icon-3.png?updatedAt=1722432276743" : "https://ik.imagekit.io/dev19/chat-bot-icon-4.png?updatedAt=1722432276793"} alt='' />
                      </div>
                    </div>
                  ))}
                <div ref={messagesEndRef} />
                </div>
                <div style={{ borderRadius: "0px 0px 0px 25px", borderLeft: '1px solid #828282', borderRight: '1px solid #828282', borderTop: '1px solid #828282', backgroundColor: '#664ed5' }} className='model-footer-s2'>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "5px 25px" }}>
                    <input
                      type="text"
                      // className="chat-input"
                      style={{
                        width: '100%',
                        height: '50px',
                        padding: '15px',
                        marginRight: '10px',
                        color: 'white',
                        backgroundColor: 'transparent'
                      }}
                      onFocus={(e) => e.target.style.outline = 'none'}
                      onBlur={(e) => e.target.style.outline = 'none'}
                      placeholder="Type your message..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          handleSendMessage();
                        }
                      }}
                    />
                    <button style={{ fontSize: '16px', width: '100%', maxWidth: '80px', height: '35px', background: 'transparent', boxShadow: 'none', outline: 'none', border: '1px solid #828282', borderRadius: '35px', color: 'white' }} className="dashboard-btn" onClick={handleSendMessage}>Send</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FloatingButton;