import Link from 'next/link';
import React from 'react'
import styles from "./Footer.module.css"

import { FaArrowCircleUp } from "react-icons/fa";

function Footer() {
      return (
            <footer className={styles.footer}>
                  
                  <div className={styles.footer_text}>
                        <p> Copyright &copy; 2025 by Koochemeshki | All Rights Reserved. </p>
                  </div>

                  <div className={styles.footer_iconTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <FaArrowCircleUp className={styles.icon} />
                  </div>
            </footer>
      );
}

export default Footer