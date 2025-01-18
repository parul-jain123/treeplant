import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userroutes.js";
 import Auth from './routes/auth.js';
 import Contact from './routes/contact.js';
import Product from "./models/Product.js";
//import { addProduct } from "./controllers/product/product.js";
//import Products from "../src/pages/ProductsPage.js";
 import productRouter from"./routes/productRouter.js"
import admin from "./routes/admin.js"



const app = express();
dotenv.config();
const port = process.env.PORT || 4000;  // Change to a different port, like 5001



// // importing mysql module
// import mysql from 'mysql'

// // configurations for creating mysql connection
// const connection = mysql.createConnection({
//     host: 'localhost',     // host for connection
//     port: 3306,            // default port for mysql is 3306
//     database: 'test',      // database from which we want to connect our node application
//     user: 'root',          // username of the mysql connection
//     password: 'root'       // password of the mysql connection
// });

// executing connection
// connection.connect(function(err) {
//     if (err) {
//         console.log("error occurred while connecting");
//     } else {
//         console.log("connection created with mysql successfully");
//     }
// });
// Database connection
 connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser())

// Import routes



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

