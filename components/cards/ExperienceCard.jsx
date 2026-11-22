export default function ExperienceCard({dictionary, experience}) {
    const content = dictionary.experiences.items[experience.id];
    return (
        <article>
            <h3>{content.title}</h3>
            <p>{content.job}</p>
            <p>{experience.startDate} - {experience.endDate ?? dictionary.experiences.present}</p>
            <p>{content.description}</p>
            {/* Technologies list */}
            <ul>
                {experience.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </article>
    );
}