"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { supportedLocales } from "@/lib/locales";

const sections = ["projects", "experience", "education", "about", "contact"];

// Each language is named in its own language, so these stay the same in every locale.
const languageNames = { en: "English", tr: "Türkçe" };

export default function NavBar({ locale, dictionary }) {
    const [isOpen, setIsOpen] = useState(false);
    const menuId = useId();
    const toggleRef = useRef(null);
    const content = dictionary.nav;

    function closeMenu() {
        setIsOpen(false);
    }

    function handleSectionClick() {
        // Collapse the sticky header before the browser calculates the anchor position.
        flushSync(closeMenu);
    }

    function handleKeyDown(event) {
        if (event.key === "Escape" && isOpen) {
            closeMenu();
            toggleRef.current?.focus();
        }
    }

    // Native links preserve the current anchor without changing locale routing.
    function handleLanguageClick(event, nextLocale) {
        event.currentTarget.href = `/${nextLocale}${window.location.hash}`;
        closeMenu();
    }

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm" onKeyDown={handleKeyDown}>
            <nav aria-label={content.mainNavigation} className="portfolio-container flex min-h-18 flex-wrap items-center justify-between gap-x-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8">
                <Link href={`/${locale}`} onClick={closeMenu} className="flex min-h-11 w-fit items-center gap-3 rounded-sm font-serif text-xl text-foreground motion-safe:transition-colors hover:text-accent">
                    <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-accent ring-4 ring-accent/20" />
                    Armand Oral
                </Link>

                <ul id={menuId} className={`${isOpen ? "flex" : "hidden"} order-last w-full flex-col gap-1 border-t border-divider py-3 lg:order-none lg:flex lg:w-auto lg:flex-row lg:gap-6 lg:border-0 lg:py-0`}>
                    {sections.map((section) => (
                        <li key={section}>
                            <a href={`/${locale}#${section}`} onClick={handleSectionClick} className="flex min-h-11 items-center rounded-md px-3 text-sm text-secondary motion-safe:transition-colors hover:bg-surface hover:text-accent lg:px-1 lg:hover:bg-transparent">
                                {content[section]}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2 lg:justify-self-end">
                    <div role="group" aria-label={content.languageSelection} className="flex items-center rounded-lg border border-border p-0.5">
                        {supportedLocales.map((language) => (
                            <a key={language} href={`/${language}`} lang={language} hrefLang={language} aria-label={languageNames[language]} aria-current={locale === language ? "page" : undefined} onClick={(event) => handleLanguageClick(event, language)} className={`flex min-h-11 min-w-11 items-center justify-center rounded-md text-xs font-medium motion-safe:transition-colors ${locale === language ? "bg-surface-raised text-accent" : "text-secondary hover:bg-surface hover:text-accent"}`}>
                                {language.toUpperCase()}
                            </a>
                        ))}
                    </div>

                    <button ref={toggleRef} type="button" aria-label={isOpen ? content.closeMenu : content.openMenu} aria-expanded={isOpen} aria-controls={menuId} onClick={() => setIsOpen(!isOpen)} className="flex size-11 items-center justify-center rounded-md text-secondary motion-safe:transition-colors hover:bg-surface hover:text-accent lg:hidden">
                        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            {isOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}
