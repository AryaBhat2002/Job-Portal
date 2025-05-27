import express from 'express';
import cookieParser from 'cookie-parser';   
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';
// Load environment variables from .env file
dotenv.config({});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
};
app.use(cors(corsOptions));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT:  ${PORT}`);
});

//API's
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes); 
app.use('/api/v1/job', jobRoutes);
app.use('/api/v1/application', applicationRoutes);

// app.post("/test", (req, res) => {
//   console.log("Body in /test:", req.body);
//   res.send("OK");
// });