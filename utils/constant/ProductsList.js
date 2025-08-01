const { FaHtml5, FaCss3, FaReact  } = require("react-icons/fa");
const { IoLogoJavascript } = require("react-icons/io5");
import { RiTailwindCssFill } from "react-icons/ri";

const products_list = [
      {
            id: 1,
            cover__image: "/Image01.jpg",
            image_sources: [{
                  src_one: "/Image01.jpg",
                  src_two: "/Image02.jpg",
                  src_three: "/Image03.jpg"
            }],
            alt: "Manage Stop Watch",
            link: "/ProductsPage/1",
            project_link: "https://managethestopwatch.netlify.app/",
            title: "Manage Stop Watch",
            description: "مدیریت زمان هرگز این‌قدر ساده نبوده است! پروژه Manage Stop Watch به شما این امکان را می‌دهد تا با دقت بالا زمان را اندازه‌گیری کنید، توقف کنید یا دوباره ادامه دهید. طراحی مینیمال و کاربردی این ابزار، برای ورزشکاران، دانشجویان یا حتی مدیران پروژه مناسب است. این پروژه تجربه‌ای روان و کاربرپسند ارائه می‌دهد و می‌تواند همراهی مطمئن برای کنترل بهتر زمان باشد.",
            price: "5$",
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
            alt: "Responsive Admin Dashboard",
            link: "/ProductsPage/2",
            project_link: "https://responsiveadmindashboardpage.netlify.app/",
            title: "Responsive Dashboard",
            description: "داشبورد ریسپانسیو با طراحی منعطف، مناسب برای مدیریت داده‌ها و آمارهای مختلف است. این پروژه برای هر دستگاهی، از موبایل گرفته تا دسکتاپ، سازگاری کامل دارد. ظاهر جذاب و کاربرپسند، استفاده از آن را برای کاربران آسان و لذت‌بخش می‌کند.",
            price: "10$",
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
            alt: "LoginForm-Project",
            link: "/ProductsPage/3",
            project_link: "https://thisiscarddesign.netlify.app/",
            title: "Card Design",
            description: "طراحی کارت یکی از المان‌های مهم در رابط کاربری است. در این پروژه کارت‌ها با ظاهری ساده اما مدرن و جذاب طراحی شده‌اند تا بتوانند اطلاعات مهم را به‌صورت خلاصه و واضح نمایش دهند. مناسب برای وب‌سایت‌های فروشگاهی و پنل‌های مدیریت.",
            price: "Free",
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
            alt: "Password Generator",
            link: "/ProductsPage/4",
            project_link: "https://yourstrongpasswordgenerator.netlify.app/",
            title: "Password Generation",
            description: "تولید رمز عبور قدرتمند و ایمن، دغدغه بسیاری از کاربران است. این پروژه با الگوریتم‌های تصادفی، رمزهای امن و منحصر‌به‌فرد ایجاد می‌کند و امنیت حساب‌های کاربری شما را تضمین می‌کند.",
            price: "4$",
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
                  src_one: "/Image06.jpg",
                  src_two: "/Image07.jpg",
                  src_three: "/Image01.jpg"
            }],
            alt: "To Do List App",
            link: "/ProductsPage/5",
            project_link: "https://yourowntodolists.netlify.app/",
            title: "ToDo List App",
            description: "مدیریت وظایف روزانه با ToDo List App ساده‌تر از همیشه است. این پروژه با طراحی تمیز و مینیمال، کمک می‌کند تا کارهای روزانه را ثبت و پیگیری کنید. مناسب افراد پرمشغله و علاقه‌مند به نظم شخصی.",
            price: "7$",
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
                  src_one: "/Image07.jpg",
                  src_two: "/Image01.jpg",
                  src_three: "/Image02.jpg"
            }],
            alt: "Movie Guide Project",
            link: "/ProductsPage/6",
            project_link: "https://github.com/MortezaKoocheBlacki/Movie-Guide-App-Without-any-API-",
            title: "Movie Guide",
            description: "عاشق فیلم هستید؟ Movie Guide اطلاعات کامل فیلم‌ها را به همراه پوستر و توضیحات جذاب ارائه می‌کند. این پروژه مناسب دوست‌داران سینما و کسانی است که می‌خواهند بهترین فیلم‌ها را پیدا کنند.",
            price: "6$",
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
                  src_one: "/Image01.jpg",
                  src_two: "/Image02.jpg",
                  src_three: "/Image03.jpg"
            }],
            alt: "OTP Generator Project",
            link: "/ProductsPage/7",
            project_link: "https://otpgeneratorpage.netlify.app/",
            title: "OTP Generator Project",
            description: "پروژه ساعت با طراحی مدرن و زیبا، زمان را به شکلی متفاوت نمایش می‌دهد. علاوه بر نمایش زمان دقیق، ظاهری چشم‌نواز دارد که می‌تواند در هر وب‌سایتی مورد استفاده قرار گیرد.",
            price: "5$",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 8,
            cover__image: "/Image01.jpg",
            image_sources: [{
                  src_one: "/Image01.jpg",
                  src_two: "/Image02.jpg",
                  src_three: "/Image03.jpg"
            }],
            alt: "Website Dashboard",
            link: "/ProductsPage/8",
            project_link: "https://webpagedashboard.netlify.app/",
            title: "Website Dashboard (not responsive)",
            description: "این داشبورد وب‌سایت، ابزاری حرفه‌ای برای مدیریت محتوا و داده‌ها است. طراحی ریسپانسیو و مدرن آن، مدیریت آسان‌تر وب‌سایت را ممکن می‌کند و تجربه کاربری بهتری را برای مدیران سایت فراهم می‌آورد.",
            price: "12$",
            technologies: [
                  { id: "tailwind", icon: <RiTailwindCssFill /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "react", icon: <FaReact /> },
            ],
      },
      {
            id: 9,
            cover__image: "/Image02.jpg",
            image_sources: [{
                  src_one: "/Image02.jpg",
                  src_two: "/Image03.jpg",
                  src_three: "/Image04.jpg"
            }],
            alt: "LoginForm-Project",
            link: "/ProductsPage/9",
            project_link: "https://miladicalender.netlify.app/",
            title: "Simple Calender",
            description: "تقویم ساده با رابط کاربری زیبا و روان، مناسب برای مدیریت تاریخ‌ها و یادآوری رویدادها است. این پروژه برای افرادی طراحی شده است که به دنبال راه‌حلی کاربردی اما سبک هستند.",
            price: "5$",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 10,
            cover__image: "/Image03.jpg",
            image_sources: [{
                  src_one: "/Image03.jpg",
                  src_two: "/Image04.jpg",
                  src_three: "/Image05.jpg"
            }],
            alt: "Responisve Dashboard",
            link: "/ProductsPage/10",
            project_link: "https://responsiveadmindashboard-react.netlify.app/",
            title: "Responsive Dashboard",
            description: "داشبورد ریسپانسیو نسخه دوم با تمرکز بر تجربه کاربری بهتر و ظاهری حرفه‌ای طراحی شده است. داده‌ها به‌صورت ساختارمند و منظم نمایش داده می‌شوند و استفاده از آن در هر دستگاهی بدون محدودیت ممکن است.",
            price: "14$",
            technologies: [
                  { id: "tailwind", icon: <RiTailwindCssFill /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "react", icon: <FaReact /> },
            ],
      },
      {
            id: 11,
            cover__image: "/Image04.jpg",
            image_sources: [{
                  src_one: "/Image04.jpg",
                  src_two: "/Image05.jpg",
                  src_three: "/Image06.jpg"
            }],
            alt: "Poll Design",
            link: "/ProductsPage/11",
            project_link: "https://polluidesign.netlify.app/",
            title: "Poll Design",
            description: "با Poll Design نظرسنجی‌های خود را به شیوه‌ای مدرن و جذاب ایجاد کنید. این پروژه با طراحی ساده و کاربرپسند، تجربه‌ای روان برای جمع‌آوری نظرات کاربران ارائه می‌دهد. امکان استفاده در وب‌سایت‌ها و اپلیکیشن‌ها، آن را به ابزاری عالی برای تعامل بهتر با مخاطبان تبدیل کرده است. مناسب برای مدیران محصول، وب‌مسترها و هر کسی که به دنبال دریافت بازخورد سریع و مؤثر است.",
            price: "7$",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 12,
            cover__image: "/Image05.jpg",
            image_sources: [{
                  src_one: "/Image05.jpg",
                  src_two: "/Image06.jpg",
                  src_three: "/Image07.jpg"
            }],
            alt: "Personal Weblog",
            link: "/ProductsPage/12",
            project_link: "https://thisispersonalweblog.netlify.app/",
            title: "Personal Weblog",
            description: "وبلاگ شخصی با ساختاری ساده اما زیبا، محلی برای نوشتن ایده‌ها، تجربیات و مطالب دلخواه شما است. طراحی ریسپانسیو و بهینه، خواندن مطالب را برای کاربران لذت‌بخش‌تر می‌کند.",
            price: "4$",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 13,
            cover__image: "/Image06.jpg",
            image_sources: [{
                  src_one: "/Image06.jpg",
                  src_two: "/Image07.jpg",
                  src_three: "/Image01.jpg"
            }],
            alt: "LoginForm-Project",
            link: "/ProductsPage/13",
            project_link: "https://enjoylisteningmusics.netlify.app/",
            title: "Music Player",
            description: "پخش‌کننده موسیقی مدرن که رابط کاربری شیک و کاربرپسندی دارد. این پروژه قابلیت پخش آهنگ‌ها، توقف، تغییر ترک و مدیریت لیست پخش را فراهم می‌کند و تجربه گوش دادن موسیقی را لذت‌بخش‌تر می‌سازد.",
            price: "6$",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 14,
            cover__image: "/Image07.jpg",
            image_sources: [{
                  src_one: "/Image07.jpg",
                  src_two: "/Image01.jpg",
                  src_three: "/Image02.jpg"
            }],
            alt: "Count Down",
            link: "/ProductsPage/14",
            project_link: "https://github.com/MortezaKoocheBlacki/Count-Down",
            title: "Count Down",
            description: "تایمر شمارش معکوس ساده اما کاربردی، مناسب برای رویدادها، کمپین‌های تبلیغاتی و حتی استفاده شخصی. طراحی تمیز و جذاب، آن را برای هر وب‌سایتی قابل استفاده کرده است.",
            price: "Free",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
                  { id: "js", icon: <IoLogoJavascript /> },
            ],
      },
      {
            id: 15,
            cover__image: "/Image01.jpg",
            image_sources: [{
                  src_one: "/Image01.jpg",
                  src_two: "/Image02.jpg",
                  src_three: "/Image03.jpg"
            }],
            alt: "LoginForm-Project",
            link: "/ProductsPage/15",
            project_link: "https://github.com/MortezaKoocheBlacki/According",
            title: "Accordion",
            description: "آکاردئون ساده و کاربردی برای نمایش محتوای دسته‌بندی‌شده در کمترین فضا. این پروژه با طراحی سبک و مینیمال، تجربه‌ای بهتر در نمایش داده‌های زیاد در صفحات وب ایجاد می‌کند.",
            price: "Free",
            technologies: [
                  { id: "html", icon: <FaHtml5 /> },
                  { id: "css", icon: <FaCss3 /> },
            ],
      },
]

export default products_list;