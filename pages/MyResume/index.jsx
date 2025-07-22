import React from 'react'
import styles from "./index.module.css"
import ResumeLeftSide from '@/components/modules/ResumeModules/ResumeLeftSide';
import ResumeRightSide from '@/components/modules/ResumeModules/ResumeRightSide';

function MyResume() {
      return (
            <div className={styles.container}>
                  <ResumeLeftSide />
                  <ResumeRightSide />
            </div>
      );
}

export default MyResume