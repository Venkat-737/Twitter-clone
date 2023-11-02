import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        const DB = process.env.MONGO_URI|| "mongodb://127.0.0.1:27017/tweets";
        const conn = await mongoose.connect(DB);
        console.log(`MONGODB CONNECTED : ${conn.connection.host}`);       
    }
    catch(error){
        console.error(`Error : ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;