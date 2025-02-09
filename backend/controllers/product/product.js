import { Product } from "../../models/Product.js";
export const addProduct = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;
    const img = req.file ? `uploads/${req.file.filename}` : "";

    if (!name || !description || !category || !price || !img) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const product = await Product.create({ name, description, category, price, img });
    res.status(201).json({ message: "Product added successfully", data: product });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



export const showProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ message: "Products fetched successfully", data: products });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};
