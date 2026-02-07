import mongoose from "mongoose";

const seatsSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    insertedAt: {
        type: Date,
        default: Date.now
    }

});



export default mongoose.models.seats || mongoose.model("seats", seatsSchema)