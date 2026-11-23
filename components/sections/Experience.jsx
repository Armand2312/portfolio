import { experiences } from "@/data/experiences";
import ExperienceCard from "../cards/ExperienceCard";


export default function Experience({dictionary}) {
    const content = dictionary.experiences;
    return (
        <section id="experience">
            <p>{content.label}</p>
            <h2>{content.title}</h2>
            {experiences.map((experience) => (
                <ExperienceCard key={experience.id} dictionary={dictionary} experience={experience}/>
            ))}
        </section>
    );
}