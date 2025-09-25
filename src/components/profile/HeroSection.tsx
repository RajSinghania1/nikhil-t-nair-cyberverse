import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Github, Linkedin } from 'lucide-react';
import cyberHeroBg from '@/assets/cyber-hero-bg.jpg';

const typingTexts = [
  "Security Engineer",
  "Web App Pentester", 
  "CTO at CyWreck",
  "OSWE Certified",
  "Bug Bounty Hunter"
];

export default function HeroSection() {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const text = typingTexts[currentText];
    let index = 0;
    
    if (isTyping) {
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index + 1));
        index++;
        
        if (index === text.length) {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentText((prev) => (prev + 1) % typingTexts.length);
          }, 2000);
          clearInterval(timer);
        }
      }, 100);
      
      return () => clearInterval(timer);
    }
  }, [currentText, isTyping]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Hero background overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cyberHeroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        {/* Name with glitch effect */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">
          <span className="matrix-text">Nikhil T Nair</span>
        </h1>
        
        {/* Typing animation */}
        <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
          <span className="text-secondary font-mono">
            {displayText}
            <span className="terminal-cursor"></span>
          </span>
        </div>
        
        {/* Description */}
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Cybersecurity professional with 5+ years in application security, penetration testing, 
          and engineering leadership. Currently serving as <span className="text-primary">CTO at CyWreck</span> 
          and driving innovation in AI-driven threat detection systems.
        </p>
        
        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="cyber-glow cyber-border group"
            asChild
          >
            <a href="mailto:allwrongthings@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="bg-secondary/20 border-secondary text-secondary hover:bg-secondary/30"
            asChild
          >
            <a href="https://linkedin.com/in/nikhil-nair-" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-accent text-accent hover:bg-accent/20"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
        
        {/* Location & status */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span>Available for consulting</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-border"></div>
          
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-primary/30 font-mono text-sm animate-float">
          {'function exploit() {'}
        </div>
        <div className="absolute top-40 right-20 text-secondary/30 font-mono text-sm animate-float" style={{ animationDelay: '1s' }}>
          {'#!/bin/bash'}
        </div>
        <div className="absolute bottom-40 left-20 text-accent/30 font-mono text-sm animate-float" style={{ animationDelay: '2s' }}>
          {'CVE-2023-0163'}
        </div>
        <div className="absolute bottom-20 right-10 text-primary/30 font-mono text-sm animate-float" style={{ animationDelay: '0.5s' }}>
          {'SELECT * FROM users;'}
        </div>
      </div>
    </section>
  );
}