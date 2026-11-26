// Links to other websites open in a new tab; mailto:, tel: and on-site links stay in the current one.
export function externalLinkProps(href) {
    return href.startsWith("http")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
}
