import mongoose from "mongoose";

const positionSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    insertedAt: {
        type: Date,
        default: Date.now
    }

});



export default mongoose.models.position || mongoose.model("position", positionSchema)