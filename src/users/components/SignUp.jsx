import React, { useState } from "react";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-6 text-2xl font-semibold text-center">Signup</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Address</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your address"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Gender</label>
            <select className="w-full px-3 py-2 border rounded">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Age</label>
            <input
              type="number"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your age"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Phone No</label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">OTP</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter OTP"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email ID</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email ID"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
