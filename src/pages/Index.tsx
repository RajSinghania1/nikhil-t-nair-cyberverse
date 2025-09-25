import ExecutiveBackground from '@/components/three/ExecutiveBackground';
import ExecutiveHero from '@/components/profile/ExecutiveHero';
import ExecutiveExperience from '@/components/profile/ExecutiveExperience';
import ExecutiveSkills from '@/components/profile/ExecutiveSkills';
import ExecutiveProjects from '@/components/profile/ExecutiveProjects';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Sophisticated Three.js background */}
      <ExecutiveBackground />
      
      {/* Executive content */}
      <main className="relative z-10">
        <ExecutiveHero />
        <ExecutiveExperience />
        <ExecutiveSkills />
        <ExecutiveProjects />
      </main>
      
      {/* Professional footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl executive-title mb-4">
              <span className="gold-accent">Nikhil T Nair</span>
            </h3>
            <p className="text-muted-foreground text-lg">
              Chief Technology Officer • Security Strategist • Innovation Leader
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/10">
            <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4 md:mb-0">
              <span className="gold-accent font-medium">© 2024 Nikhil T Nair</span>
              <div className="w-px h-4 bg-border"></div>
              <span>Executive Portfolio</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Built with React, Three.js & Executive Excellence
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
