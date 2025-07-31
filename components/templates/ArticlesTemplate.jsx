'use client'; // Essential for using client-side hooks

import { useState, useEffect, useCallback } from 'react';
import styles from "./ArticlesTemplate.module.css";
import CategoryOptions from '../modules/ArticlesModules/CategoryOptions';
import NewsList from '../modules/ArticlesModules/NewsList';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const ArticlesTemplate = () => {
      const router = useRouter();
      const pathname = usePathname();
      const searchParams = useSearchParams();

      // Get the category from the URL, or null if not present
      const urlCategory = searchParams.get('category');

      // Initialize activeCategory:
      // 1. Use the URL category if it exists.
      // 2. Otherwise, default to 'general'.
      const [activeCategory, setActiveCategory] = useState(urlCategory || 'general');

      const categories = ["general", "entertainment", "health", "science", "sports", "technology"];

      // Function to create a URLSearchParams object with updated parameters
      const createQueryString = useCallback(
            (name, value) => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.set(name, value);
                  return params.toString();
            },
            [searchParams]
      );

      // Effect to set 'general' in the URL if no category is present on initial load
      useEffect(() => {
            // Only run this once on initial client-side render
            if (!urlCategory && activeCategory === 'general') {
                  const newQueryString = createQueryString('category', 'general');
                  // Use replace instead of push to avoid adding an extra entry to browser history
                  router.replace(`${pathname}?${newQueryString}`);
            }
      }, [urlCategory, activeCategory, createQueryString, pathname, router]);


      // Effect to sync state with URL if URL changes from outside (e.g., browser back/forward)
      useEffect(() => {
            if (urlCategory && urlCategory !== activeCategory) {
                  setActiveCategory(urlCategory);
            } else if (!urlCategory && activeCategory !== 'general') {
                  // If URL category is removed, reset to general if current activeCategory is not general
                  setActiveCategory('general');
            }
      }, [searchParams, activeCategory, urlCategory]);


      const handleCategorySelect = (category) => {
            // Only update if the category is actually changing to avoid unnecessary URL pushes
            if (category !== activeCategory) {
                  setActiveCategory(category); // Update local state immediately

                  // Update the URL query parameter
                  const newQueryString = createQueryString('category', category);
                  router.push(`${pathname}?${newQueryString}`);
            }
      };

      return (
            <div>
                  <div className={styles.header_container}>
                        <h4>مقالات و اخبار مختلف در حوزه تکنولوژی</h4>
                  </div>
                  <CategoryOptions
                        options={categories}
                        activeCategory={activeCategory}
                        onSelectCategory={handleCategorySelect}
                  />
                  <NewsList category={activeCategory} />
            </div>
      );
};

export default ArticlesTemplate;