
'use client';
import React from "react";
interface ButtonFieldProps {
    value?: string;
    disabled: boolean;
    onClick: () => void;
}
const ButtonField = ({ value, onClick, disabled = false }: ButtonFieldProps) => {
    return (
        <div>
            <input className="w-full p-2 m-0.5em bg-green-700 rounded-md text-white font-400 cursor-pointer hover:bg-green-600 transition-all duration-300"
                type="button" value={value} onClick={onClick} disabled={disabled}
                required />
        </div>
    )
}

export default ButtonField;