import React from 'react'
import styles from "./ContactInfo.module.css"

import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEarthAmericas, FaLocationDot } from "react-icons/fa6";

function ContactInfo() {
      

      return (
            <>
                  <div className={styles.contact_info}>
                        <h3 className={styles.title}>contact info</h3>
                        <ul>
                               <li>
                                    <span className={styles.icon}>
                                          <FaPhoneAlt />
                                    </span>
                                    <span className={styles.text}>+98937 xxx xxx 8</span>
                              </li>

                              <li>
                                    <span className={styles.icon}>
                                          <MdEmail />
                                    </span>
                                    <span className={styles.text}>my_mail@gmail.com</span>
                              </li>

                              <li>
                                    <span className={styles.icon}>
                                          <FaEarthAmericas />
                                    </span>
                                    <span className={styles.text}>www.mywebsite.com</span>
                              </li>

                              <li>
                                    <span className={styles.icon}>
                                          <FaLinkedin />
                                    </span>
                                    <span className={styles.text}>www.mylinkedin.com</span>
                              </li>
                              
                              <li>
                                    <span className={styles.icon}>
                                          <FaLocationDot />
                                    </span>
                                    <span className={styles.text}>Iran, Tehran, Tehran</span>
                              </li>
                        </ul>
                  </div>

                  <div className={`${styles.contact_info} ${styles.education}`}>
                        <h3 className={styles.title}>education</h3>
                        <ul>
                              <li>
                                    <h5>2021 - 2026</h5>
                                    <h4>bachelor degree in computer engineering</h4>
                                    <h4>University: Tehran South Azad University</h4>
                              </li>
                              <li>
                                    <h5>2023 - 2024</h5>
                                    <h4>JavaScript Course</h4>
                                    <h4>Education Course</h4>
                              </li>
                              <li>
                                    <h5>2024 - 2025</h5>
                                    <h4>React.JS & Next.JS</h4>
                                    <h4>Education Course</h4>
                              </li>
                        </ul>
                  </div>

                  <div className={`${styles.contact_info} ${styles.language}`}>
                        <h3 className={styles.title}>Languages</h3>
                        <ul>
                              <li>
                                    <span className={styles.text}>English</span>
                                    <span className={styles.percent}>
                                          <div style={{ width: '60%' }}></div>
                                    </span>
                              </li>

                              <li>
                                    <span className={styles.text}>Germany</span>
                                    <span className={styles.percent}>
                                          <div style={{ width: '10%' }}></div>
                                    </span>
                              </li>

                              <li>
                                    <span className={styles.text}>French</span>
                                    <span className={styles.percent}>
                                          <div style={{ width: '5%' }}></div>
                                    </span>
                              </li>
                        </ul>
                  </div>
            </>
      );
}

export default ContactInfo