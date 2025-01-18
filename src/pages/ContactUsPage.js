

import React, { useState } from 'react';
import axios from 'axios';
// import { API_BASE_URL } from '../config';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userMessage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4001/contact//contact`, formData);
     console.log(response.data.userMessage);
      alert('send message!');
    } catch (error) {
      console.error(error);
      alert('Failed to send message!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <form onSubmit={handleContact} className="space-y-4">
          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name="userName"
              type="text"
              placeholder="Your Name"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="userEmail"
              type="email"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="userMessage" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="userMessage"
              placeholder="Your Message"
              value={formData.userMessage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
