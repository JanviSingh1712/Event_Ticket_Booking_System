import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const eventsData = {
  music: [
    {
      name: "Rock Fest 2025",
      date: "April 10, 2025",
      time: "7:00 PM",
      price: "$50",
      image: "https://source.unsplash.com/400x300/?concert",
    },
    {
      name: "Jazz Night",
      date: "May 15, 2025",
      time: "8:00 PM",
      price: "$40",
      image: "https://source.unsplash.com/400x300/?jazz",
    },
  ],
  workshops: [
    {
      name: "Photography Workshop",
      date: "April 20, 2025",
      time: "10:00 AM",
      price: "$30",
      image: "https://source.unsplash.com/400x300/?photography",
    },
    {
      name: "Coding Bootcamp",
      date: "May 5, 2025",
      time: "9:00 AM",
      price: "$20",
      image: "https://source.unsplash.com/400x300/?coding",
    },
  ],
  sports: [
    {
      name: "City Marathon",
      date: "June 10, 2025",
      time: "6:00 AM",
      price: "$15",
      image: "https://source.unsplash.com/400x300/?marathon",
    },
    {
      name: "Football Tournament",
      date: "June 25, 2025",
      time: "3:00 PM",
      price: "$25",
      image: "https://source.unsplash.com/400x300/?football",
    },
  ],
};

const Events = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const navigate = useNavigate();

  const handleRegister = (event) => {
    if (!isLoggedIn) {
      alert("Please login to proceed with registration.");
      navigate("/login");
    } else {
      const confirmPayment = window.confirm(
        `Event: ${event.name}\nDate: ${event.date}\nTime: ${event.time}\nPrice: ${event.price}\n\nChoose your payment method: OK for Cash on Delivery, Cancel for Online Payment.`
      );
      if (confirmPayment) {
        alert("Registration successful with Cash on Delivery!");
      } else {
        alert("Redirecting to online payment portal...");
      }
    }
  };

  const renderEvents = (category) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {eventsData[category].map((event, index) => (
        <div
          key={index}
          className="bg-white overflow-hidden shadow-xl rounded-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {event.name}
            </h3>
            <p className="text-gray-500 mb-2">Date: {event.date}</p>
            <p className="text-gray-500 mb-2">Time: {event.time}</p>
            <p className="text-gray-500 mb-4">Price: {event.price}</p>
            <button
              onClick={() => handleRegister(event)}
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Register Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        Upcoming Events
      </h2>

      <h3 className="text-3xl font-bold text-gray-700 mb-6">Music Events</h3>
      {renderEvents("music")}

      <h3 className="text-3xl font-bold text-gray-700 mt-12 mb-6">Workshops</h3>
      {renderEvents("workshops")}

      <h3 className="text-3xl font-bold text-gray-700 mt-12 mb-6">
        Sports Events
      </h3>
      {renderEvents("sports")}
    </div>
  );
};

export default Events;
