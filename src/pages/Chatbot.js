import React, { useState } from 'react';
import "../styles/chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        sender: 'user'
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botMessage = {
          content: generateBotMessage(inputValue),
          sender: 'bot'
        };
        setMessages([...messages, botMessage]);
      }, 500);
    }
  };

  const generateBotMessage = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case 'hello':
        return 'Hi! What type of wedding are you planning?';
        case 'hlo':
        return 'Hi! What type of wedding are you planning?';
        case 'hi':
        return 'Hi! What type of wedding are you planning?';
        case 'hii':
        return 'Hi! What type of wedding are you planning?';
      case 'traditional':
        return 'Great! Are you interested in any specific wedding destinations?';
      case 'desi':
        return 'Great! Are you interested in any specific wedding destinations?';
      case 'destination':
        return 'Great! Are you interested in any specific wedding destinations?';
      case 'small gathering':
        return 'Great! Are you interested in any specific wedding destinations?';
      case 'grand wedding':
        return 'Great! Are you interested in any specific wedding destinations?';
      case 'beach':
        return 'Lovely! Do you have a budget in mind for your wedding?';
      case 'goa':
        return 'Lovely! Do you have a budget in mind for your wedding?';  
      case 'jaisalmer':
        return 'Lovely! Do you have a budget in mind for your wedding?';
      case 'rishikesh':
        return 'Lovely! Do you have a budget in mind for your wedding?';
      case 'no':
        return 'Oh! So you want a local wedding & Do you have a budget in mind for your wedding?';
      case 'mountains':
        return 'Wonderful! We have various wedding packages available to suit different budgets. Please let us know your budget range.';
      default:
        return "You can call or email us for more information.";
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.content}
            </div>
          ))}
        </div>
        <form className="chatbot-form" onSubmit={handleMessageSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Send 'Hi' to chat!"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
