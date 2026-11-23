import { contactLinks } from "@/data/contact";
import ContactCard from "../cards/ContactCard";

export default function Contact({ dictionary }) {
    const content = dictionary.contact;
    return (
        <section id="contact">
            <p>{content.label}</p>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            {contactLinks.map((contact) => (
                <ContactCard key={contact.id} contact={contact} dictionary={dictionary} />
            ))}
        </section>
    )
}