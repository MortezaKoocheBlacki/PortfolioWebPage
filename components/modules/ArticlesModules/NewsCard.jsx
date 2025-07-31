// components/NewsCard.js
import React, { useEffect, useRef } from 'react';
import Image from 'next/image'; // Optimized image component for Next.js
import styles from './NewsCard.module.css'; // Using CSS Modules

const NewsCard = ({ image, title, description, newsURL, color }) => {

      const cardRef = useRef(null);

      useEffect(() => {
            const card = cardRef.current;
            if (!card) return;

            // Handle mouse movement to update CSS variables for the glowing effect
            const handleMouseMove = (e) => {
                  // Calculate the x and y coordinates relative to the card element
                  const x = e.pageX - card.offsetLeft;
                  const y = e.pageY - card.offsetTop;

                  // Set CSS custom properties for x and y coordinates
                  card.style.setProperty("--x", x + "px");
                  card.style.setProperty("--y", y + "px");
            };

            // Add mousemove event listener to the card
            card.addEventListener("mousemove", handleMouseMove);

            // Cleanup function to remove the event listener when the component unmounts
            return () => {
                  card.removeEventListener("mousemove", handleMouseMove);
            };
      }, []); // Empty dependency array ensures this effect runs once on mount

      return (
            <div className={styles.news_card} style={{ '--clr': color }} ref={cardRef}>
                  <div className={styles.news_image_container}>
                        <Image
                              src={image || "/Images/newspaper.png"} // Use absolute path for public folder
                              alt="news image"
                              width={200} // Specify width and height for Image component
                              height={200} // Adjust as needed, based on object-fit: contain
                              objectFit="contain" // Keep the object-fit property
                        />
                  </div>
                  <div className={styles.news_content}>
                        <div className={styles.news_title}>
                              {title}
                        </div>
                        <div className={styles.news_description}>
                              {description || ""}
                        </div>
                        <a href={newsURL} target="_blank" rel="noopener noreferrer" className={styles.view_button}>
                              مطالعه بیشتر
                        </a>
                  </div>
            </div>
      );
};

export default NewsCard;