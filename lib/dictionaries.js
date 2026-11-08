const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
};

export async function getDictionary(locale) {
    return dictionaries[locale]();
}