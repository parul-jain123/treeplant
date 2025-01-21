
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // useNavigate for programmatic navigation

const AdminPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState(null); // Initialize as null, since it's a file input

  const navigate = useNavigate(); // For navigation after form submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send form data including file and text inputs
    const formData = new FormData();
    formData.append("image", img); // Append the image file
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    try {
      const response = await axios.post("http://localhost:4000/api/product", formData, {
        headers: {
          "Content-Type": "application/json", // Set to multipart/form-data for file uploads
        },
      });

      if (response.status === 200 || response.status === 201) {
        console.log("Plant added:", response.data);
        alert("Plant added successfully!");
        navigate("/ProductList");  // Navigate to product list page after successful addition
      } else {
        console.error("Error adding plant:", response.statusText);
        alert("Failed to add plant!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 my-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin</h2>
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Plant Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              onChange={e => setImg(e.target.files[0])} 
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
          </div>

          {/* Plant Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Plant Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)} 
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter plant name"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={e => setDescription(e.target.value)}  
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
              placeholder="Enter plant description"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={e => setCategory(e.target.value)} 
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              required
            >
              <option value="">Select Category</option>
              <option value="Flower">Flower</option>
              <option value="Cactus">Cactus</option>
              <option value="Herb">Herb</option>
              <option value="Tree">Tree</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={e => setPrice(e.target.value)}  
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              placeholder="Enter plant price"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200"
          >
            Add Plant
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
