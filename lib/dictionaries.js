import { redirect } from 'next/navigation';
import { defaultLocale, isLocaleValid } from '@/lib/locales';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
};

export async function getDictionary(locale) {
    if (!isLocaleValid(locale)) {
      redirect(`/${defaultLocale}`)
    }

    const loadDictionary = dictionaries[locale];

    return loadDictionary();
}