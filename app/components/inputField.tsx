
'use client';
import React from "react";
import { ChangeEvent } from "react";
interface InputFieldProps {
    name: string;
    label: string;
    placeholder: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}
const InputField = ({ name, label, placeholder, value, onChange, required = true }: InputFieldProps) => {
    return (
        <div>
            <label htmlFor={name} className="font-bold">{label}</label>
            <input className="w-full p-2 margin-0.5em border-2 border-green-700 focus: outline-green-500 rounded-md"
                value={value} type="text" id={name} name={name} placeholder={placeholder} onChange={onChange}
                required={required} />
        </div>
    )
}

export default InputField;