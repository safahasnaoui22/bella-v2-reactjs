import "./ChatButton.css";
import React from "react";

const ChatButton = () => {
    const messengerLink = 'https://m.me/161716967868124';
    
    

    return (
        <div className="chat">
            <a href={messengerLink} target="_blank" rel="noopener noreferrer" className="chat-button-link">
            <button className="chat-button">Chat </button>
        </a>
        </div>
        
    );
};

export default ChatButton;
