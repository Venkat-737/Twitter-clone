import express from "express";
import dotenv from "dotenv";
import tweetRoutes from "./routes/tweetRoutes.js";
import connectDB from "./config/db.js";
import cors from "cors";


dotenv.config();
let app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended : true}))
let port = process.env.PORT || 5000;

app.use('/auth',tweetRoutes);
connectDB();
app.listen(port,()=>{
    console.log(`Server is listening at ${port}`);
})