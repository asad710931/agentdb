import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "your_mongodb_uri";
const client = new MongoClient(uri);

const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise;