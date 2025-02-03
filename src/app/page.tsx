import { AboutSection } from "@/_sections/AboutSection";
import { ContactSection } from "@/_sections/ContactSection";
import HeroSection from "@/_sections/HeroSection";
import Navbar from "@/_sections/Navbar";
import { PricingSection } from "@/_sections/PricingSection";
import { ProjectsSection } from "@/_sections/ProjectsSection";
import { TechnologiesSection } from "@/_sections/TechnologiesSection";
export default function Home() {
  return (
    <main className="bg-black min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TechnologiesSection /> 
        <PricingSection />
        <ContactSection />
    </main>

  );
}