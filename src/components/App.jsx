
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/Keeper-app" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
