import mongoose from "mongoose";

const {Schema, model} = mongoose;


//STRUCTURE FOR THE PRODUCT INSIDE THE DB
const soldSchema = Schema({
    items:String,
    quantity:Number,
    total_price:Number,
    sold_on: { type: Date, default: Date.now },
   
});

export const Sale = model('sold', soldSchema);