import React from "react";
import Navbar from "./components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Video from "./Pages/Video/video";
import Home from "./Pages/Home/home";
import { useState } from "react";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;