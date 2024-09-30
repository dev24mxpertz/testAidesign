import React from 'react';
import SenderImage from '../../Assets/images/chat-bot-icon-1.png';
import UserImage from '../../Assets/images/chat-bot-icon-2.png';

const chats = [
  {
    user: 'user',
    from: 'sender',
    text: 'Hello from the admin',
  },
  {
    user: 'bot',
    from: 'receiver',
    text: 'Hi there! ',
  },
  {
    user: 'user',
    from: 'sender',
    text: 'How are you?',
  },
  {
    user: 'bot',
    from: 'receiver',
    text: 'I am good, thanks!',
  },
];

function ChatScreen() {
  return (
    <div className="chat-message-screen">
      <div className="chat-messages">
        {chats.map((message, index) => (
          <div
            key={index}
            className={`chat-message ${message.from}`}
          >
            <div className="message-content">
              <img style={{ filter: 'grayscale(1)' }}
                src={message.user === 'user' ? UserImage : SenderImage}
                alt={message.user}
                className="avatar"
              />
              <div className="message-text">{message.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ChatScreen;
