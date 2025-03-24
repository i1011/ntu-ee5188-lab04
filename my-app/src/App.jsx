import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MessageBoard from "./message-board"
import HomePage from "./personal"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/message-board" element={<MessageBoard />} />
      </Routes>
    </Router>
  );
};

export default App;