import React from 'react'
interface FileFieldProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    requried: boolean
}

export default function FileField({ onChange, requried = true }: FileFieldProps) {
    return (
        <div>
            <label className="font-bold">Give your Image</label>
            <input className="w-full p-2 margin-0.5em border-2 border-green-700 focus: outline-green-500 rounded-md" type='file' id="file" name="file" accept="image/*" onChange={onChange} required={requried} />
        </div>
    )
}
