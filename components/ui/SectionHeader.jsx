import { ArrowRight } from "lucide-react";

// Shared section heading: small uppercase label, serif title, and an optional link on the right
// (e.g. "View all projects →"). Pass the same `id` to the section's aria-labelledby.
export default function SectionHeader({ id, label, title, action }) {
    return (
        <div className="mb-6 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
            <div className="min-w-0">
                <p className="mb-1 text-[0.6875rem] font-medium tracking-[0.2em] text-accent uppercase">{label}</p>
                <h2 id={id} className="text-foreground">{title}</h2>
            </div>
            {action && (
                <a href={action.href} className="inline-flex min-h-11 items-center gap-1.5 rounded-sm text-sm text-accent motion-safe:transition-colors hover:text-accent-hover">
                    {action.label}
                    <ArrowRight aria-hidden="true" size={16} strokeWidth={1.75} />
                </a>
            )}
        </div>
    );
}
