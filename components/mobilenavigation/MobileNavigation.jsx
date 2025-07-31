import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styles from './MobileNavigation.module.css';
import { FaHome, FaQuestion, FaAddressCard } from 'react-icons/fa';
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import Link from 'next/link';

const MobileNavigation = () => {
      const router = useRouter();
      const [activeIndex, setActiveIndex] = useState(0);
      const [isVisible, setIsVisible] = useState(false);
      const [translateConstant, setTranslateConstant] = useState(0);
      const navRef = useRef(null);

      const navItems = [
            { icon: <FaHome />, label: 'خانه', address: "/" },
            { icon: <GoProjectSymlink />, label: 'پروژه ها', address: "/ProjectsPage" },
            { icon: <MdOutlineProductionQuantityLimits />, label: 'محصولات', address: "/ProductsPage" },
            { icon: <MdArticle />, label: 'مقالات', address: "/Articles" },
            { icon: <FaQuestion />, label: 'درباره من', address: "/AboutMe" },
            { icon: <FaAddressCard />, label: 'رزومه من', address: "/MyResume" },
      ];

      useEffect(() => {
            const handleResize = () => {
                  setIsVisible(window.innerWidth <= 650);

                  if (navRef.current) {
                        const itemWidth = navRef.current.offsetWidth / navItems.length;
                        setTranslateConstant(itemWidth);
                  }
            };

            const handleRouteChange = (url) => {
                  // Normalize paths to ensure a robust match (e.g., remove trailing slash)
                  const normalizedUrl = url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url;
                  const currentItemIndex = navItems.findIndex(item => item.address === normalizedUrl);
            
                  if (currentItemIndex !== -1) {
                        setActiveIndex(currentItemIndex);
                  } else {
                        // If no exact match is found, find the item whose address is a prefix of the URL
                        const prefixMatchIndex = navItems.findIndex(item => {
                              if (item.address === '/') return false; // Avoid matching the home page
                              return normalizedUrl.startsWith(item.address);
                        });
                        setActiveIndex(prefixMatchIndex !== -1 ? prefixMatchIndex : 0);
                  }
            };
        
            handleResize();
            handleRouteChange(router.pathname);

            window.addEventListener('resize', handleResize);
            router.events.on('routeChangeComplete', handleRouteChange);

            return () => {
                  window.removeEventListener('resize', handleResize);
                  router.events.off('routeChangeComplete', handleRouteChange);
            };
      }, [router.pathname]);

      if (!isVisible) {
            return null;
      }

      return (
            <div className={styles.mobileNavigation}>
                  <ul ref={navRef}>
                        {navItems.map((item, index) => (
                              <li
                                    key={index}
                                    className={index === activeIndex ? styles.active : ''}
                              >
                                    <Link href={item.address} passHref legacyBehavior>
                                          <a>
                                                <span className={styles.icon}>{item.icon}</span>
                                          </a>
                                    </Link>
                              </li>
                        ))}
                        <div
                              className={styles.indicator}
                              style={{ transform: `translateX(calc(${translateConstant}px * ${activeIndex}))` }}
                        >
                              <span></span>
                        </div>
                  </ul>
            </div>
      );
};

export default MobileNavigation;