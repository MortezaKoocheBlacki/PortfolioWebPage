import Image from 'next/image';
import React from 'react'
import styles from "./ProductCard.module.css"
import Link from 'next/link';

function ProductCard({ product }) {
      const {
            id,
            cover__image,
            image_sources: [{ src_one: image_src1, src_two: image_src2, src_three: image_src3 }],
            alt,
            link,
            category,
            title,
            description,
            technologies
      } = product

      return (
            <div className={styles.card}>
                  <div className={styles.imgBx} style={{ '--img': `url(${cover__image})` }}></div>
                  <div className={styles.content}>
                        <h3>
                              {title}
                              <br></br>
                              <span>
                                    {description}
                              </span>
                        </h3>
                        <div className={styles.tech_icons}>
                              {technologies.map(({ id, icon }) => (
                                    <div key={id} className={styles.tech_icon}>
                                          {icon}
                                    </div>
                              ))}
                        </div>
                        <Link href={link} className={styles.seeBtn}>see the project</Link>
                  </div>
            </div>
      );
}

export default ProductCard