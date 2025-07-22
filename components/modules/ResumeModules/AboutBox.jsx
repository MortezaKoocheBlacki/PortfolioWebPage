import React from 'react'
import styles from "./AboutBox.module.css"

function AboutBox({ company_data }) {
      const { year_work, company_name, work_position, work_description } = company_data;
      return (
            <div className={styles.box}>
                  <div className={styles.year_company}>
                        <h5>{year_work}</h5>
                        <h5>{company_name}</h5>
                  </div>
                  <div className={styles.text}>
                        <h4>{work_position}</h4>
                        <p className={styles.paragraph}>{work_description}</p>
                  </div>
            </div>
      );
}

export default AboutBox