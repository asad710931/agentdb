'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { User, Phone, Fingerprint, CreditCard, Users, Popsicle, Settings, HomeIcon, Map, Form, MapIcon, HousePlus, Briefcase } from 'lucide-react';
import QRcode from '@/app/components/qrcode';
import Header from '@/app/components/header';



type UserData = {
    unique_ID?: string;
    fullName?: string;
    father_name?: string;
    phone?: string;
    nid?: string;
    imageUrl?: string;
    position?: string;
    union?: string;
    seat?: string
};

export default function page() {
    const [userData, setUserData] = useState<UserData>({})
    const [valid, setValid] = useState<boolean>()
    const params = useParams()

    const id = typeof params.id === 'string' ? params.id.replace(/%5B|%5D/g, '') : ''

    const getfetch = async () => {
        const getdata = await fetch('/api/members/id', {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (getdata.ok) {
            console.log('data read ok')
            const mydata = await getdata.json()
            console.log(mydata.body)
            setValid(true)
            setUserData(mydata.body)

        } else {
            setValid(false)
        }


    }
    useEffect(() => {
        getfetch()

    }, [])



    return (
        <>
            <Header />
            {valid ? (<div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">

                    {/* Header / Cover Section */}
                    <div className="h-32 bg-gradient-to-r from-indigo-600 to-violet-600 relative">
                        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                            <div className="relative">
                                <img
                                    src={userData.imageUrl === '' ? 'https://png.pngtree.com/element_our/20190528/ourmid/pngtree-no-photo-icon-image_1128432.jpg' : userData.imageUrl}
                                    alt="Profile"
                                    className="w-40 h-40 rounded-2xl border-4 border-white object-cover shadow-md"
                                />
                                <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                            </div>

                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="pt-16 pb-8 px-8 text-center">
                        <h2 className="text-2xl font-bold text-slate-800">{userData.fullName}</h2>
                        <p className="text-indigo-600 font-medium text-sm mb-6 uppercase tracking-wider">
                            {userData.unique_ID}
                        </p>

                        <div className="space-y-4 text-left">
                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <Users className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Father's Name</p>
                                    <p className="text-slate-700 font-medium">{userData.father_name}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <Fingerprint className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">NID Number</p>
                                    <p className="text-slate-700 font-mono font-medium">{userData.nid}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <Phone className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Phone Number</p>
                                    <p className="text-slate-700 font-medium">{userData.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <Briefcase className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Position</p>
                                    <p className="text-slate-700 font-medium">{userData.position}</p>
                                </div>
                            </div>

                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <MapIcon className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Union</p>
                                    <p className="text-slate-700 font-medium">{userData.union}</p>
                                </div>
                            </div>
                            <div className="flex items-center p-3 bg-slate-50 rounded-xl transition-hover hover:bg-slate-100">
                                <HousePlus className="w-5 h-5 text-slate-400 mr-4" />
                                <div>
                                    <p className="text-xs text-slate-500 uppercase font-semibold">Seat</p>
                                    <p className="text-slate-700 font-medium">{userData.seat}</p>

                                </div>
                                <QRcode text={`https://jibd.vercel.app/member/[${id}]`} size={100} />

                            </div>

                        </div>

                        <button className="mt-8 w-full py-3 bg-green-900 text-white rounded-xl font-semibold shadow-lg shadow-slate-200 hover:bg-green-800 transition-all active:scale-[0.98]">
                            Profile Authentic
                        </button>

                    </div>
                </div>
            </div>) : (
                <div className='flex justify-center items-center'>
                    <h1 className='mt-50 text-4xl'>Sorry NO Member Found !Report Now</h1>

                </div>)}

        </>

    )
}
