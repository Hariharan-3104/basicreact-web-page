import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './Routes/Userroute.js';
const app = express();
 

//bodyParser - middleware for passing json value from backend to database  
app.use(bodyParser.json());
dotenv.config();

const port=process.env.PORT ||3500;
const M_URL=process.env.MONGO_URL;
app.use('/api',router);

mongoose.connect(M_URL).then(()=>{
    console.log('Database connected');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    });
})
.catch((err)=>{
    console.log(err);
});