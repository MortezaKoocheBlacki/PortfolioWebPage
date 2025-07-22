import React from 'react'
import styles from "./InterestsBox.module.css"


function InterestsBox({interest}) {
      return (
            <li className={styles.list__item}>
                  <span className={styles.icon}>{interest.icon}</span> {interest.name}
            </li>
      );
}

export default InterestsBox