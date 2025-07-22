import React from 'react'
import styles from "./AboutSummary.module.css"
import Image from 'next/image';
import Link from 'next/link';

function AboutSummary() {
      return (
            <section class={styles.about} id="about">
                  <div className={styles.about_image}>
                        <Image src="/About.jpg" alt="About Image" className={styles.image} width={1500} height={900} />
                  </div>
        
                  <div className={styles.about_content}>
                        <h2 className="heading"> درباره <span> من </span></h2>
                        <h3> توسعه دهنده فرانت اند </h3>
                        <p>
                              من مرتضی هستم، توسعه‌دهنده‌ی فرانت‌اند با تمرکز روی React و Next.js. علاقه‌مند به طراحی رابط‌های کاربری سریع، ساخت‌یافته و با تجربه‌ی کاربری روان.
                               همیشه تلاش کردم یک یادگیرنده‌ی پیوسته باشم؛ کسی که در کنار مهارت فنی، به ارتباطات سالم، مسئولیت‌پذیری و رشد فردی هم اهمیت می‌ده. امیدوارم این رزومه نقطه‌ی شروع گفت‌وگویی سازنده بین ما باشه.
                        </p>
                        <Link href="#" className="btn"> مطالعه بیشتر </Link>
                  </div>
            </section>
      );
}

export default AboutSummary