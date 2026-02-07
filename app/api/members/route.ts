import { NextRequest, NextResponse, } from 'next/server';
import connect from '../../../db';
import members from '../../../model/members';
import uniqueID from './uniqueId';
import clientPromise from "../../../lib/mongodb";




export const POST = async (request: any) => {

  const body = await request.json();
  // const dateTime = new Date().toLocaleString()
  const data = ({ 'unique_ID': uniqueID(), ...body })
  console.log(data)
  //const fdata = ({ unique_id, ...data })
  //console.log(fdata)

  try {
    console.log(data)
    await connect()
    const v_cards = await members.insertOne(data);

    //const membersslist = await members.find({});
    console.log(v_cards);
    return new NextResponse(JSON.stringify({ message: "Member added successfully", }), { status: 200 });

  } catch (error) {
    return new NextResponse(`failed to add an new memeber ${error}`, { status: 500 });
  }
};


export const GET = async () => {
  try {
    // const client = await clientPromise;
    //  const db = client.db("v_card"); // Replace with your database name
    // Insert the document into a collection
    // const result = await db.collection("members").find({});
    await connect();
    const result = await members.find({})
    return new NextResponse(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to retrieve members", { status: 500 });
  }
};

export const PUT = async (request: any) => {
  console.log(request.body._id)
}

export const DELETE = async (request: any) => {

  const data = await request.json()
  console.log(data.id)
  const id = data.id
  await connect();
  const result = await members.deleteOne({ _id: id })

  return new NextResponse(JSON.stringify(result), { status: 200 });
}




