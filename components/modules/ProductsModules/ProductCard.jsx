import Image from 'next/image';
import React from 'react'
import styles from "./ProductCard.module.css"
import Link from 'next/link';

function ProductCard({ product }) {
      const {
            cover__image,
            link,
            title,
            price,
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
                                    Project Price: {price}
                              </span>
                        </h3>
                        <div className={styles.tech_icons}>
                              {technologies.map(({ id, icon }) => (
                                    <div key={id} className={styles.tech_icon}>
                                          {icon}
                                    </div>
                              ))}
                        </div>
                        <Link href={link} className={styles.seeBtn}>جزئیات پروژه</Link>
                  </div>
            </div>
      );
}

export default ProductCard