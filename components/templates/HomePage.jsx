import React from 'react'
import styles from "./HomePage.module.css"
import WelcomeSection from '../modules/WelcomeSection';
import AboutSummary from '../modules/AboutSummary';
import MyServices from '../modules/MyServices';

function HomePage() {
      return (
            <>
                  <WelcomeSection />
                  <AboutSummary />
                  <MyServices />
            </>
      );
}

export default HomePage