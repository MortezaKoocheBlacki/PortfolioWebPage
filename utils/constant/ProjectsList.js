import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";

const projects_list = [
      {
            id: 1,
            cover__image: "/Image01.jpg",
            image_sources: [{
                  src_one: "/Image01.jpg",
                  src_two: "/Image02.jpg",
                  src_three: "/Image03.jpg"
            }],
            alt: "Music-Project",
            link: `/ProjectsPage/1`,
            title: "Music Player",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 2,
            cover__image: "/Image02.jpg",
            image_sources: [{
                  src_one: "/Image02.jpg",
                  src_two: "/Image03.jpg",
                  src_three: "/Image04.jpg"
            }],
            alt: "Clock-Project",
            link: "/ProjectsPage/2",
            title: "Clock Project",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 3,
            cover__image: "/Image03.jpg",
            image_sources: [{
                  src_one: "/Image03.jpg",
                  src_two: "/Image04.jpg",
                  src_three: "/Image05.jpg"
            }],
            alt: "Store-Project",
            link: `/ProjectsPage/3`,
            title: "Store Project",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 4,
            cover__image: "/Image04.jpg",
            image_sources: [{
                  src_one: "/Image04.jpg",
                  src_two: "/Image05.jpg",
                  src_three: "/Image06.jpg"
            }],
            alt: "ToDo-Project",
            link: `/ProjectsPage/4`,
            title: "ToDo List",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 5,
            cover__image: "/Image05.jpg",
            image_sources: [{
                  src_one: "/Image05.jpg",
                  src_two: "/Image06.jpg",
                  src_three: "/Image07.jpg"
            }],
            alt: "Poll-Project",
            link: `/ProjectsPage/5`,
            title: "Poll Project",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 6,
            cover__image: "/Image06.jpg",
            image_sources: [{
                  src_one: "/Image06.jpg",
                  src_two: "/Image07.jpg",
                  src_three: "/Image01.jpg"
            }],
            alt: "PasswordGeneration-Project",
            link: `/ProjectsPage/6`,
            title: "Password Generator",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 7,
            cover__image: "/Image07.jpg",
            image_sources: [{
                  src_one: "/Image07.jpg",
                  src_two: "/Image01.jpg",
                  src_three: "/Image02.jpg"
            }],
            alt: "LoginForm-Project",
            link: `/ProjectsPage/7`,
            title: "Login Form",
            description: "",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
];

const list_title = "تمامی"

export { projects_list, list_title };