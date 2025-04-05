import React from 'react';
import Navbar from './Navbar';

const Resume = () => {
  return (
    <div className='md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7'>
    <div className="bg-gray-800 h-screen flex flex-col pt-4 pr-7">
      {/* Navbar */}
      <Navbar />

      {/* Resume Download */}
      <div className="flex flex-col justify-center items-center flex-1 text-white pl-16">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        <p className="mb-8 text-center max-w-lg">
          View or download my resume to learn more about my skills, experience, and qualifications.
        </p>
        <a 
  href="https://drive.google.com/file/d/1Uq_US2lRMJdq6mo0jFgA-Wcm_gr0uTlM/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 border-2 border-yellow-600"
>
  Download Resume
</a>
      </div>
    </div>
    </div>
  );
};

export default Resume;