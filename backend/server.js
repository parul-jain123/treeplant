import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userroutes.js";
 import Auth from './routes/auth.js';
 import Contact from './routes/contact.js';
 import multer from "multer";
// import Product from "./models/Product.js";
//import { addProduct } from "./controllers/product/product.js";
//import Products from "../src/pages/ProductsPage.js";
 import productRouter from"./routes/productRouter.js"
import admin from "./routes/admin.js"

import path from "path";

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;  // Change to a different port, like 5001
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
app.use('/uploads', express.static('uploads'));

// Create the upload route (POST request)
app.post('/upload', upload.single('img'), (req, res) => {
  // Check if file is uploaded
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.send({
    message: 'File uploaded successfully!',
    file: req.file
  });
});


 connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Import routes

app.post('/upload',(req,res)=>{
 console.log(req.img)
})

// Use routes
app.use("/contact",Contact)
 app.use("/auth", Auth)
  app.use("/users", userRoutes);

  app.use("/api",productRouter);
  
  app.use("/admin",admin);




// Routes
app.get("/", (req, res) => {
  res.send("Hellotyhgryjhgfdfg, world!");
});

app.get("*", (req, res) => {
  res.redirect("/");
}
);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

