import { projects } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/SectionHeader";

export default function Projects({ dictionary }) {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="projects py-9 sm:py-12">
            <div className="portfolio-container">
                <SectionHeader id="projects-heading" label={dictionary.projects.label} title={dictionary.projects.title} />
                <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} dictionary={dictionary} />
                    ))}
                </div>
            </div>
        </section>
    );
}
