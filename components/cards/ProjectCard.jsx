

export default function ProjectCard({ project, dictionary }) {
    const content = dictionary.projects.items[project.id];
    return (
        <article aria-labelledby={`project-${project.id}`} className="group flex min-w-0 flex-col rounded-xl border border-border bg-background/30 p-2 motion-safe:transition-colors hover:border-accent/60 hover:bg-surface/30">
            {/* Replace this decorative 16:10 block with a project image when available. */}
            <div aria-hidden="true" className="relative isolate aspect-[16/10] shrink-0 overflow-hidden rounded-lg border border-border/50 bg-surface">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgb(32_173_255_/_0.12),transparent_70%)]" />
                <div className="absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />
                <div className="absolute left-1/2 top-1/2 size-28 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-2xl border border-accent/20 bg-background/30" />
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-accent/60">
                    <path d="m24 7 17 9-17 9-17-9 17-9Zm-17 17 17 9 17-9M7 32l17 9 17-9" />
                </svg>
                <span className="absolute bottom-4 left-4 h-px w-10 bg-accent/25" />
                <span className="absolute right-4 top-4 size-1.5 rounded-full bg-accent/30" />
            </div>

            <div className="flex flex-1 flex-col px-2 pb-1 pt-3">
                <h3 id={`project-${project.id}`} className="font-serif text-xl leading-tight font-normal text-foreground">{content.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary">{content.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <li key={tech} className="max-w-full rounded-full bg-surface px-3 py-1 text-[0.6875rem] leading-5 text-foreground">{tech}</li>
                    ))}
                </ul>
                {(project.liveDemo || project.github) && (
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1 pt-3">
                        {project.liveDemo && (
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`${dictionary.projects.liveDemo}: ${content.title}`} className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm text-accent motion-safe:transition-colors hover:text-accent-hover hover:underline underline-offset-4">
                                {dictionary.projects.liveDemo}
                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M7 7h10v10" /></svg>
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${dictionary.projects.viewCode}: ${content.title}`} className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-foreground motion-safe:transition-colors hover:text-accent hover:underline underline-offset-4">
                                <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" /></svg>
                                {dictionary.projects.viewCode}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </article>
    );

}
