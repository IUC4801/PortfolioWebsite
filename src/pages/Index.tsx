import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative transition-colors duration-300">
      {/* Scanline overlay - theme aware */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-30 dark:opacity-50 bg-[linear-gradient(to_bottom,transparent_50%,hsl(var(--primary)/0.02)_50%)] bg-[size:100%_4px]" />
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
