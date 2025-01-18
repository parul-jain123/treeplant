


// import React, { useState } from "react";

// const AdminPage = () => {
//   const [plantDetails, setPlantDetails] = useState({
//     image: "",
//     imageName: "",
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPlantDetails({ ...plantDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPlantDetails({
//         ...plantDetails,
//         image: URL.createObjectURL(file),
//         imageName: file.name, // Store the original file name
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     

    

//     console.log(plantDetails);
//     setPlantDetails({
//       image: "",
//     imageName: "",
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//     })
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 my-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Image Upload */}
//           <div className="mb-4">
//             <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
//               Plant Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               onChange={handleImageChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               required
//             />
//             {plantDetails.image && (
//               <div className="mt-4">
//                 <img
//                   src={plantDetails.image}
//                   alt="Plant preview"
//                   className="w-32 h-32 rounded-md"
//                 />
//                 <p className="text-gray-600 mt-2 text-sm">{plantDetails.imageName}</p> {/* Display file name */}
//               </div>
//             )}
//           </div>

//           {/* Plant Name */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               Plant Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={plantDetails.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               placeholder="Enter plant name"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={plantDetails.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
//               placeholder="Enter plant description"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Category */}
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={plantDetails.category}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               required
//             >
//               <option value="">Select Category</option>
//               <option value="Flower">Flower</option>
//               <option value="Cactus">Cactus</option>
//               <option value="Herb">Herb</option>
//               <option value="Tree">Tree</option>
//             </select>
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
//               Price ($)
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={plantDetails.price}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               placeholder="Enter plant price"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200"
//           >
//             Add Plant
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;



// import React, { useState } from "react";

// const AdminPage = () => {
//   const [plantDetails, setPlantDetails] = useState({
//     image: null,
//     name: "",
//     description: "",
//     category: "",
//     price: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPlantDetails({ ...plantDetails, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPlantDetails({
//         ...plantDetails,
//         image: file, // Save the file object
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("image", plantDetails.image);
//     formData.append("name", plantDetails.name);
//     formData.append("description", plantDetails.description);
//     formData.append("category", plantDetails.category);
//     formData.append("price", plantDetails.price);

//     try {
//       const response = await fetch("http://localhost:4001/api/product", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log("Plant added:", result);
//         alert("Plant added successfully!");

//         // Reset form
//         setPlantDetails({
//           image: null,
//           name: "",
//           description: "",
//           category: "",
//           price: "",
//         });
//       } else {
//         console.error("Error adding plant:", response.statusText);
//         alert("Failed to add plant!");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred!");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 my-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Image Upload */}
//           <div className="mb-4">
//             <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
//               Plant Image
//             </label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               onChange={handleImageChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               required
//             />
//             {plantDetails.image && (
//               <div className="mt-4">
//                 <p className="text-gray-600 mt-2 text-sm">{plantDetails.image.name}</p>
//               </div>
//             )}
//           </div>

//           {/* Plant Name */}
//           <div className="mb-4">
//             <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
//               Plant Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={plantDetails.name}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               placeholder="Enter plant name"
//               required
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-4">
//             <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
//               Description
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               value={plantDetails.description}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300 resize-none"
//               placeholder="Enter plant description"
//               rows="4"
//               required
//             ></textarea>
//           </div>

//           {/* Category */}
//           <div className="mb-4">
//             <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
//               Category
//             </label>
//             <select
//               id="category"
//               name="category"
//               value={plantDetails.category}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               required
//             >
//               <option value="">Select Category</option>
//               <option value="Flower">Flower</option>
//               <option value="Cactus">Cactus</option>
//               <option value="Herb">Herb</option>
//               <option value="Tree">Tree</option>
//             </select>
//           </div>

//           {/* Price */}
//           <div className="mb-4">
//             <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
//               Price ($)
//             </label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               value={plantDetails.price}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
//               placeholder="Enter plant price"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white font-medium py-2 rounded-md hover:bg-green-600 transition duration-200"
//           >
//             Add Plant
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminPage;


import React, { useState } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from 'react-router-dom';
const AdminPage = () => {
  const [plantDetails, setPlantDetails] = useState({
    //image: null,
    name: "",
    description: "",
    category: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlantDetails({ ...plantDetails, [name]: value });
  };
  const navigate = useNavigate();

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPlantDetails({
  //       ...plantDetails,
  //       image: file, // Save the file object
  //     });
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", plantDetails.name);
    formData.append("description", plantDetails.description);
    formData.append("category", plantDetails.category);
    formData.append("price", plantDetails.price);
  
    try {
      const response = await axios.post("http://localhost:4000/api/product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 200 || response.status === 201) {
        console.log("Plant added successfully:", response.data);
        alert("Plant added successfully!");
        setPlantDetails({ name: "", description: "", category: "", price: "" });
        navigate("/");
      } else {
        console.error("Failed to add plant:", response);
        alert("Failed to add plant!");
      }
    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert("An error occurred!");
    }
  };
  
 


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 my-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Admin</h2>
        <form onSubmit={handleSubmit}>
          {/* Image Upload */}
          {/* <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
              Plant Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-gray-300"
              required
            />
            {plantDetails.image && (
              <div className="mt-4">
                <p className="text-gray-600 mt-2 text-sm">{plantDetails.image.name}</p>
              </div>
            )}
          </div> */}

          {/* Plant Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Plant Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={plantDetails.name}
              onChange={handleChange}
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
              value={plantDetails.description}
              onChange={handleChange}
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
              value={plantDetails.category}
              onChange={handleChange}
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
              value={plantDetails.price}
              onChange={handleChange}
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
