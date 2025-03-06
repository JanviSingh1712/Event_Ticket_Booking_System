import { Routes, Route } from "react-router-dom";
import Navigation from "./users/components/Navigation";
import HomePage from "./screens/HomePage";
import "./App.css";
import Login from "./users/components/Login";
import SignUp from "./users/components/SignUp";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        {" "}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
