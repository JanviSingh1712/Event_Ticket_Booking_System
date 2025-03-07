import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-112">
        <h2 className="mb-1 text-2xl font-semibold text-center">Signup</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Phone No</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded"
                placeholder="Your Phone"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="block mb-1 text-sm font-medium">Gender</label>
              <select className="w-full px-3 py-2 border rounded">
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
                className="w-full px-3 py-2 border rounded"
                placeholder="Age"
              />
            </div>
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Email ID</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Email"
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Your Password"
            />
          </div>

          <div className="mt-3">
            <label className="block mb-1 text-sm font-medium">OTP</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter OTP"
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
