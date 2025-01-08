// ProjectCard.jsx

import { ProjectImage } from './ProjectImage.jsx'
import { ProjectInfo } from './ProjectInfo.jsx'
import { ProjectButtons } from './ProjectButtons.jsx'

export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <ProjectImage project={project} />
      <div className="project-content">
        <ProjectInfo project={project} />
        <ProjectButtons 
          netlifyLink={project.netlify}
          githubLink={project.github}
        />
      </div>
    </div>
  )
}
