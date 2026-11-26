import { externalLinkProps } from "@/lib/links";

export default function ContactCard({ contact, dictionary }) {
    const content = dictionary.contact[contact.id];
    return (
        <a href={contact.href} {...externalLinkProps(contact.href)}>
            <span>{content}</span>
            <span>{contact.displayText}</span>
        </a>
    )
}