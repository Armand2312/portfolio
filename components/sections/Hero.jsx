export default function Hero({ dictionary }) {
    return (
        <section id="hero" className="hero">
            <h1 className="text-3xl font-bold underline">
                {dictionary.hero.greeting}
            </h1>
            <p>{dictionary.hero.description}</p>
            <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {dictionary.hero.viewProject}
            </a>
        </section>
    );
}