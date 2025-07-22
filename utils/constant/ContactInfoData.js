import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEarthAmericas, FaLocationDot } from "react-icons/fa6";

const contact_info = [
      {
            id: 1,
            icon: <FaPhoneAlt />,
            phone_number: "0937 xxx xxx 8",
            email_address: "",
            webpage_address: "",
            linkedin_address: "",
            location_address: "",
      },
      {
            id: 2,
            icon: <MdEmail /> ,
            phone_number: "",
            email_address: "mo-----mail@gmail.com",
            webpage_address: "",
            linkedin_address: "",
            location_address: "",
      },
      {
            id: 3,
            icon: <FaEarthAmericas />,
            phone_number: "",
            email_address: "",
            webpage_address: "mywebpage.com",
            linkedin_address: "",
            location_address: "",
      },
      {
            id: 4,
            icon: <FaLinkedin />,
            phone_number: "",
            email_address: "",
            webpage_address: "",
            linkedin_address: "www.linkedin.com",
            location_address: "",
      },
      {
            id: 5,
            icon: <FaLocationDot />,
            phone_number: "",
            email_address: "",
            webpage_address: "",
            linkedin_address: "",
            location_address: "Iran, Tehran",
      },
]

export {contact_info}