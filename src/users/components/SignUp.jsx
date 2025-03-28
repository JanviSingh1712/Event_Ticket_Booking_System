import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    gender: "",
    age: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/signup",
        formData
      );
      alert(response.data.message);
      navigate("/login"); // Redirect to login on success
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-112">
        <h2 className="mb-1 text-2xl font-semibold text-center">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone No</label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Phone"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="block mb-1 text-sm font-medium">Gender</label>
              <select
                name="gender"
                className="w-full px-3 py-2 border rounded"
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Age</label>
              <input
                type="number"
                name="age"
                className="w-full px-3 py-2 border rounded"
                placeholder="Age"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Email ID</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Password"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Signup
          </button>

          <p className="mt-3 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
