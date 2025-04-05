import React from 'react';
import Navbar from './Navbar';

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Firebase",
    "Git/GitHub",
    "REST APIs",
    "C",
    "C++",
    "SQL",
  ];

  const coreSubjects = [
    {
      title: "Data Structures & Algorithms",
    },
    {
      title: "Object-Oriented Programming",
      
    },
    {
      title: "Database Management Systems",
    }
  ];

  const certificates = [
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      link: "https://badgr.com/public/assertions/fGmqDyT5RmKNjsfe_BJPWQ?identity__email=kraman102003@gmail.com",
    },
    {
      title: "GirlScript Summer of Code",
      issuer: "GirlScript Foundation",
      link: "https://www.linkedin.com/in/aman-kumar-india/overlay/experience/2484409816/multiple-media-viewer/?profileId=ACoAAEa8j6MB4ZNmRuXZzjKc04VQb0BRmr2OIQM&treasuryMediaId=1731339744972",
    },
    {
        title: "Hacktoberfest",
        issuer: "Hacktoberfest",
        link: "https://www.linkedin.com/in/aman-kumar-india/overlay/1728760782150/single-media-viewer/?profileId=ACoAAEa8j6MB4ZNmRuXZzjKc04VQb0BRmr2OIQM",
      },
      {
        title: "WordPress",
        issuer: "Udemy",
        link: "https://www.udemy.com/certificate/UC-49379325-ed61-4d62-99a7-4ad405316663/",
      },
  ];

  return (
    <div className="md:rounded-xl bg-gray-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3xl mb-2">Skills ,Core Subjects ,Certificates</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4xl" />

        {/* Skills Section */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-2xl mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white text-center py-3 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Core Subjects Section */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-2xl mb-4">Core Subjects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {coreSubjects.map((subject, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-xl mb-3 text-yellow-500">{subject.title}</h3>
                 
              </div>
            ))}
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-10">
          <h2 className="text-white font-bold text-2xl mb-4">Certificates</h2>
          <div className="space-y-4">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white p-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors"
              >
                <h3 className="font-semibold text-lg">{certificate.title}</h3>
                <p className="text-gray-400">Issued by: {certificate.issuer}</p>
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;