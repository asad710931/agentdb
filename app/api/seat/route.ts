import { NextRequest, NextResponse, } from 'next/server';
import connect from '../../../db';
import seats from '../../../model/seats';

export const POST = async (request: any) => {
    const data = await request.json();
    try {
        console.log(data)
        await connect()
        const v_cards = await seats.insertOne(data);

        //const membersslist = await members.find({});
        console.log(v_cards);
        return new NextResponse(JSON.stringify({ message: "Data added successfully", }), { status: 200 });

    } catch (error) {
        return new NextResponse(`failed to add an new data ${error}`, { status: 500 });
    }
};

export const GET = async () => {
    try {

        await connect();
        const result = await seats.find({})
        return new NextResponse(JSON.stringify(result), { status: 200 });
    } catch (error) {
        return new NextResponse("Failed to retrieve datas", { status: 500 });
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
    const result = await seats.deleteOne({ _id: id })

    return new NextResponse(JSON.stringify(result), { status: 200 });
}




