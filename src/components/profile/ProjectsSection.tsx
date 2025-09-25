import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Shield, Bot, Search, Target } from 'lucide-react';

const projects = [
  {
    title: "Wreckbot",
    company: "CyWreck",
    description: "AI-driven threat detection system featured by Google. Advanced machine learning algorithms for automated vulnerability assessment and intelligent security analysis.",
    icon: Bot,
    color: "text-primary",
    tags: ["AI/ML", "Threat Detection", "Python", "Google Featured"],
    highlights: [
      "Featured by Google for innovation in AI security",
      "Automated threat detection with 95% accuracy",
      "Real-time vulnerability assessment",
      "Machine learning-based attack pattern recognition"
    ],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "Gods-Eye",
    description: "Comprehensive CLI reconnaissance tool designed for security professionals. Specializes in detecting LFI, IDOR, and race condition vulnerabilities across web applications.",
    icon: Search,
    color: "text-secondary",
    tags: ["CLI", "Reconnaissance", "Go", "Security Testing"],
    highlights: [
      "Multi-threaded vulnerability scanning",
      "Advanced payload injection techniques",
      "Race condition detection algorithms",
      "Extensible plugin architecture"
    ],
    links: {
      github: "https://github.com/nikhilnair83/Gods-Eye"
    }
  },
  {
    title: "Pandora CTF Framework",
    description: "Golang + React CTF framework powering India's largest Capture The Flag competitions. Robust, scalable platform for cybersecurity training and competitions.",
    icon: Shield,
    color: "text-accent",
    tags: ["Golang", "React", "CTF", "Competition Platform"],
    highlights: [
      "Powers India's largest CTF competitions",
      "Real-time leaderboard and scoring",
      "Dynamic challenge deployment",
      "Anti-cheat mechanisms and monitoring"
    ],
    links: {
      github: "https://github.com/team-bi0s/pandora"
    }
  },
  {
    title: "SSRF-Labs",
    description: "Educational laboratory environment for Server-Side Request Forgery exploitation. Comprehensive learning platform with practical examples and mitigation strategies.",
    icon: Target,
    color: "text-primary",
    tags: ["Education", "SSRF", "Security Training", "Lab Environment"],
    highlights: [
      "Interactive learning modules",
      "Progressive difficulty levels",
      "Real-world attack scenarios",
      "Mitigation strategy training"
    ],
    links: {
      github: "https://github.com/nikhilnair83/SSRF-Labs",
      demo: "#"
    }
  }
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const Icon = project.icon;
  
  return (
    <Card className="cyber-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3 mb-2">
            <Icon className={`w-8 h-8 ${project.color}`} />
            <div>
              <CardTitle className="text-2xl text-foreground group-hover:text-secondary transition-colors">
                {project.title}
              </CardTitle>
              {project.company && (
                <p className="text-sm text-muted-foreground font-mono">
                  @ {project.company}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex gap-2">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/20"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            
            {project.links.demo && (
              <Button
                size="sm"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/20"
                asChild
              >
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Key highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technology tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <Badge 
              key={i} 
              variant="outline" 
              className="text-xs font-mono bg-muted/30 border-muted-foreground/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="matrix-text">Security Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open-source tools and frameworks advancing cybersecurity research and education
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <Button 
            size="lg" 
            className="cyber-glow bg-primary/20 border-primary text-primary hover:bg-primary/30"
            asChild
          >
            <a href="mailto:allwrongthings@gmail.com">
              Let's Connect
              <ExternalLink className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}