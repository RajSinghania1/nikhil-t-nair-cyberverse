import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, Award, Building2 } from 'lucide-react';
import profilePhoto from '@/assets/nikhil-professional.png';

const executiveRoles = [
  "Chief Technology Officer",
  "Security Engineering Leader", 
  "Cybersecurity Strategist",
  "AI Innovation Director",
  "Product Security Architect"
];

export default function ExecutiveHero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = executiveRoles[currentRole];
    let index = 0;
    
    if (isTyping) {
      const timer = setInterval(() => {
        setDisplayText(role.slice(0, index + 1));
        index++;
        
        if (index === role.length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentRole((prev) => (prev + 1) % executiveRoles.length);
          }, 3000);
          clearInterval(timer);
        }
      }, 80);
      
      return () => clearInterval(timer);
    }
  }, [currentRole, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      {/* Main content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Professional Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img
              src={profilePhoto}
              alt="Nikhil T Nair - Professional Portrait"
              className="w-36 h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-4 border-primary/40 shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
          </div>
        </div>
        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl executive-title mb-8 animate-fade-in-up">
          <span className="text-foreground">Nikhil T</span>{' '}
          <span className="gold-accent">Nair</span>
        </h1>
        
        {/* Dynamic role */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-6 h-12 flex items-center justify-center">
          <span className="text-muted-foreground font-medium">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>
        
        {/* Company & Credentials */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-lg">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="gold-accent font-semibold">CTO, CyWreck</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-border"></div>
          
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">OSWE Certified</span>
          </div>
        </div>
        
        {/* Executive summary */}
        <p className="text-xl lg:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed font-light">
          Driving cybersecurity innovation at the intersection of{' '}
          <span className="gold-accent">AI-powered threat detection</span>,{' '}
          <span className="text-accent">enterprise security architecture</span>, and{' '}
          <span className="gold-accent">executive leadership</span>.
        </p>
        
        {/* Professional actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button 
            size="lg" 
            className="professional-border bg-gradient-gold text-foreground hover:shadow-gold transition-elegant px-8 py-4 text-lg font-semibold"
            asChild
          >
            <a href="mailto:allwrongthings@gmail.com">
              <Mail className="mr-3 h-5 w-5" />
              Executive Contact
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-elegant px-8 py-4 text-lg"
            asChild
          >
            <a href="https://linkedin.com/in/nikhil-nair-" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-3 h-5 w-5" />
              Connect on LinkedIn
            </a>
          </Button>
        </div>
        
        {/* Status & Location */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="status-indicator w-3 h-3 bg-primary rounded-full"></div>
            <span className="font-medium">Available for Strategic Consulting</span>
          </div>
          
          <div className="hidden lg:block w-px h-6 bg-border"></div>
          
          <div className="flex items-center gap-3">
            <ExternalLink className="w-4 h-4" />
            <span>Bengaluru, Karnataka • Global Remote</span>
          </div>
        </div>
      </div>
      
      {/* Subtle professional elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-10 text-primary/40 font-mono text-xs animate-subtle-float">
          CVE-2023-0163
        </div>
        <div className="absolute top-1/3 right-20 text-accent/40 font-mono text-xs animate-subtle-float" style={{ animationDelay: '2s' }}>
          AI/ML Security
        </div>
        <div className="absolute bottom-1/3 left-20 text-primary/40 font-mono text-xs animate-subtle-float" style={{ animationDelay: '4s' }}>
          Enterprise Architecture
        </div>
        <div className="absolute bottom-1/4 right-10 text-accent/40 font-mono text-xs animate-subtle-float" style={{ animationDelay: '1s' }}>
          Zero Trust Implementation
        </div>
      </div>
    </section>
  );
}