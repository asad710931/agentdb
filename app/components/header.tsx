import React from 'react'

export default function Header() {
    return (
        <div className='flex justify-around items-around'>
            <div>
                <img width={'50px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bangladesh_Jamaat-e-Islami_Emblem.svg/250px-Bangladesh_Jamaat-e-Islami_Emblem.svg.png" alt="logo" />
            </div>
            <div className="bismiAllah">
                <p className="text-indigo-600 text-shadow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
            </div>
            <div>
                <img width={'50px'} src="https://images.seeklogo.com/logo-png/62/3/bangladesh-jamaat-e-islami-marka-daripalla-logo-png_seeklogo-623252.png" alt="mizan" />
            </div>


        </div>
    )
}
