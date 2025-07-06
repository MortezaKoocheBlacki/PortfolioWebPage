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
                  strings: ["YouTuber", "Blogger", "FrontEnd Developer"],
                  typeSpeed: 100,
                  backSpeed: 100,
                  backDelay: 1000,
                  loop: true,
            });

            // Cleanup on unmount
            return () => {
                  typedInstance.destroy();
            };
      }, []);

      return (
            <section className={styles.home} id="home">
                  <div className={styles.home_content}>
                        <h3>Hello, Welcome here</h3>
                        <h1>I am Koochemeshki</h1>
                        <h3>
                              And I am a <span ref={typedRef}></span>
                        </h3>
                        <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo quos dicta
                              enim id voluptatum labore sequi odio optio! Recusandae, praesentium! Libero
                              voluptatibus minima rerum, earum placeat deleniti iusto quidem?
                        </p>

                        <div className={styles.social_media}>
                              <Link href="#"><FaInstagram /></Link>
                              <Link href="#"><FaTwitter /></Link>
                              <Link href="#"><FaLinkedin /></Link>
                              <Link href="#"><FaYoutube /></Link>
                              <Link href="#"><FaDribbble /></Link>
                        </div>

                        <Link href="#" className={styles.btn}>Download CV</Link>
                  </div>

                  <div className={styles.home_image}>
                        <Image src="/Home.jpg" alt="Home Image" className={styles.image} fill />
                  </div>
            </section>
      );
}

export default WelcomeSection;
