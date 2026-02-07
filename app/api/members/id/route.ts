
import { NextRequest, NextResponse, } from 'next/server';
import connect from '../../../../db';
import members from '../../../../model/members';
import clientPromise from "../../../../lib/mongodb";



export async function POST(request: any) {
    try {
        // Parse the incoming JSON data from the request body
        const body = await request.json();
        const dateTime = new Date().toLocaleString()
        // const data = ({ 'unique_ID': uniqueID(), ...body, 'submited_at': dateTime })
        const id = parseInt(body.id)

        const client = await clientPromise;
        const db = client.db("v_card"); // Replace with your database name
        // Insert the document into a collection
        const result = await db.collection("members").findOne({ unique_ID: id });
        console.log(result)



        // Return a success response
        //insertedId: result.insertedId,
        return NextResponse.json({
            message: "Data inserted successfully",
            body: result,
        }, { status: 201 });

    } catch (error) {
        console.error("Database error:", error);
        // Return an error response
        return NextResponse.json({
            error: "An error occurred while inserting data",
        }, { status: 500 });
    }
}





