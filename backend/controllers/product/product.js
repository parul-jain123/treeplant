import Product from "../../models/Product.js";
import multer from "multer";
import path from "path";
import fs from "fs";

 const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the destination folder where images will be stored
    cb(null, 'public/image');
  },
  filename: (req, file, cb) => {
    // Set the file name to include the original name and extension
    cb(null,file.fieldname+ Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// // Middleware to serve static files (optional)
// app.use(express.static('uploads'));


// Create the upload route (POST request)

// Add product with image upload
const addProduct = async (req, res) => {
  // Handle image upload
  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        message: err.message || "Error uploading file",
      });
    }

    try {
      const {img, name, description, category, price } = req.body;

      // Ensure that img is set if the file is uploaded, else set it to null or a default value
      // const img = req.file ? `uploads/products/${req.file.filename}` : null;

      // Create the product with or without the image
      const productAdd = await Product.create({
        img,
        name,
        description,
        category,
        price,
      });

      if (!productAdd) {
        return res.status(500).json({
          message: "Server Error: Unable to add product",
        });
      }

      return res.status(201).json({
        message: "Product added successfully",
        data: productAdd,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  });
};

// Show all products with images
const showProduct = async (req, res) => {
  try {
    const products = await Product.find();

    if (products.length === 0) {
      return res.status(200).json({
        message: "No products available",
        data: [],
      });
    }

    return res.status(200).json({
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { addProduct, showProduct };

