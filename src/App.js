import { Routes, Route } from "react-router-dom";
import Navigation from "./users/components/Navigation";
import HomePage from "./screens/HomePage";
import Events from "./screens/Events"; // Import your EventsPage
import Login from "./users/components/Login";
import SignUp from "./users/components/SignUp";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
