import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./ui/components/Header";
import Home from "./ui/pages/Home";
import ProjectPage from "./ui/pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
