import React from 'react'
import { useRouter } from "next/router";
import { projects_list } from '@/utils/constant/ProjectsList';
import ProjectDetails from '@/components/templates/ProjectDetails';

function ProjectDetail() {
      const router = useRouter();
      const { projectId } = router.query;

      if (!projectId) return <p>Loading...</p>;
      
      const details = projects_list[Number(projectId) - 1];

      if (!details) return <p>Car not found</p>;

      return <ProjectDetails project={details} />
}

export default ProjectDetail