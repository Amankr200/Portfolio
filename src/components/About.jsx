import React from 'react'
import Navbar from './Navbar'
import avatar from "../assets/avatar.webp"
import { service } from './data'


const About = () => {
    return (
        <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>About Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-5 md:hidden'>
                    <img src={avatar} alt="" className='bg-gray-700 rounded-2xl' />
                </div>
                <p className='mt-4 text-gray-300 text-xl font-semibold'>Hi! I'm Aman Kumar, a passionate Front-End Developer with expertise in React, JavaScript, and CSS. With a strong foundation in modern web development and an eye for detail, I create elegant, user-friendly web interfaces tailored to meet client needs.</p>
                <p className='mt-2 text-gray-300 text-xl font-semibold'>With a strong foundation in IT, I’ve built my journey around a passion for web development, problem-solving, and creating user-centric digital experiences. I’m always eager to learn, explore new technologies, and take on challenges that push my limits. I’ve worked on various projects that enhanced my skills in frontend development, collaboration, and delivering real-world solutions. Let’s connect and bring innovative ideas to life together!</p>
                {/* service section */}
                <h1 className='text-2xl text-white font-bold mt-7'>What I'm Doing</h1>
                <div className='grid md:grid-cols-2 gap-6 mt-7'>
                    {
                        service.map((item, index) => {
                            return <div className='bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl' key={index}>
                                <div className='text-6xl text-yellow-500'>
                                    {item.logo}
                                </div>
                                <div>
                                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                                    <p className='text-xl text-gray-300'>{item.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                 
            </div>
        </div>
    )
}

export default About