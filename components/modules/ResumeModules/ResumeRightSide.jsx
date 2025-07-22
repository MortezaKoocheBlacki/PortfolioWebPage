import React from 'react'
import styles from "./ResumeRightSide.module.css"

import { company_data, skills_data, interests_data } from '@/utils/constant/ResumeData';
import AboutBox from './AboutBox';
import SkillsBox from './SkillsBox';
import InterestsBox from './InterestsBox';

function ResumeRightSide() {
      return (
            <div className={styles.right_side}>
                  <div className={styles.about}>
                        <h2 className={styles.title2}>profile</h2>
                        <p className={styles.paragraph}>I&apos;m Morteza, a frontend developer focused on React and Next.js. I&apos;m passionate about designing fast, well-structured user interfaces with a smooth user experience. The resume on this page provides a general overview of my skills, professional journey, and the projects I&apos;ve worked on.  <br /> <br /> However, beyond the resume, I&apos;ve always strived to be a continuous learner; someone who, alongside technical skills, also values healthy communication, responsibility, and personal growth. I hope this resume serves as the starting point for a constructive conversation between us.</p>
                  </div>

                  <div className={styles.about}>
                        <h2 className={styles.title2}>Eperience</h2>
                        {
                              company_data.map((data) => (
                                    <AboutBox key={data.id} company_data={data} />
                              ))
                        }
                  </div>

                  <div className={`${styles.about} ${styles.skills}`}>
                        <h2 className={styles.title2}>Professional Skills</h2>

                        {
                              skills_data.map((skill) => (
                                    <SkillsBox key={skill.id} skill={skill} />
                              ))
                        }
                  </div>

                  <div className={`${styles.about} ${styles.interests}`}>
                        <h2 className={styles.title2}>Interests</h2>

                        <ul className={styles.list__container}>
                              {
                                    interests_data.map((interest) => (
                                          <InterestsBox key={interest.id} interest={interest} />
                                    ))
                              }
                        </ul>
                  </div>
            </div>
      );
}

export default ResumeRightSide