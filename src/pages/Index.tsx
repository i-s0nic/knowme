import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import ProjectPreview from "@/components/ProjectPreview";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Summary from "@/components/Summary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RouteScroll from "@/components/RouteScroll";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => (
  <>
    <SEO />
    <Header />
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <SelectedWork />
      <Experience />
      <ProjectPreview />
      <Skills />
      <Achievements />
      <Education />
      <Summary />
      <Contact />
    </main>
    <Footer />
    <RouteScroll />
    <ScrollReveal />
  </>
);

export default Index;
