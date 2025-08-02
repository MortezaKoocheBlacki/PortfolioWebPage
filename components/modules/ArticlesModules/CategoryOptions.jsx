// components/CategoryOptions.js
import React from 'react';
import styles from './CategoryOptions.module.css'; 

const CategoryOptions = ({ options, activeCategory, onSelectCategory }) => {
      return (
            <div className={styles.options_container}>
                  {options.map((option) => (
                        <button
                              key={option}
                              className={`${styles.option} ${activeCategory === option ? styles.active : ""}`} // Apply active class if the option is selected
                              type="button"
                              onClick={() => onSelectCategory(option)} // Handle category selection
                        >
                              {option}
                        </button>
                  ))}
            </div>
      );
};

export default CategoryOptions;