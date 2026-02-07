import React, { use } from 'react';
import { useEffect, useState } from 'react';
import InputField from '@/app/components/inputField';
import ButtonField from '@/app/components/buttonField';
import FileField from '@/app/components/FileField';
import SelectField from '@/app/components/selectField';
//import { useEdgeStore } from '@/lib/edgestore';
import { useEdgeStore } from '@/lib/edgestore';
import Header from '@/app/components/header';


export default function Form() {

    const [unionParishad, setUnionParishad] = useState([]);
    const [pos, setPos] = useState([]);
    const [seats, setSeats] = useState([])

    useEffect(() => {

        const fetchUnion = async () => {
            try {
                const response = await fetch('http://192.168.1.107:3000/api/union');
                const data = await response.json();
                console.log('Fetched members data:', data);
                setUnionParishad(data);
                console.log('Updated members state:', data);
            } catch (error) {
                console.error('Error fetching members data:', error);
            }
        };

        const fetchPos = async () => {
            try {
                const response = await fetch('http://192.168.1.107:3000/api/pos');
                const data = await response.json();
                console.log('Fetched members data:', data);
                setPos(data);
                console.log('Updated members state:', data);
            } catch (error) {
                console.error('Error fetching members data:', error);
            }
        };

        const fetchSeats = async () => {
            try {
                const response = await fetch('http://192.168.1.107:3000/api/seat');
                const data = await response.json();
                console.log('Fetched members data:', data);
                setSeats(data);
                console.log('Updated members state:', data);
            } catch (error) {
                console.error('Error fetching members data:', error);
            }
        };


        fetchSeats()
        fetchPos()
        fetchUnion()
    }, [])
    const gender = [
        { _id: '01', title: 'Male' },
        { _id: '02', title: 'Female' },
    ];
    const [pageNumber, setPageNumber] = useState(1);
    const [formData, setFormData] = useState({ fullName: '', father_name: '', phone: '', nid: '', gender: '', position: '', seat: '', union: '', imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/625/600/non_2x/person-icon-symbol-design-illustration-vector.jpg' });
    const [file, setFile] = useState<File>();
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState<number>(0)
    const [resColor, setResColor] = useState<string>('text-red-700')
    const [active, setActive] = useState<boolean>(false)
    const [uploadErr, setUploadErr] = useState<string>('')
    const { edgestore } = useEdgeStore();




    const handleForm = async () => {
        if (formData.fullName === '' || formData.father_name === '' || formData.phone === '' || formData.nid === '' || formData.gender === '' || formData.position === '' || formData.seat == '' || formData.union === '') {
            console.log(uploadErr);
            setUploadErr('Fill all the fields with proper data')

        } else {
            setLoading(true);
            setUploadErr('')

            const response = await fetch('/api/members', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                console.log("Form submitted successfully");
                setResColor('text-green-700')
                setUploadErr("! Thanks, submitted successfully");


                setLoading(false);
            } else {
                setUploadErr('Phone Number or NID already exists')
                setResColor('text-red-700')

                setLoading(false);
            }

        }

        //console.log(formData)

    };

    return (

        <div className='w-full h-full'>

            <div className='shadow-sm p-5'>
                <div className="flex items-center justify-center space-y-4 flex-col">
                    <p className="text-lg font-semibold relative left-40 bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center">{pageNumber}/3</p>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Bangladesh_Jamaat-e-Islami_Emblem.svg/960px-Bangladesh_Jamaat-e-Islami_Emblem.svg.png"
                        width="100px" alt="Admin Login" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
                {pageNumber === 1 && (
                    <div className='mb-6'>
                        <InputField label="Full Name" name="full_name" placeholder="Enter full name" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} /><br />
                        <InputField label="Father's Name" name="father_name" placeholder="Enter father's name" value={formData.father_name} onChange={e => setFormData({ ...formData, father_name: e.target.value })} /><br />
                        <InputField label="Phone Number" name="phone_number" placeholder="Enter phone number" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} /><br />
                        <InputField label="NID" name="nid" placeholder="Enter NID number" value={formData.nid} onChange={e => setFormData({ ...formData, nid: e.target.value })} /><br />
                    </div>)}

                {pageNumber === 2 && (
                    <div>
                        <SelectField label="Gender" name="Gender" value={formData.gender} otp_label="Choose a Gender" list={gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} /><br />
                        <SelectField label="Position" name="position" value={formData.position} otp_label="Choose a Position" list={pos} onChange={e => setFormData({ ...formData, position: e.target.value })} /><br />

                        <SelectField label="Constituencies" name="constituency" value={formData.seat} otp_label="Choose a constituency" list={seats} onChange={e => setFormData({ ...formData, seat: e.target.value })} /><br />

                        <SelectField label="Union Parishad" name="unionParishad" value={formData.union} otp_label="Choose a Union Parishad" list={unionParishad} onChange={e => setFormData({ ...formData, union: e.target.value })} /><br />
                    </div>
                )}



                {pageNumber === 3 && (

                    <div>
                        <div className=' flex flex-col items-center mb-4'>
                            {/* <p className='text-red-900'>Note : If image upload do not response try upload again</p> */}
                            <img className='max-w-50 max-h-50 items-center' src={progress === 100 ? formData.imageUrl : 'https://static.vecteezy.com/system/resources/previews/026/625/600/non_2x/person-icon-symbol-design-illustration-vector.jpg'} alt="Preview" />
                        </div>
                        <FileField requried={true} onChange={async (e) => {
                            //setFile(e.target.files?.[0])
                            const file = e.target.files?.[0]
                            try {

                                if (file) {
                                    const edgeRes = await edgestore.publicFiles.upload({
                                        file,
                                        onProgressChange(progress) {
                                            setUploadErr('')
                                            console.log(progress)
                                            setProgress(progress)
                                        },
                                    })
                                    setFormData({ ...formData, imageUrl: edgeRes.url })
                                    setActive(false)
                                }
                            } catch (error) {
                                if (error) {
                                    setUploadErr('Use Proper image file less than 1MB or try again')
                                }

                            }
                        }}

                        /><br />
                        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div
                                id="progress-bar-empty"
                                className="h-full bg-green-600 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}>
                            </div>
                        </div><br />
                        {loading ? <p className="text-center">Submitting...</p> : <ButtonField value='Submit Form' onClick={handleForm} disabled={active} />}
                        <p className={resColor}>{uploadErr}</p>
                    </div>
                )}

                <div className=' flex justify-between mt-4'>
                    {pageNumber > 1 && <ButtonField value='Previous' onClick={() => setPageNumber(pageNumber - 1)} disabled={false} />}
                    {pageNumber < 3 && <ButtonField value='Next' onClick={() => setPageNumber(pageNumber + 1)} disabled={false} />}
                </div>
            </div>
        </div>
    )
}