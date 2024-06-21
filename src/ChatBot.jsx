import "./Chatbot.css";
import React, { useState } from "react";

// src/Chatbot.js

const ChatBot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! How can I help you today?" }
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { sender: "user", text: input }]);
            getBotResponse(input);
            setInput("");
        }
    };

    const getBotResponse = (userInput) => {
        // This is a simple mock response. Replace with actual logic or API call.
        let botResponse = "I'm not sure how to respond to that.";
        if (userInput.toLowerCase().includes("hello")) {
            botResponse = "Hi there!";
        } else if (userInput.toLowerCase().includes("how are you")) {
            botResponse = "I'm just a bot, but I'm doing great!";
        }
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { sender: "bot", text: botResponse }]);
        }, 500);
    };

    return (
        <div className="chatbot">
            <div className="chatbot-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`chatbot-message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div className="chatbot-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatBot;
