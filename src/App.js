import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar"; // Corrected case
import Footer from "./components/footer"; // Corrected case

// Page Imports
import Home from "./pages/Home";
import GalleryHub from "./pages/GalleryHub.js";
import GamingGallery from "./pages/GamingGallery.js";
import BlenderGallery from "./pages/BlenderGallery.js";
import VideoEdits from "./pages/VideoEdits.js";
import Projects from "./pages/Projects.js";
import About from "./pages/About";
import Terminal from "./pages/Terminal"; // <-- CHANGED

// We'll create these pages later
// import Projects from './pages/Projects';
// import About from './pages/About';
// import Terminal from './pages/Terminal';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            {/* This is the new part: Nested Creative Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/gallery" element={<GalleryHub />} />
            <Route path="/gallery/gaming" element={<GamingGallery />} />
            <Route path="/gallery/blender" element={<BlenderGallery />} />
            <Route path="/gallery/videos" element={<VideoEdits />} />{" "}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
