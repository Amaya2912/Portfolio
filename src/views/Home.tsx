import AboutSection from "../components/Home/AboutSection";
import ContactSection from "../components/Home/ContactSection";
import IntroSection from "../components/Home/IntroSection";
import ProjectsSection from "../components/Home/project/ProjectsSection";
import SkillsSection from "../components/Home/skills/SkillsSection";

export default function Home() {
  return (
    <div className="space-y-24">
      <IntroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection/>
      <ContactSection />
    </div>
  );
}
