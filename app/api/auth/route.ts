import { NextRequest, NextResponse, } from 'next/server';
import clientPromise from "../../../lib/mongodb";


export async function POST(request: any) {
    try {
        // Parse the incoming JSON data from the request body
        const body = await request.json();
        const dateTime = new Date().toLocaleString()
        // console.log(body.email, body.password)

        const client = await clientPromise;
        const db = client.db("v_card"); // Replace with your database name
        // Insert the document into a collection
        const result = await db.collection("admin").findOne({ email: body.email })
        if (result && result.password === body.password) {
            return NextResponse.json({
                message: "ok",
                res: result,
            })
        } else {
            return NextResponse.json({
                message: "admin doesn't exits ",
                res: result,
            })

        }
    } catch (error) {
        console.error("Database error:", error);
        // Return an error response
        return NextResponse.json({
            error: "An error occurred while inserting data",
        }, { status: 500 });
    }
}




