import mongoose from "mongoose";

const connect = async () => {
    try {
        const mongodbUri = process.env.MONGODB_URI;
        if (!mongodbUri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }
        await mongoose.connect(mongodbUri, {
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
}
export default connect;  