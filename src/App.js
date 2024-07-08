import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Video from "./components/Video";
import { useState } from "react";

function App() {
  const [menuBar, setMenuBar] = useState(true);

  return (
    <div className="App">
      <Navbar setMenuBar={setMenuBar} />
      <Routes>
        <Route path="/" element={<Home menuBar={menuBar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
