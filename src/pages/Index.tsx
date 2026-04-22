import { useEffect, Suspense, lazy } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoadingSpinner from "../components/LoadingSpinner";
import SEO from "../components/SEO";

const Summary = lazy(() => import("../components/Summary"));
const Experience = lazy(() => import("../components/Experience"));
const Skills = lazy(() => import("../components/Skills"));
const Achievements = lazy(() => import("../components/Achievements"));
const Education = lazy(() => import("../components/Education"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));

const Index = () => {
  useEffect(() => {
    document.title = "Saurabh Upadhayay | SDE-2 at Microsoft";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <Summary />
          <Experience />
          <Skills />
          <Achievements />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
