import { FaCode, FaPalette } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";

const services = [
      {
            id: 1,
            service_name: "توسعه فرانت اند",
            service_description: "یکی از کارهایی که علاقه مند به انجام اون هستم، توسعه فرانت اند هستش و علاقه من به طراحی رابط های کابری سریع، ساخت یافته و با تجربه کاربری روان هستم.",
            service_icon: <FaChartColumn />,
            service_link: "/",
      },
      {
            id: 2,
            service_name: "دیزاین های خلاقانه",
            service_description: "در توسعه هایی که انجام میدم، سعی میکنم که خلاقیت و حس روون بودن و تجربه کاری خوبی رو انتقال بدم. چیزی که باعث میشه هنگام کار با وب سایت یا نرم افزار حس خوبی رو داشته باشید",
            service_icon: <FaPalette />,
            service_link: "/",
      },
      {
            id: 3,
            service_name: "کد نویسی تمیز",
            service_description: "در توسعه نرم افزار و پیاده سازی فرانت اند، همیشه تلاش خودم رو کردم و میکنم که کدهای تمیزی رو داشته باشم و کد نویسی تمیز رو رعایت بکنم و همیشه توی این کار، مطالب جدیدی هست که میتونم یاد بگیرم",
            service_icon: <FaCode  />,
            service_link: "/",
      },
]

export default services;