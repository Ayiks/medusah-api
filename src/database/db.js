import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.DB_URL;
console.log(db)


//CONNECTION TO A MONGODB
export function connectMongoDB(){
    mongoose.connect(db).then(()=>{
        console.log('Connected to MongoDB 😃')
    }).catch((error) => {
        console.log(`Couldn\'t connect to MongoDB 😥 ${error}`)
    });
}