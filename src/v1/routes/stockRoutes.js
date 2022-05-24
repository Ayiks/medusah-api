import express from "express";
import { createStock, getAllStocks, deleteStock, updateStock } from "../../controllers/stockController.js";

const router = express.Router();


//STOCKS ROUTES
router.route('/').get(getAllStocks).post(createStock);
router.route('/:id').patch(updateStock).delete(deleteStock);

export const stocksRoute = router;