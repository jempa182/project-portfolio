// ProjectInfo.jsx

export const ProjectInfo = ({ project }) => {
  return (
    <div className="project-info">
      <h3 className="project-title">{project.name}</h3>
      <p>{project.description}</p>
    </div>
  )
}
