import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "CyWreck",
    period: "January 2025 - Present",
    location: "Remote",
    type: "Leadership",
    description: "Leading technical strategy and innovation at the convergence of cybersecurity, AI, and software engineering.",
    highlights: [
      "Defined and executed technology roadmap with security-first principles",
      "Architected full-stack, cloud-native applications with embedded security controls",
      "Integrated AI/ML into core offerings including automated code audits and threat detection",
      "Built and led cross-functional engineering teams focused on compliance-driven development"
    ],
    tags: ["Leadership", "AI/ML", "DevSecOps", "Architecture"]
  },
  {
    title: "Senior Product Security Engineer",
    company: "Broadcom",
    period: "January 2024 - September 2024",
    location: "Bangalore",
    type: "Security",
    description: "Drove Secure SDLC integration and vulnerability management across global product teams.",
    highlights: [
      "Spearheaded Secure SDLC integration including threat modeling and secure code reviews",
      "Built custom security automation tools for static/dynamic analysis and CI/CD protection",
      "Conducted manual and automated code audits across firmware, SaaS, and embedded systems",
      "Delivered secure coding training to 200+ developers organization-wide"
    ],
    tags: ["SDLC", "Automation", "Training", "Threat Modeling"]
  },
  {
    title: "Security Engineer",
    company: "VMware",
    period: "January 2022 - December 2023",
    location: "Remote",
    type: "Security",
    description: "Executed comprehensive security assessments and threat modeling for enterprise platforms.",
    highlights: [
      "Conducted 50+ penetration tests and threat modeling reviews",
      "Automated security test cases and contributed to Android attack surface analysis",
      "Participated in feature and architecture reviews ensuring security-by-design",
      "Helped refine internal tooling for automated threat assessment processes"
    ],
    tags: ["Penetration Testing", "Automation", "Architecture", "VAPT"]
  },
  {
    title: "Director of Engineering",
    company: "500x",
    period: "2024 - Present",
    location: "Remote",
    type: "Leadership",
    description: "Leading technical teams delivering secure, scalable platforms for Political Tech, Fintech, and Law clients.",
    highlights: [
      "Architect systems and drive process improvements",
      "Integrate DevSecOps practices across all projects",
      "Manage cross-functional teams and technical delivery",
      "Focus on secure, scalable platform development"
    ],
    tags: ["Team Leadership", "DevSecOps", "Architecture", "Process Improvement"]
  }
];

export default function ExperienceSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="matrix-text">Professional Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building secure systems and leading teams across cybersecurity, AI, and enterprise platforms
          </p>
        </div>
        
        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="cyber-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 group"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-primary mb-2 group-hover:text-secondary transition-colors">
                      {exp.title}
                    </CardTitle>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold text-secondary">{exp.company}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      
                      <Badge 
                        variant="outline" 
                        className={`
                          ${exp.type === 'Leadership' ? 'border-accent text-accent' : ''}
                          ${exp.type === 'Security' ? 'border-primary text-primary' : ''}
                        `}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  {exp.description}
                </p>
                
                {/* Key highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="bg-secondary/20 text-secondary border-secondary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}