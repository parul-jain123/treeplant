import express from "express"
import { addProduct } from "../controllers/product/product.js"
import { showProduct } from "../controllers/product/product.js"

const router =  express()

router.route("/product").post(
  addProduct
)
router.route("/allproduct").get(
  showProduct
)

export default router