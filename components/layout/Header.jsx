import React from 'react'
import styles from './Header.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
      return (
            <header className={styles.header}>
                  <Link href="/">
                        <Image 
                              src="/favicon.ico"
                              width={100}
                              height={100}
                              alt="Logo"
                        />
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
                                    <Link href="/AboutMe">درباره من</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/MyResume">رزومه من</Link>
                              </li>
                              <li className={styles.navItem}>
                                    <Link href="/about-me"></Link>
                              </li>
                        </ul>
                  </nav>
            </header>
      );
}

export default Header