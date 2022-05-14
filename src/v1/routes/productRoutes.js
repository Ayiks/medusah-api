import express from "express";
import { getAllProduct, getOneProduct, updateProduct, deleteProduct, createProduct } from "../../controllers/productController.js";

const router = express.Router();


//PRODUCTS ROUTES
router.route('/').get(getAllProduct).post(createProduct);
router.route('/:id').patch(updateProduct).get(getOneProduct).delete(deleteProduct);

export const productRoute = router;