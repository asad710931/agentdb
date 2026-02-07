import React from 'react'
interface SelectFieldProps {
    label: string;
    otp_label: string;
    name: string;
    value: string;
    list: { _id: string; title: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const SelectField = ({ label, otp_label, name, value, list = [], onChange }: SelectFieldProps) => {
    return (
        <div>
            <label className="font-bold">{label}</label>
            <select className="w-full p-2 margin-0.5em border-2 border-green-700 focus: outline-green-500 rounded-md" onChange={onChange} name={name} id={name}>
                <option value={value}>{value == '' ? otp_label : value}</option>
                {list.map((option) => (
                    <option key={option._id} value={option.title}>{option.title}</option>
                ))}
            </select>
        </div>
    )
}
export default SelectField;