'use client';
import React from 'react'
import Form from './form'
import Header from '@/app/components/header';
export default function page() {
    return (
        <div className='h-100% p-5 bg-gray-100'>
            <Header />
            <div className='max-w-sm mx-auto mt-10 bg-white rounded-md'>
                <Form />
            </div>
        </div>
    )
}
