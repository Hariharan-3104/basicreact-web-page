/*import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './Routes/Userroute.js';
import cors from 'cors';
const app = express();
 

//bodyParser - middleware for passing json value from backend to database  
app.use(bodyParser.json());
dotenv.config();
app.use(cors());
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
*/
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './Routes/authRoutes.js';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/your_db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
