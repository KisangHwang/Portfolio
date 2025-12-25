import React from "react";

import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectSection";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";
import { LanguageProvider } from "@/components/languages/LanguageProvider";

export const Home = (): React.JSX.Element => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <StarBackground />

        <Navbar />

        <main>
          <HeroSection />

          <AboutSection />

          <SkillsSection />

          <ProjectsSection />

          <ContactSection />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
};
