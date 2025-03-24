import React from "react";
import viteLogo from '/vite.svg'

const PersonalPage = () => {
  return (
    <div className="min-h-screen bg-gray-700 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="text-lg font-semibold">網路攻防實習</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">About</a>
          <a href="/message-board" className="text-gray-300 hover:text-white">Chat</a>
          <span className="text-yellow-400">參與人數 5</span>
          <a href="#login" className="text-gray-300 hover:text-white">Login</a>
          <a href="#signup" className="text-gray-300 hover:text-white">Sign Up</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <img
          src={viteLogo}
          className="w-40 h-40"
        />
        <p className="mt-2">國立臺灣大學 資訊工程學系研究所</p>
        <p className="mt-1">鄭忠宜</p>
      </div>

      {/* Welcome Section */}
      <div className="text-center mt-8">
        <h1 className="text-yellow-400 text-2xl font-bold">Welcome!</h1>
        <p className="mt-2">
          嗨！我是台大的學生，目前就讀資工究所
          <br />
          這個網頁由 ChatGPT 產生
          <br />
          哆啦A夢不是我的頭貼
        </p>
      </div>
    </div>
  );
};

export default PersonalPage;
