// ProjectCard.jsx

import { ProjectImage } from './ProjectImage.jsx'
import { ProjectInfo } from './ProjectInfo.jsx'

export const ProjectCard = () => {
  return (
    <div className="project-card">
      <ProjectImage />
      <ProjectInfo />
    </div>
  )
}
