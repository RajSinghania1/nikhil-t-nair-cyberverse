import CyberBackground from '@/components/three/CyberBackground';
import HeroSection from '@/components/profile/HeroSection';
import ExperienceSection from '@/components/profile/ExperienceSection';
import SkillsSection from '@/components/profile/SkillsSection';
import ProjectsSection from '@/components/profile/ProjectsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Three.js animated background */}
      <CyberBackground />
      
      {/* Page content */}
      <main className="relative z-10">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Built with React, Three.js, and a passion for cybersecurity
          </p>
          <div className="flex items-center justify-center gap-6 text-sm">
            <span className="text-primary font-mono">© 2024 Nikhil T Nair</span>
            <div className="w-px h-4 bg-border"></div>
            <span className="text-muted-foreground">Security Engineer & Innovator</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
