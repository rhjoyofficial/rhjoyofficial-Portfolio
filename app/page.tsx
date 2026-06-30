import { faqSchema } from "@/lib/schemas";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Process />
      <FAQ />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
