import { FaBookReader, FaVideo } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { MdSportsVolleyball } from "react-icons/md";

const company_data = [
      {
            id: 1,
            year_work: "2024 - Present",
            company_name: "Self Projects",
            work_position: "React.JS & Next.JS Projects",
            work_description: "From 2024 to the present, I have focused on developing self-driven React.js and Next.js projects, emphasizing performance optimization, clean architecture, and user-centered design. This work improved my problem-solving skills, deepened technical expertise, and strengthened adaptability across modern front-end ecosystems.",
      },
      {
            id: 2,
            year_work: "2023 - 2024",
            company_name: "Self Learning",
            work_position: "Front-End Concepts Learning",
            work_description: "From 2023 to 2024, I dedicated myself to self-learning front-end development concepts, focusing on mastering JavaScript, React.js, and Next.js fundamentals. This period strengthened my understanding of responsive design, component-based architecture, and modern development workflows.",
      },
      {
            id: 3,
            year_work: "2023 - 2024",
            company_name: "Self Projects",
            work_position: "HTML & CSS & JS Projects",
            work_description: "From 2023 to 2024, I worked on self-driven projects utilizing HTML, CSS, and JavaScript to build responsive and accessible web pages. This experience enhanced my skills in semantic markup, styling best practices, and interactive front-end development.",
      },
]

const skills_data = [
      {
            id: 1,
            skill_name: "HTML",
            skill_percent: "70%",
      },
      {
            id: 2,
            skill_name: "CSS",
            skill_percent: "65%",
      },
      {
            id: 3,
            skill_name: "TAILWIND",
            skill_percent: "55%",
      },
      {
            id: 4,
            skill_name: "JAVASCRIPT",
            skill_percent: "60%",
      },
      {
            id: 5,
            skill_name: "REACT JS",
            skill_percent: "55%",
      },
      {
            id: 6,
            skill_name: "NEXT JS",
            skill_percent: "40%",
      },
]

const interests_data = [
      {
            id: 1,
            name: "Gaming",
            icon: <FaGamepad />,
      },
      {
            id: 2,
            name: "Reading",
            icon: <FaBookReader />,
      },
      {
            id: 3,
            name: "Sport",
            icon: <MdSportsVolleyball />,
      },
      {
            id: 4,
            name: "Movies & Series",
            icon: <FaVideo />,
      },
]

export { company_data, skills_data, interests_data };