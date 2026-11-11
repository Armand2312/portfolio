import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";

export default async function Home({params}) {
  const {locale} = await params;
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <Hero dictionary={dictionary} />
      <Projects dictionary={dictionary} />
    </main>
  );
}
