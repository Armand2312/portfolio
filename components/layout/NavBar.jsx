import Link from "next/link";

export default function NavBar({locale, dictionary}) {
    return (
        <header>
            <nav aria-label="Main Navigation" className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <Link href={`/${locale}`}>Armand.dev</Link>

                <div>
                    <Link href={`/${locale}#projects`}>
                        {dictionary.nav.projects}
                    </Link>

                    <Link href={`/${locale}#experience`}>
                        {dictionary.nav.experience}
                    </Link>

                    <Link href={`/${locale}#about`}>
                        {dictionary.nav.about}
                    </Link>

                    <Link href={`/${locale}#contact`}>
                        {dictionary.nav.contact}
                    </Link>
                </div>
                <div aria-label="Language selection">
                    <Link href="/en" lang="en" aria-current={locale === "en" ? "page" : undefined}>
                        EN
                    </Link>
                    {" | "}
                    <Link href="/tr" lang="tr" aria-current={locale === "tr" ? "page" : undefined}>
                        TR
                    </Link>
                </div>
            </nav>
        </header>
    )
}