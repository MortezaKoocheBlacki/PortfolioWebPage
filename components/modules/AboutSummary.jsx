import React from 'react'
import styles from "./AboutSummary.module.css"
import Image from 'next/image';
import Link from 'next/link';

function AboutSummary() {
      return (
            <section class={styles.about} id="about">
                  <div className={styles.about_image}>
                        <Image src="/About.jpg" alt="About Image" className={styles.image} fill />
                  </div>
        
                  <div className={styles.about_content}>
                        <h2 className="heading"> About <span> Me </span></h2>
                        <h3> Front-End Developer ! </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quae consectetur est dolore doloribus labore vero mollitia illum enim, at alias sunt voluptas perspiciatis. Numquam necessitatibus molestias expedita similique tempora nobis recusandae rerum quia hic cupiditate illo nemo architecto omnis accusamus rem, culpa quidem ratione consectetur nihil!</p>
                        <Link href="#" className="btn"> Read More </Link>
                  </div>
            </section>
      );
}

export default AboutSummary