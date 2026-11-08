import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/sections/Hero";

export default async function Home({params}) {
  const {locale} = await params;
  const dictionary = await getDictionary(locale);
  console.log(dictionary.hero.greeting);
  return (
    <main>
      <Hero dictionary={dictionary} />
    </main>
  );
}
