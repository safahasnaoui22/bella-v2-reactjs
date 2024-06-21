import "./App.css";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');

    // Function to send message to backend and receive response
    const sendMessage = async () => {
        if (inputMessage.trim() === '') return;

        // Add user message to state
        setMessages(prevMessages => [
            ...prevMessages,
            { text: inputMessage, sender: 'user' }
        ]);

        // Send message to backend
        try {
            const response = await axios.get(`/chat?message=${encodeURIComponent(inputMessage)}`);
            const botResponse = response.data.botResponse;

            // Add bot response to state
            setMessages(prevMessages => [
                ...prevMessages,
                { text: botResponse, sender: 'bot' }
            ]);

            // Clear input field
            setInputMessage('');
        } catch (error) {
            console.error('Error sending message to backend:', error);
        }
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    // Function to handle pressing Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div className="App">
            <h1>Chatbot Demo</h1>
            <div className="chat-container">
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <div className="message-input-container">
                    <input
                        type="text"
                        className="message-input"
                        placeholder="Type your message..."
                        value={inputMessage}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button className="send-button" onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default App;
