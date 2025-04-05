import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        // Add your public access key
        formData.append("access_key", "fed4ef78-50cf-4316-a062-b8dd80035a12");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>Contact Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />

                <div className='mt-10'>
                    <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
                    <form onSubmit={onSubmit}>
                        <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
                            <input
                                type="text"
                                name="name"
                                placeholder='Full Name'
                                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder='Email Address'
                                className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800'
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            rows={4}
                            cols={50}
                            placeholder='Your Message'
                            className='text-white font-semibold border-2 p-3 rounded-xl bg-gray-800 w-full'
                            required
                        ></textarea>
                        <div className='flex justify-end mt-7'>
                            <button
                                type="submit"
                                className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-gray-300 cursor-pointer'
                            >
                                <FaPaperPlane /> Send Message
                            </button>
                        </div>
                    </form>
                    <span className='text-white mt-4 block'>{result}</span>
                </div>
            </div>
        </div>
    );
};

export default Contact;
