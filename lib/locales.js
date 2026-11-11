export const supportedLocales = ["en", "tr"];
export const defaultLocale = "en";

export function isLocaleValid(locale) {
    return supportedLocales.includes(locale);
}