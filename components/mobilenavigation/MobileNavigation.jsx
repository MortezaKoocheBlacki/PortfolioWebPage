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
      const navRef = useRef(null);

      const navItems = [
            { icon: <FaHome />, label: 'خانه', address: "/" },
            { icon: <GoProjectSymlink />, label: 'پروژه ها', address: "/ProjectsPage" },
            { icon: <MdOutlineProductionQuantityLimits />, label: 'محصولات', address: "/ProductsPage" },
            { icon: <MdArticle />, label: 'مقالات', address: "/Articles" },
            { icon: <FaQuestion />, label: 'درباره من', address: "/AboutMe" },
            { icon: <FaAddressCard />, label: 'رزومه من', address: "/MyResume" },
      ]; // icons and addresses for the navigation items

      useEffect(() => {
            const handleResize = () => {
                  setIsVisible(window.innerWidth <= 650); // Show navigation only on small screens
            };

            const handleRouteChange = (url) => {
                  const normalizedUrl = url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url; // Normalize URL to handle trailing slashes
                  const currentItemIndex = navItems.findIndex(item => item.address === normalizedUrl); // Find the index of the current route in the navigation items
        
                  if (currentItemIndex !== -1) { // If the current route matches one of the navigation items
                        setActiveIndex(currentItemIndex);
                  } else { // If the current route does not match, find the first item that matches the prefix
                        const prefixMatchIndex = navItems.findIndex(item => {
                              if (item.address === '/') return false;
                              return normalizedUrl.startsWith(item.address);
                        });
                        setActiveIndex(prefixMatchIndex !== -1 ? prefixMatchIndex : 0); // Default to the first item if no match is found
                  }
            };
    
            handleResize();
            handleRouteChange(router.pathname); // Initialize active index based on the current route

            window.addEventListener('resize', handleResize);
            router.events.on('routeChangeComplete', handleRouteChange); // Listen for route changes to update the active index

            return () => { // Clean up event listeners
                  window.removeEventListener('resize', handleResize); // Clean up event listeners on unmount
                  router.events.off('routeChangeComplete', handleRouteChange); // Clean up route change listener
            };
      }, [router.pathname]);

      if (!isVisible) {
            return null;
      }

      return (
            <div className={styles.mobileNavigation}>
                  <ul ref={navRef} role="navigation" aria-label="منوی ناوبری اصلی">
                        {navItems.map((item, index) => (
                              <li
                                    key={index}
                                    className={index === activeIndex ? styles.active : ''}
                              >
                                    {/* the reason I used passHref & legacyBehavior is that I used <a></a> tag inside of that. */}
                                    <Link href={item.address} passHref legacyBehavior>
                                          <a
                                                aria-label={item.label}
                                                aria-current={index === activeIndex ? "page" : undefined}
                                          >
                                                <span className={styles.icon}>{item.icon}</span>
                                          </a>
                                    </Link>
                              </li>
                        ))}

                        
                  </ul>
            </div>
      );
};

export default MobileNavigation;