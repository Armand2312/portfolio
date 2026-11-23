

export default function ProjectCard({ project, dictionary }) {
    const content = dictionary.projects.items[project.id];
    return (
        <article>
            <h3>{content.title}</h3>
            <p>{content.description}</p>
            {/* Technologies list */}
            <ul>
                {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </article>
    );

}