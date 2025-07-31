// components/CategoryOptions.js
import React from 'react';
import styles from './CategoryOptions.module.css'; // Using CSS Modules

const CategoryOptions = ({ options, activeCategory, onSelectCategory }) => {
      return (
            <div className={styles.options_container}>
                  {options.map((option) => (
                        <button
                              key={option}
                              className={`${styles.option} ${activeCategory === option ? styles.active : ""}`}
                              onClick={() => onSelectCategory(option)}
                        >
                              {option}
                        </button>
                  ))}
            </div>
      );
};

export default CategoryOptions;