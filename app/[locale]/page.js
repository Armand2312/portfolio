import { getDictionary } from "@/lib/dictionaries";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";

export default async function Home({params}) {
  const {locale} = await params;
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <Hero dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <Education dictionary={dictionary} />
    </main>
  );
}
