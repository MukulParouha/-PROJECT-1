import React, { useState } from "react";

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    franchiseType: "",
    name: "",
    mobile: "",
    email: "",
    address: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // You can integrate form submission logic here
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Franchise Enquiry Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Select Franchise Type</label>
          <select
            name="franchiseType"
            value={formData.franchiseType}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          >
            <option value="">-- Select One --</option>
            <option value="Gym">Gym</option>
            <option value="Mart">Mart</option>
            <option value="Salon">Salon</option>
            <option value="Food & Restaurant">Food & Restaurant</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Mobile</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FranchiseForm;


