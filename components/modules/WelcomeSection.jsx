import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaDribbble } from "react-icons/fa";
import styles from "./WelcomeSection.module.css";

function WelcomeSection() {
      const typedRef = useRef(null);

      useEffect(() => {
            const typedInstance = new Typed(typedRef.current, {
                  strings: ["توسعه دهنده فرانت اند", "برنامه نویس"],
                  typeSpeed: 100,
                  backSpeed: 100,
                  backDelay: 1000,
                  loop: true,
            }); // Initialize Typed.js

            // Cleanup on unmount
            return () => {
                  typedInstance.destroy();
            };
      }, []); // useEffect to initialize Typed.js

      return (
            <section className={styles.home} id="home">
                  <div className={styles.home_content}>
                        <h3>سلام خوش آمدید</h3>
                        <h1>مرتضی کوچه مشکی </h1>
                        <h3>
                              حوزه کاری:  <span ref={typedRef}></span>
                        </h3>
                        <p>
                              من مرتضی هستم، توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی React و Next.js. علاقه‌مند به طراحی رابط‌های کاربری سریع، ساخت‌یافته و با تجربه‌ی کاربری روان.
                              
                              همیشه تلاش کردم یک یادگیرنده‌ی پیوسته باشم؛ کسی که در کنار مهارت فنی، به ارتباطات سالم، مسئولیت‌پذیری و رشد فردی هم اهمیت می‌ده. امیدوارم این رزومه نقطه‌ی شروع گفت‌وگویی سازنده بین ما باشه.

                        </p>

                        <div className={styles.social_media}>
                              <Link href="https://instagram.com" target="_blank"><FaInstagram /></Link>
                              <Link href="https://twitter.com" target="_blank"><FaTwitter /></Link>
                              <Link href="https://linkedin.com" target="_blank"><FaLinkedin /></Link>
                              <Link href="https://youtube.com/" target="_blank"><FaYoutube /></Link>
                              <Link href="https://dribbble.com" target="_blank"><FaDribbble /></Link>
                        </div>

                        <Link href="/MyResume" className={styles.btn}>مشاهده رزومه</Link>
                  </div>

                  <div className={styles.home_image}>
                        <Image src="/Home.jpg" alt="Home Image" className={styles.image} width={1200} height={900} />
                  </div>
            </section>
      );
}

export default WelcomeSection;
