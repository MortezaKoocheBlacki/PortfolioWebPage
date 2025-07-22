import { FaBookReader, FaVideo } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa6";
import { MdSportsVolleyball } from "react-icons/md";

const company_data = [
      {
            id: 1,
            year_work: "2019 - Present",
            company_name: "Company Name",
            work_position: "Senior UX Designer",
            work_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et nisi. Provident possimus et magni a! Reiciendis accusamus est in commodi facilis odio sunt qui esse rem placeat. Quia, nobis.",
      },
      {
            id: 2,
            year_work: "2016 - 2019",
            company_name: "Company Name",
            work_position: "UI/UX Designer",
            work_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et nisi. Provident possimus et magni a! Reiciendis accusamus est in commodi facilis odio sunt qui esse rem placeat. Quia, nobis.",
      },
      {
            id: 3,
            year_work: "2014 - 2016",
            company_name: "Company Name",
            work_position: "Junior UX Designer",
            work_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et nisi. Provident possimus et magni a! Reiciendis accusamus est in commodi facilis odio sunt qui esse rem placeat. Quia, nobis.",
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