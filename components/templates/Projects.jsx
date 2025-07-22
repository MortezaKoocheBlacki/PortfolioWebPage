import React from 'react'
import styles from "./Projects.module.css"
import ProjectsList from '../modules/ProjectsList';
import {projects_list, list_title} from '@/utils/constant/ProjectsList';

function Projects() {
      return (
            <>
                  <ProjectsList list={projects_list} title={list_title} />
            </>
      );
}

export default Projects