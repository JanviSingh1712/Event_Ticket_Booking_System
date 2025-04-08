// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./screens/HomePage";
import Events from "./screens/Events";
import SellYourTickets from "./components/SellYourTickets";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route
          path="/sell-tickets"
          element={<SellYourTickets isLoggedIn={isLoggedIn} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
