import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import FinFolio from "../assets/FinFolio.png";
import AiTravelPlanner from "../assets/AiTravelPlanner.png";
import emissio from "../assets/emissio.png";


 

export const service = [
    {
        title:"Programming",
        desc:"I am a programmer with a passion for coding and problem-solving. ",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    
]
 
 

export const projects = [
    {
      title: "FinFolio - A Personal Finance Tracker💰",
      description:
        "FinFolio is a personal finance tracker that helps you manage expenses, income, and investments with a user-friendly interface. It features secure authentication, real-time tracking, interactive charts, CSV import/export, and a responsive design to visualize your financial goals and spending patterns.",
        techStack: ["Tailwind", "React.js", "Firebase (Authentication & Firestore)", "Ant Design", "Chart.js", "CSS3"],
        link: "https://finfolio.netlify.app/",
        github: 'https://github.com/Amankr200/FinFolio---Your-Presonal-Finance-Webapp',
      image: FinFolio, // Replace with your project screenshot
    },
    {
      title: "AI-Powered Travel Planner!🧳",
      description:
        "Plan trips anywhere in the world with AI-recommended hotels & itineraries based on budget, days, and travelers. Features Google Auth, interactive animations, and a fully responsive design for mobile, tablet, and desktop.",
      techStack: [
        "React.js",
        "Gemini API",
        "Tailwind CSS",
        "Google Auth",
        "Unsplash",
        "Google Places",
        "Spring"
      ],
      link: "https://ai-travel-planner-aman.netlify.app",
      github: "https://github.com/Amankr200/AI-TRAVEL-PLANNER",
      image: AiTravelPlanner,
    },
    {
      title: "Emissio - Carbon Footprint Tracker 🌱",
      description:
        "Emissio is a web-based application that empowers users to calculate and track their carbon footprint. Through interactive features, personalized tips, and gamification, it fosters sustainable behavior and connects users with eco-friendly products to encourage a greener future.",
        techStack: ["HTML", "CSS", "JavaScript", "React.js", "News API"],
        link: "https://www.youtube.com/watch?v=pd6ep2evNEA",
      github: 'https://github.com/Amankr200/Emissio',
      image: emissio,// Replace with your project screenshot
    },
  ];