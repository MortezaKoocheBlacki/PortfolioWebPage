import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "./ProjectCard.module.css";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function ProjectCard({ list_item }) {
      const { cover__image, alt, link, title, technologies, description } = list_item; // Destructure the properties from list_item
      
      return (
            <div className={styles.portfolio_box}>
                  <Image className={styles.image} src={cover__image} alt={alt} fill />

                  <div className={styles.portfolio_layer}>
                        <h4> {title} </h4>
                        
                        <div className={styles.tech_icons}>
                              {technologies.map(({ id, icon }) => (
                                    <div key={id} className={styles.tech_icon}>
                                          {icon}
                                    </div>
                              ))}
                        </div>

                        <Link href={link}><FaArrowUpRightFromSquare className={styles.icon} /></Link>
                  </div>
            </div>
      );
}

export default ProjectCard