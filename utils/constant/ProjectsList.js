import { FaHtml5, FaCss3, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

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
            description: "پورتفولیو شخصی برای نمایش مهارت‌ها و پروژه‌های شما طراحی شده است. با ظاهری مینیمال و مدرن، این پروژه بهترین گزینه برای افرادی است که می‌خواهند توانایی‌های خود را به حرفه‌ای‌ترین شکل ممکن ارائه کنند.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/PersonalPortfolioWebsite",
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
            description: "پروژه ساعت با طراحی مدرن و زیبا، زمان را به شکلی متفاوت نمایش می‌دهد. علاوه بر نمایش زمان دقیق، ظاهری چشم‌نواز دارد که می‌تواند در هر وب‌سایتی مورد استفاده قرار گیرد.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/Clock",
      },
      {
            id: 3,
            cover__image: "/Image03.jpg",
            image_sources: [{
                  src_one: "/Image03.jpg",
                  src_two: "/Image04.jpg",
                  src_three: "/Image05.jpg"
            }],
            alt: "Responsive Dashboard",
            link: `/ProjectsPage/3`,
            title: "Responsive Dashboard",
            description: "داشبورد ریسپانسیو با طراحی منعطف، مناسب برای مدیریت داده‌ها و آمارهای مختلف است. این پروژه برای هر دستگاهی، از موبایل گرفته تا دسکتاپ، سازگاری کامل دارد. ظاهر جذاب و کاربرپسند، استفاده از آن را برای کاربران آسان و لذت‌بخش می‌کند.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/ResponsiveDashboardWithDarkMode",
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
            description: "مدیریت وظایف روزانه با ToDo List App ساده‌تر از همیشه است. این پروژه با طراحی تمیز و مینیمال، کمک می‌کند تا کارهای روزانه را ثبت و پیگیری کنید. مناسب افراد پرمشغله و علاقه‌مند به نظم شخصی.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/ToDoListApp",
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
            description: "عاشق فیلم هستید؟ Movie Guide اطلاعات کامل فیلم‌ها را به همراه پوستر و توضیحات جذاب ارائه می‌کند. این پروژه مناسب دوست‌داران سینما و کسانی است که می‌خواهند بهترین فیلم‌ها را پیدا کنند.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/Movie-Guide-App-Without-any-API-",
      },
      {
            id: 6,
            cover__image: "/Image06.jpg",
            image_sources: [{
                  src_one: "/Image06.jpg",
                  src_two: "/Image07.jpg",
                  src_three: "/Image01.jpg"
            }],
            alt: "Password Generation",
            link: `/ProjectsPage/6`,
            title: "Password Generator",
            description: "تولید رمز عبور قدرتمند و ایمن، دغدغه بسیاری از کاربران است. این پروژه با الگوریتم‌های تصادفی، رمزهای امن و منحصر‌به‌فرد ایجاد می‌کند و امنیت حساب‌های کاربری شما را تضمین می‌کند.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/PasswordGeneration",
      },
      {
            id: 7,
            cover__image: "/Image07.jpg",
            image_sources: [{
                  src_one: "/Image07.jpg",
                  src_two: "/Image01.jpg",
                  src_three: "/Image02.jpg"
            }],
            alt: "Login Form",
            link: `/ProjectsPage/7`,
            title: "Login Form",
            description: "مدیریت وظایف روزانه با ToDo List App ساده‌تر از همیشه است. این پروژه با طراحی تمیز و مینیمال، کمک می‌کند تا کارهای روزانه را ثبت و پیگیری کنید. مناسب افراد پرمشغله و علاقه‌مند به نظم شخصی.",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
            project_link: "https://github.com/MortezaKoocheBlacki/ToDoListApp",
      },
];

const list_title = "تمامی"

export { projects_list, list_title };