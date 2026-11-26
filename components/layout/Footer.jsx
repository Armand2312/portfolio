import Link from "next/link";
import { contactLinks } from "@/data/contact";
import { externalLinkProps } from "@/lib/links";

export default function Footer({ locale, dictionary }) {
    const footerContent = dictionary.footer;
    const navContent = dictionary.nav;
    const contactContent = dictionary.contact;
    const year = new Date().getFullYear();

    return (
        <footer>
            <div>
                <p>Armand Oral</p>
                <p>{footerContent.role}</p>
            </div>

            <nav className="flex flex-col" aria-label="Footer navigation">
                <span>{footerContent.quickLinks}</span>
                <Link href={`/${locale}#projects`}>{navContent.projects}</Link>
                <Link href={`/${locale}#experience`}>{navContent.experience}</Link>
                <Link href={`/${locale}#education`}>{navContent.education}</Link>
                <Link href={`/${locale}#about`}>{navContent.about}</Link>
                <Link href={`/${locale}#contact`}>{navContent.contact}</Link>
            </nav>
            <div className="flex flex-col">
                <span>{footerContent.socials}</span>
                {contactLinks.map((contact) => (
                    <a key={contact.id} href={contact.href} {...externalLinkProps(contact.href)}>
                        {contactContent[contact.id]}
                    </a>
                ))}
            </div>

            <p>© {year} Armand Oral. {footerContent.rights}</p>
        </footer>
    );
}