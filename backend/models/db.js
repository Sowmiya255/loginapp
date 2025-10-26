// const mongoose = require('mongoose');
// const mongo_url = process.env.MONGO_CON;

// mongoose.connect(mongo_url)
// .then(() =>{
//     console.log("Mongodb connected successfully.....");
// }).catch((error)=>{
//     console.log('Mongodb connection failure:',error);
// });






import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongo_url = process.env.MONGO_CON;

mongoose.connect(mongo_url)
  .then(() => console.log("MongoDB connected successfully..."))
  .catch((error) => console.error("MongoDB connection failure:", error));
