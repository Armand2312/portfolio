export default function About({dictionary}) {
    const content = dictionary.about;
    return (
        <section id="about">
            <p>{content.label}</p>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
        </section>
    );
}