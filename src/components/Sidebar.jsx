import React, { useState, useEffect } from 'react';
import aman_professional_pic1 from "../assets/aman_professional_pic1-removebg-preview.png";
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Sidebar = () => {
    const [role, setRole] = useState("FrontEnd Developer");

    useEffect(() => {
        const interval = setInterval(() => {
            setRole((prevRole) => (prevRole === "FrontEnd Developer" ? "Programmer" : "FrontEnd Developer"));
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className='bg-gray-600 h-screen w-[350px] rounded-xl m-7 hidden md:block'>
            <div className='bg-gray-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <img src={aman_professional_pic1} alt="Aman Kumar" className='w-[200px] bg-gray-700 rounded-2xl' />
                </div>
                <h1 className='text-white font-bold text-center text-3xl my-2'>AMAN KUMAR</h1>
                {/* Dynamic Role */}
                <p className='text-white bg-gray-700 rounded-md py-2 text-center mx-4 mb-7'>{role}</p>
                <hr className='text-gray-700 mx-4 border-2' />

                <div className='mt-7 px-4 space-y-7'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegEnvelope className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>EMAIL</h1>
                            <p className='text-gray-200'>amankumar281023@gmail.com</p>
                        </div>
                    </div>
        
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaRegCalendarAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>BIRTHDAY</h1>
                            <p className='text-gray-200'>28 October, 2004</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-gray-700 p-2 rounded-md shadow'>
                            <FaMapMarkerAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>LOCATION</h1>
                            <p className='text-gray-200'>Delhi, India</p>
                        </div>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className='flex justify-center gap-4 mt-6'>
                    <a href="https://www.linkedin.com/in/aman-kumar-india" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-yellow-500'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/Amankr200" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-yellow-500'>
                        <FaGithub />
                    </a>
                    <a href="https://x.com/kraman102003" target="_blank" rel="noopener noreferrer" className='text-white text-2xl hover:text-yellow-500'>
                        <FaTwitter />
                    </a>
                    <a href="mailto:amankumar281023@gmail.com" className='text-white text-2xl hover:text-yellow-500'>
                        <FaRegEnvelope />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
