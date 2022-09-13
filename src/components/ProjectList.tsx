import ProjectItem from "./ProjectItem";

interface Props {
  projects: {
    about: string;
    id: number;
    name: string;
    technologies: string[];
  }[]
}

function ProjectList({ projects }: Props) {  
  const projectElements = projects.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        about={project.about}
        name={project.name}
        technologies={project.technologies}
      />
    ) 
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectElements}</div>
    </div>
  );
}

export default ProjectList;
