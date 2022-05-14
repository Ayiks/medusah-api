import mongoose from "mongoose";

const {Schema, model} = mongoose;


//STRUCTURE FOR THE PRODUCT INSIDE THE DB
const productSchema = Schema({
    name:String,
    category:String,
    price:Number,
    quantity:Number
});

export const Product = model('products', productSchema);