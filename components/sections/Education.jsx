import { education } from "@/data/education"
import EducationCard from "../cards/EducationCard"

export default function Education({ dictionary }) {
    const content = dictionary.education;
    return (
        <section>
            <p>{content.label}</p>
            <h2>{content.title}</h2>
            {education.map((education) => (
                <EducationCard key={education.id} education={education} dictionary={dictionary} />
            ))}
        </section>
    );
}