// components/NewsList.js
import React, { useEffect } from 'react';
import NewsCard from './NewsCard';
import { newsData } from '@/utils/constant/newsList';
import styles from './NewsList.module.css'; // Using CSS Modules

const NewsList = ({ category }) => {
      const selectedNews = newsData[category] || [];

      useEffect(() => {
            // This is the original random number generation logic, included
            // here to show it's not lost, but not actively used for rendering
            // the static cards in this example.
            const getRndInteger = (min, max) => {
                  return Math.floor(Math.random() * (max - min)) + min;
            };

            let numbers = [];
            for (let i = 0; i <= 4; i++) {
                  let number = getRndInteger(6, 15);
                  numbers.push(number);
            }
            console.log("Random numbers from original script:", numbers);
      }, []);

      return (
            <div className={styles.container}>
                  {selectedNews.length > 0 ? (
                        selectedNews.map((item, index) => (
                              <NewsCard
                                    key={index} // Using index as key is okay for static lists that don't change order
                                    image={item.image}
                                    title={item.title}
                                    description={item.description}
                                    newsURL={item.newsURL}
                                    color="#8e4288"
                              />
                        ))
                  ) : (
                        <p>No news found for this category.</p>
                  )}
            </div>
      );
};

export default NewsList;