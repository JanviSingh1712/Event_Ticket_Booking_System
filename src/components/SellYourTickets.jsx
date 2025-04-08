import React, { useState } from "react";

const SellYourTickets = () => {
  const [image, setImage] = useState(null);
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");

  const handlePriceChange = (e) => {
    const price = parseFloat(e.target.value);
    setOriginalPrice(price);
    if (!isNaN(price)) {
      const discounted = price - price * 0.1;
      setDiscountedPrice(discounted.toFixed(2));
    } else {
      setDiscountedPrice("");
    }
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image || !originalPrice) {
      alert("Please fill in all fields.");
      return;
    }

    // Example backend call placeholder
    console.log("Ticket Image:", image);
    console.log("Original Price:", originalPrice);
    console.log("Discounted Price:", discountedPrice);

    alert("Ticket submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Sell Your Ticket</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">
            Upload Ticket Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Original Price ($)</label>
          <input
            type="number"
            value={originalPrice}
            onChange={handlePriceChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">
            Selling Price (10% off)
          </label>
          <input
            type="text"
            value={discountedPrice}
            readOnly
            className="w-full border rounded p-2 bg-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default SellYourTickets;
