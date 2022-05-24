import mongoose from 'mongoose';

//extract these from the mongoose
const { Schema, model } = mongoose;

const stockSchema = Schema({
    name: {type: Schema.Types.ObjectId, ref: 'products'},
    quantity:Number,
    
});

//use the schema to create a model
export const stocks = model('stockCollection', stockSchema);
