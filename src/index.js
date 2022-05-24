import express from 'express';
import dotenv from "dotenv";
import { productRoute } from './v1/routes/productRoutes.js';
import { stocksRoute } from './v1/routes/stockRoutes.js';
import { connectMongoDB } from './database/db.js';

dotenv.config();

connectMongoDB();

const app = express();
app.use(express.json());



const PORT = process.env.PORT || 3000;

app.use("/api/v1/products", productRoute);
app.use("/api/v1/stocks", stocksRoute);

app.listen(PORT, () => console.log(`server is running on ${PORT}`))