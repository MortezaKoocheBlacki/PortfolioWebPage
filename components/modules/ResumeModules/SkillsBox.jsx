import React from 'react'
import styles from "./SkillsBox.module.css"

function SkillsBox({ skill }) {
      const {skill_name, skill_percent} = skill

      return (
            <div>
                  <div className={styles.box}>
                        <h4>{skill_name}</h4>
                        <div className={styles.percent}>
                              <div style={{ width: skill_percent }} className={styles.progress}></div>
                        </div>
                  </div>
            </div>
      );
}

export default SkillsBox