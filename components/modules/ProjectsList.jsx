import React from 'react'
import styles from "./ProjectsList.module.css"
import ProjectCard from './ProjectCard';


function ProjectsList({list, title}) {
      return (
            <section className={styles.portfolio} id="portfolio">
                  <h2 className="heading"> {title} <span> پروژه ها </span> </h2>

                  <div className={styles.portfolio_container}>
                        {
                              list.map((list_item) => (
                                    <ProjectCard key={list_item.id} list_item={list_item} />
                              ))
                        }
                  </div>
            </section>
      );
}

export default ProjectsList