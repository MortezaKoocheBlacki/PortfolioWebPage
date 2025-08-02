import React from 'react'
import { useRouter } from "next/router";
import { projects_list } from '@/utils/constant/ProjectsList';
import ProjectDetails from '@/components/templates/ProjectDetails';

function ProjectDetail() {
      const router = useRouter(); // Access the router object to get query parameters
      // Use router.query to get the projectId from the URL
      // The projectId will be available once the component is mounted
      const { projectId } = router.query; // Extract projectId from the query parameters

      if (!projectId) return <p>Loading...</p>;
      
      const details = projects_list[Number(projectId) - 1]; // Assuming projectId is 1-based index
      // If details is undefined, it means the projectId is invalid or out of range

      if (!details) return <p>Projects not found</p>; // Display an error message if the project is not found

      return <ProjectDetails project={details} /> // Render the ProjectDetails component with the project details
}

export default ProjectDetail