import { education } from "@/data/education"
import EducationCard from "../cards/EducationCard"

export default function Education({ dictionary }) {
    return (
        <section>
            {education.map((education) => (
                <EducationCard key={education.id} education={education} dictionary={dictionary} />
            ))}
        </section>
    )
}