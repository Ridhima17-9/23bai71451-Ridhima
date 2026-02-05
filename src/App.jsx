import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/landing";

const App = () => {
  return (
    <>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
