import { randomInt } from "crypto";
import mongoose from "mongoose";

const membersSchema = new mongoose.Schema({
    unique_ID: {
        type: Number,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    father_name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    nid: {
        type: String,
        required: true,
        unique: true,
    },
    gender: String,
    position: String,
    seat: String,
    union: String,
    imageUrl: String,
    filled_at: {
        type: Date,
        default: Date.now
    }
});


//export default mongoose.models.members || mongoose.model("members", membersSchema);


export default mongoose.models.members || mongoose.model("members", membersSchema)