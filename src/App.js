import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventRegistrationForm from "./pages/Form.js";
import Homepage from "./pages/Homepage.js";
import Background from "./Components/Background.js";

const App = () => {
  return (
    <Router>
      <Background />
      <Routes>
        <Route path="/" element={<EventRegistrationForm />} />
        <Route path="/submitted" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default App;
