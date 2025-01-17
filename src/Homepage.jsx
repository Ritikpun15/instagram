import React from "react";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Explore from "./components/Explore";
import Message from "./components/Message";
import Reels from "./components/Reels";

function Homepage() {
  return (
    <>
      <div className="bg-black text-white font-mukta">
        <BrowserRouter>
          <div className="flex">
            <div className="w-1/6">
              <Navbar />
            </div>
            <div className="w-5/6 h-full bg-black">
              <Routes>
                <Route path="/" element={<Timeline />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/message" element={<Message />} />
                <Route path="/reels" element={<Reels />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default Homepage;
