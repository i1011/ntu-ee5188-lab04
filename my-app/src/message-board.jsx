import React, { useState } from "react";

const MessageBoard = () => {
  const [messages, setMessages] = useState([
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    const newMsg = { id: messages.length + 1, username: username || "Anonymous", text: newMessage };
    setMessages([newMsg, ...messages]);
    setNewMessage("");
    setUsername("");
  };

  return (
    <div className="min-h-screen bg-gray-700 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">網路攻防實習</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#message-board" className="text-gray-300 hover:text-white">Chat</a>
          <span className="text-yellow-400">參與人數 {messages.length}</span>
          <a href="#login" className="text-gray-300 hover:text-white">Login</a>
          <a href="#signup" className="text-gray-300 hover:text-white">Sign Up</a>
        </div>
      </nav>

      {/* Message Board */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Your Name (Optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 mr-2 text-black border rounded"
          />
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="p-2 text-black border rounded"
          />
          <button type="submit" className="ml-2 p-2 bg-blue-500 rounded">Send</button>
        </form>

        {messages.map((msg) => (
          <div key={msg.id} className="flex items-center bg-teal-500 p-4 mb-2 rounded">
            {msg.avatar && <img src={msg.avatar} alt="avatar" className="w-10 h-10 mr-4 rounded-full" />}
            <div>
              <strong>{msg.username}</strong>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageBoard;