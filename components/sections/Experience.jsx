import { experiences } from "@/data/experiences";
import ExperienceCard from "../cards/ExperienceCard";


export default function Experience({dictionary}) {
    return (
        <section id="experience">
            {experiences.map((experience) => (
                <ExperienceCard key={experience.id} dictionary={dictionary} experience={experience}/>
            ))}
        </section>
    )
}