import { projects } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";

export default function Projects({ dictionary }) {
    return (
        <section id="projects" className="projects">
            <h2 className="text-2xl font-bold">{dictionary.projects.title}</h2>
            <title>{dictionary.projects.description}</title>
            {/* Project Cards */}
            <div>
                {projects.map((project) => (
                <ProjectCard key={project.id} project={project} dictionary={dictionary} />
            ))} 
            </div>
             
        </section>
    );
}