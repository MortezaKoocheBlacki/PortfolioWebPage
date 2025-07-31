import React, { useEffect, useState } from 'react'
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

import { ImLeaf } from "react-icons/im";

function Header() {
      const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
            const handleResize = () => {
                  setIsMobile(window.innerWidth <= 600);
            };
            handleResize(); // Set initial state
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
      }, []);


      return (
            <header className={`${styles.header} ${isMobile ? styles.hiddenOnMobile : ''}`}>
                  <Link href="/">
                        <ImLeaf className={styles.main_logo} />
                  </Link>
                  <nav className={styles.navigation}>
                        <ul className={styles.navList}>
                              <li className={styles.navItem}>
                                    <Link href="/">خانه</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/ProjectsPage">پروژه ها</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/ProductsPage">محصولات</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/Articles">مقالات</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/AboutMe">درباره من</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/MyResume">رزومه من</Link>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}

export default Header