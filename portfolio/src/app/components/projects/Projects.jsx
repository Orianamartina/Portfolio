import style from "./projects.module.css";

import { projects } from "./projects";
import { ProjectCard } from "./ProjectCard";

export default function Projects() {
  return (
    <div className={style.container}>
      {projects.map((proj, id) => {
        return <ProjectCard key={proj.name} {...proj} id={id} />;
      })}
    </div>
  );
}
