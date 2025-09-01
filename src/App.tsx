// Removed unused MUI imports after refactor
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";

import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ResourcesSection from "./components/ResourcesSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <>
      <NavBar />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
}

export default App;
