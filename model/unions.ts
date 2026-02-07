import mongoose from "mongoose";

const unionsSchema = new mongoose.Schema({
    no: {
        type: Number
    },
    title: {
        type: String,
        required: true,
    },
    insertedAt: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.models.unions || mongoose.model("unions", unionsSchema)