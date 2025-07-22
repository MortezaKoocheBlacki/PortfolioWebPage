import Image from 'next/image';
import React from 'react'

import styles from "./ResumeLeftSide.module.css"
import ContactInfo from './ContactInfo';

function ResumeLeftSide() {
      return (
            <div className={styles.left_side}>
                  <div className={styles.profile_text}>
                        <div className={styles.image_box}>
                              <Image src="/MyProfileImage.jpg" alt="profile_image" className={styles.profile_image} width={200} height={200} />
                        </div>
                        <h2>Koochemeshki <br /> <span> Web Developer </span></h2>
                  </div>

                  <ContactInfo />
            </div>
      );
};

export default ResumeLeftSide