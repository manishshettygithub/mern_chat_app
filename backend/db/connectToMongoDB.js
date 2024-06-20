import mongoose from "mongoose";
const connectToMongoDB=async()=>{

    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to Mongo DB")
        
    } catch (error) {
        console.log("Error connecting mongo",error.message)
        
    }
}

export default connectToMongoDB;