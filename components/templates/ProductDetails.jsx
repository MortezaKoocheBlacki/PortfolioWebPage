import React from 'react'
import styles from "./ProductDetails.module.css"

import { useState } from 'react';
import { useRouter } from 'next/router';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

function ProductDetails({ product }) {
      
      const {
            id,
            image_sources: [{ src_one: image_src1, src_two: image_src2, src_three: image_src3 }],
            title,
            technologies,
            project_link,
            description
      } = product;

      const subImageSrc1 = image_src1
      const subImageSrc2 = image_src2
      const subImageSrc3 = image_src3

      const router = useRouter();
      const handleGoBack = () => {
            router.back();
      }; // Function to handle back navigation

      const [mainImageSrc, setMainImageSrc] = useState(subImageSrc1); // State to manage the main image source

      const handleSubImageClick = (newSrc) => {
            setMainImageSrc(newSrc);
      }; // Function to change the main image when a sub-image is clicked

      return (
            <div className={styles.container}>
                  <button onClick={handleGoBack} className={styles.back__link}>
                        <FaArrowRight className={styles.icon} />
                  </button>
                  
                  <div className={styles.content__container}>
                        <h1 className={styles.project__title}>{title}</h1>
                        <p className={styles.project__description}>
                              {description}
                        </p>
                        
                        <div className={styles.tech_container}>
                              <h3>تکنلوژی هایی که مورد استفاده قرار گرفته:</h3>
                              <div className={styles.tech_icons}>
                                    {technologies.map(({ id, icon }) => (
                                          <div key={id} className={styles.tech_icon}>
                                                {icon}
                                          </div>
                                    ))}
                              </div>

                        </div>
                        <Link href={project_link} target="_blank" className={`${styles.project__link} btn`}>مشاهده پروژه</Link>
                  </div>
                  <div className={styles.image__container}>
                        <Image
                              src={mainImageSrc}
                              alt="Main Product Image"
                              width={350}
                              height={400}
                              className={styles.main__image}
                        />

                        <div className={styles.sub__images}>
                              <Image
                                    src={subImageSrc1}
                                    alt="Sub Image One"
                                    width={130}
                                    height={200}
                                    className={`${styles.sub__image__one} ${mainImageSrc === subImageSrc1 ? styles.active : ''}`}
                                    onClick={() => handleSubImageClick(subImageSrc1)}
                              />

                              <Image
                                    src={subImageSrc2}
                                    alt="Sub Image Two"
                                    width={130}
                                    height={200}
                                    className={`${styles.sub__image__two} ${mainImageSrc === subImageSrc2 ? styles.active : ''}`}
                                    onClick={() => handleSubImageClick(subImageSrc2)}
                              />

                              <Image
                                    src={subImageSrc3}
                                    alt="Sub Image Three"
                                    width={130}
                                    height={200}
                                    className={`${styles.sub__image__three} ${mainImageSrc === subImageSrc3 ? styles.active : ''}`}
                                    onClick={() => handleSubImageClick(subImageSrc3)}
                              />
                        </div>
                  </div>
            </div>
      );
}

export default ProductDetails