import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from './card';

interface Member {
    _id: string
    unique_ID: string;
    fullName: string;
    father_name: string;
    phone: string;
    nid: string;
    position: string;
    seat: string;
    union: string;
    imageUrl: string | null;
}
export default function members() {

    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/members');
                const data = await response.json();
                console.log('Fetched members data:', data);
                setMembers(data);
                console.log('Updated members state:', data);
            } catch (error) {
                console.error('Error fetching members data:', error);
            }
        };
        fetchData()
    }, [])

    console.log('Members data:', members);

    return (
        <div className="p-10 overflow-y-scroll">
            <h4 className="font-semibold mb-4">Members List</h4>

            <table className="d-abs">
                <thead>
                    <tr className="bg-gray-200 p-30 m-10 rounded-lg">
                        <th className="w-1/4">Names</th>
                        <th className="w-1/4">Father's Name</th>
                        <th className="w-1/4">Phone Number</th>
                        <th className="w-1/4">Position</th>
                        <th className="w-1/4">Actions</th>
                        <th className="w-1/4">Link</th>
                        <th className="w-1/4">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) => (
                        <tr key={member.unique_ID} className="bg-white-200 p-30 m-10 rounded-lg border-gray-200 mt-15 text-center">
                            <td className="w-1/4">{member.fullName}</td>
                            <td className="w-1/4">{member.father_name}</td>
                            <td className="w-1/4">{member.phone}</td>
                            <td className="w-1/4">{member.position}</td>
                            <td className="w-1/4">
                                <button className="bg-red-500 text-white px-4 py-1 rounded mr-2" onClick={async () => {
                                    const yes = confirm('Are you sure')
                                    if (yes) {
                                        const deleteda = await fetch('/api/members', {
                                            method: 'DELETE',
                                            headers: {
                                                'content': 'application/json'
                                            },
                                            body: JSON.stringify({ id: member._id })

                                        }).then(res => res.json()).then((data) => {
                                            console.log(data);

                                        })
                                        console.log(member._id)

                                    } else {
                                        console.log('cencel')
                                    }

                                }
                                }>X</button>
                            </td>
                            <td className="w-1/4">
                                <a href={`http://192.168.1.107:3000/member/[${member.unique_ID}]`} target='_blank' className="bg-blue-500 text-white px-4 py-1 rounded mr-2">View</a>
                            </td>
                            <td className="w-1/4">
                                <button onClick={() => { }} className="bg-green-500 text-white px-4 py-1 rounded mr-2">Manage</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Card />
        </div >
    )
}
