import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/user/profile", {
          headers: { Authorization: token },
        });
        setUser(response.data.user);
        setEvents(response.data.events);
      } catch (error) {
        console.error("Error fetching data", error);
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <button
        className="bg-red-500 text-white px-4 py-2 mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
      <h2 className="text-xl font-semibold mt-6">Registered Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
