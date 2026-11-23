export default function ContactCard({ contact, dictionary }) {
    const content = dictionary.contact[contact.id];
    const isExternal = contact.id !== "email";
    return (
        <a target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} href={contact.href}>
            <span>{content}</span>
            <span>{contact.displayText}</span>
        </a>
    )
}