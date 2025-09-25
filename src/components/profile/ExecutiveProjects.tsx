import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, Shield, Search, Target, TrendingUp } from 'lucide-react';

const executiveProjects = [
  {
    title: "Wreckbot AI Security Platform",
    company: "CyWreck",
    description: "Enterprise-grade AI-driven threat detection system featured by Google, revolutionizing automated vulnerability assessment for Fortune 500 companies.",
    icon: Bot,
    color: "text-primary",
    businessValue: "$2M+ in prevented security incidents",
    scale: "50+ enterprise deployments",
    tags: ["AI/ML", "Enterprise Security", "Threat Detection", "Google Featured"],
    executiveHighlights: [
      "Reduced security incident response time by 85%",
      "Achieved 97% accuracy in threat classification",
      "Secured $5M Series A funding based on platform innovation",
      "Featured as Google's breakthrough security innovation"
    ],
    links: {
      demo: "#",
      case_study: "#"
    }
  },
  {
    title: "Enterprise Security Framework",
    company: "500x & Multiple Clients",
    description: "Comprehensive zero-trust security architecture serving Political Tech, Fintech, and Legal sectors with end-to-end compliance integration.",
    icon: Shield,
    color: "text-accent",
    businessValue: "$50M+ transactions secured",
    scale: "Global multi-tenant deployment",
    tags: ["Zero Trust", "Compliance", "Enterprise Architecture", "Multi-Sector"],
    executiveHighlights: [
      "Achieved SOC 2 Type II and PCI DSS compliance",
      "Protected $50M+ in political campaign contributions",
      "Implemented across 25+ enterprise clients",
      "Zero security breaches in 18+ months of operation"
    ],
    links: {
      case_study: "#"
    }
  },
  {
    title: "Gods-Eye Reconnaissance Platform",
    description: "Advanced CLI security assessment tool adopted by security teams globally for comprehensive vulnerability discovery and analysis.",
    icon: Search,
    color: "text-primary",
    businessValue: "10,000+ security assessments conducted",
    scale: "Used by 500+ security professionals",
    tags: ["Security Testing", "CLI Platform", "Open Source", "Global Adoption"],
    executiveHighlights: [
      "Open-sourced platform with 2,000+ GitHub stars",
      "Reduced manual penetration testing time by 70%",
      "Adopted by major consulting firms and enterprises",
      "Identified 500+ critical vulnerabilities across industries"
    ],
    links: {
      github: "https://github.com/nikhilnair83/Gods-Eye",
      documentation: "#"
    }
  },
  {
    title: "Pandora CTF Infrastructure",
    description: "Scalable competition platform powering India's largest cybersecurity training programs, serving educational institutions and corporate training.",
    icon: Target,
    color: "text-accent",
    businessValue: "25,000+ professionals trained",
    scale: "National competition infrastructure",
    tags: ["Education Platform", "Scalable Infrastructure", "Cybersecurity Training", "National Impact"],
    executiveHighlights: [
      "Powers India's largest cybersecurity competitions",
      "Trained 25,000+ security professionals and students",
      "Reduced training infrastructure costs by 60%",
      "Established as the national standard for security education"
    ],
    links: {
      github: "https://github.com/team-bi0s/pandora",
      platform: "#"
    }
  }
];

function ProjectCard({ project }: { project: typeof executiveProjects[0] }) {
  const Icon = project.icon;
  
  return (
    <Card className="executive-card">
      <CardHeader className="pb-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-gold`}>
              <Icon className={`w-8 h-8 ${project.color}`} />
            </div>
            <div>
              <CardTitle className="text-2xl executive-title mb-2">
                {project.title}
              </CardTitle>
              {project.company && (
                <p className="text-muted-foreground font-medium">
                  {project.company}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex gap-2">
            {project.links.github && (
              <Button
                size="sm"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            )}
            
            {(project.links.demo || project.links.case_study) && (
              <Button
                size="sm"
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent/10"
                asChild
              >
                <a href={project.links.demo || project.links.case_study} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
        
        {/* Business metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-semibold gold-accent">{project.businessValue}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="w-4 h-4 text-center text-accent">📊</span>
            <span className="font-medium text-accent">{project.scale}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        {/* Executive highlights */}
        <div>
          <h4 className="text-lg font-semibold gold-accent mb-4">
            Executive Impact & Results
          </h4>
          <ul className="space-y-3">
            {project.executiveHighlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{highlight}</span>
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
              className="text-xs font-medium bg-muted/20 border-muted-foreground/20 hover:bg-primary/10 hover:border-primary/30 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExecutiveProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl executive-title mb-6">
            Strategic <span className="gold-accent">Initiatives</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Technology platforms and security frameworks driving measurable business outcomes across industries
          </p>
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {executiveProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        
        {/* Executive call to action */}
        <div className="text-center">
          <div className="professional-border rounded-2xl p-12 bg-gradient-subtle">
            <h3 className="text-2xl lg:text-3xl executive-title mb-4">
              Ready to Drive <span className="gold-accent">Security Innovation</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how strategic security leadership can accelerate your organization's digital transformation.
            </p>
            <Button 
              size="lg" 
              className="professional-border bg-gradient-gold text-foreground hover:shadow-gold transition-elegant px-8 py-4 text-lg font-semibold"
              asChild
            >
              <a href="mailto:allwrongthings@gmail.com">
                Schedule Executive Consultation
                <ExternalLink className="ml-3 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}