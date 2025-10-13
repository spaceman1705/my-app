import HeroClass from "./body/hero"; 
import Aboutme from "./body/about";
import Skills from "./body/skills";
import Portfolio from "./body/portof";
import ContactForm from "./components/contactForm";
import CenterMode from "./body/testi";

export default function Home() {
  return (
    <main>
      <HeroClass />
      <Aboutme />
      <Skills />
      <Portfolio />
      <CenterMode />
      <ContactForm />
    </main>
  )
}