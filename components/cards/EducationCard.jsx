export default function EducationCard({education, dictionary}) {
        const content = dictionary.education.items[education.id];
    return (
        <article>
            <h3>{content.title}</h3>
            <h4>{content.degree}</h4>
            <p>{content.grade}</p>
            <p>{content.description}</p>
            <p>{education.startDate} - {education.endDate}</p>
        </article>
    )
}