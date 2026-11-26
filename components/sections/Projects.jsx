import { projects } from "@/data/projects";
import ProjectCard from "../cards/ProjectCard";

export default function Projects({ dictionary }) {
    return (
        <section id="projects" aria-labelledby="projects-heading" className="projects bg-[#031321] py-9 sm:py-12">
            <div className="portfolio-container">
                <div className="mb-5">
                    <p className="mb-1 text-[0.6875rem] font-medium tracking-[0.2em] text-accent uppercase">{dictionary.projects.label}</p>
                    <h2 id="projects-heading" className="font-serif text-3xl font-normal text-foreground sm:text-4xl">{dictionary.projects.title}</h2>
                </div>
                <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} dictionary={dictionary} />
                    ))}
                </div>
            </div>
        </section>
    );
}
