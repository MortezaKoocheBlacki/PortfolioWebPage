import React from 'react'
import WelcomeSection from '../modules/WelcomeSection';
import AboutSummary from '../modules/AboutSummary';
import MyServices from '../modules/MyServices';
import ProjectsList from '../modules/ProjectsList';
import ContactMe from '../modules/ContactMe';
import {latest_project, list_title} from '@/utils/constant/LatestProjectList';

function HomePage() {
      return (
            <>
                  <WelcomeSection />
                  <AboutSummary />
                  <MyServices />
                  <ProjectsList list={latest_project} title={list_title} />
                  <ContactMe />
            </>
      );
}

export default HomePage