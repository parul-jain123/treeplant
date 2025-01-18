import Product from "../../models/Product.js";

const addProduct = async (req, res) => {
  try {
    const { name, description, category, price } = req.body;

    const productAdd = await Product.create({
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
};

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
  

export {addProduct, showProduct}