import { projects } from "@/data/projects";
import { experiences } from "@/data/experiences";

const technologies = [...new Set(
    [...projects, ...experiences].flatMap((item) => item.technologies)
)];

export default function Hero({ dictionary }) {
    const content = dictionary.hero;

    return (
        <section id="hero" aria-labelledby="hero-heading" className="hero relative isolate overflow-hidden border-b border-divider bg-[#031321]">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_90%_15%,rgb(0_118_220_/_0.12),transparent_45%)]" />
            <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-24 -z-10 size-48 rounded-full bg-blue-600/15 blur-2xl" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-14 -z-10 size-48 rounded-full bg-blue-600/20 blur-2xl" />

            <div className="portfolio-container grid min-w-0 gap-x-14 gap-y-8 py-8 sm:py-10 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-center lg:py-10">
                <div className="min-w-0">
                    <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/10 px-3 py-1 text-[0.6875rem] leading-5 text-accent">
                        <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                        {content.availability}
                    </p>
                    <p className="mb-2 text-[0.6875rem] font-medium tracking-[0.18em] text-accent uppercase">
                        {content.developerLabel}
                    </p>
                    <h1 id="hero-heading" className="max-w-[38rem] font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] font-normal tracking-tight text-foreground">
                        {content.headline}{" "}
                        <span className="text-accent">{content.headlineAccent}</span>{content.headlineEnding}
                    </h1>
                    <p className="mt-5 max-w-[34rem] text-sm leading-[1.65] text-secondary sm:text-base">
                        {content.description}
                    </p>
                    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
                        <a href="#projects" className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg border border-accent bg-accent px-6 py-2.5 text-center text-sm font-semibold text-background motion-safe:transition-colors hover:border-accent-hover hover:bg-accent-hover">
                            {content.viewProject}
                            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                <path d="M5 12h14m-6-6 6 6-6 6" />
                            </svg>
                        </a>
                        <a href="#contact" className="inline-flex min-h-11 items-center justify-center rounded-lg border border-border bg-background/30 px-6 py-2.5 text-center text-sm font-medium text-foreground motion-safe:transition-colors hover:border-accent hover:bg-surface hover:text-accent">
                            {content.contact}
                        </a>
                    </div>
                    <a href="#projects" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-sm text-xs text-muted motion-safe:transition-colors hover:text-accent">
                        <svg aria-hidden="true" width="18" height="28" viewBox="0 0 18 28" fill="none" stroke="currentColor" strokeLinecap="round">
                            <rect x="1" y="1" width="16" height="26" rx="8" />
                            <path d="M9 6v6" />
                        </svg>
                        {content.scroll}
                    </a>
                </div>

                <div className="relative min-w-0 rounded-2xl border border-border bg-[#041626]/90 p-5 sm:p-6">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-3 -top-8 -z-10 size-32 rounded-full bg-accent/15 blur-2xl" />
                    <h2 id="hero-focus-heading" className="font-sans text-sm leading-6 font-medium tracking-normal">{content.focusTitle}</h2>
                    <ul aria-labelledby="hero-focus-heading" className="mt-3 space-y-2.5">
                        {content.focusAreas.map((area) => (
                            <li key={area} className="flex items-start gap-3 text-[0.8125rem] leading-5 text-secondary">
                                <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                                {area}
                            </li>
                        ))}
                    </ul>
                    <div className="mt-5 border-t border-divider pt-4">
                        <h2 id="hero-stack-heading" className="font-sans text-sm leading-6 font-medium tracking-normal">{content.stackTitle}</h2>
                        <ul aria-labelledby="hero-stack-heading" className="mt-3 flex flex-wrap gap-2">
                            {technologies.map((technology) => (
                                <li key={technology} className="rounded-full border border-border/20 bg-surface px-3 py-1 text-[0.6875rem] leading-5 text-foreground">
                                    {technology}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
