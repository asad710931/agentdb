import { NextRequest, NextResponse, } from 'next/server';
import connect from '../../../db';
import position from '../../../model/position';

export const POST = async (request: any) => {

    //const data = await request.json();
    const data = [{ title: 'Polling Agent' }, { title: 'Senior Polling Agent' }]


    try {
        console.log(data)
        await connect()
        const v_cards = await position.insertMany(data);

        console.log(v_cards);
        return new NextResponse(JSON.stringify({ message: "Data added successfully", }), { status: 200 });

    } catch (error) {
        return new NextResponse(`failed to add an new Data ${error}`, { status: 500 });
    }
};


export const GET = async () => {
    try {

        await connect();
        const result = await position.find({})
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
    const result = await position.deleteOne({ _id: id })

    return new NextResponse(JSON.stringify(result), { status: 200 });
}




