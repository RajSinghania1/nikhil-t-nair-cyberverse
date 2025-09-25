import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, TrendingUp, Users } from 'lucide-react';

const executiveExperience = [
  {
    title: "Chief Technology Officer",
    company: "CyWreck",
    period: "2025 - Present",
    location: "Global Remote",
    type: "C-Level Executive",
    description: "Leading technical strategy and innovation convergence of cybersecurity, artificial intelligence, and software engineering for enterprise clients.",
    businessImpact: [
      "Architected AI-driven security platform serving enterprise clients",
      "Built and scaled cross-functional engineering teams across 3 continents",
      "Defined technology roadmap aligned with $10M+ ARR growth targets",
      "Established zero-trust security framework for Fortune 500 clients"
    ],
    leadership: ["Team Leadership", "Strategic Planning", "Board Reporting", "Technical Vision"],
    technical: ["AI/ML Security", "Cloud Architecture", "DevSecOps", "Enterprise Integration"]
  },
  {
    title: "Director of Engineering",
    company: "500x",
    period: "2024 - Present",
    location: "Remote",
    type: "Engineering Leadership",
    description: "Directing engineering excellence across Political Tech, Fintech, and Legal sectors while integrating advanced security practices.",
    businessImpact: [
      "Architected secure platforms processing $50M+ in political contributions",
      "Implemented DevSecOps reducing security incidents by 95%",
      "Led digital transformation initiatives for law firms and fintech startups",
      "Established compliance frameworks for PCI DSS and SOC 2 Type II"
    ],
    leadership: ["Process Optimization", "Cross-functional Leadership", "Stakeholder Management"],
    technical: ["System Architecture", "Security Integration", "Compliance", "Scalability"]
  },
  {
    title: "Senior Product Security Engineer",
    company: "Broadcom",
    period: "2024",
    location: "Bangalore",
    type: "Security Leadership",
    description: "Drove enterprise-scale Secure SDLC integration and security architecture across global product teams.",
    businessImpact: [
      "Implemented security training program reaching 200+ developers",
      "Built custom automation tools reducing manual security reviews by 70%",
      "Established threat modeling processes for multi-billion dollar product lines",
      "Created security architecture standards adopted company-wide"
    ],
    leadership: ["Training & Development", "Process Innovation", "Global Collaboration"],
    technical: ["Secure SDLC", "Threat Modeling", "Security Automation", "Code Auditing"]
  },
  {
    title: "Security Engineer",
    company: "VMware",
    period: "2022 - 2023",
    location: "Remote",
    type: "Technical Excellence",
    description: "Executed comprehensive security assessments and threat modeling for enterprise-grade virtualization platforms.",
    businessImpact: [
      "Conducted 50+ penetration tests identifying critical pre-release vulnerabilities",
      "Automated security testing reducing manual effort by 60%",
      "Contributed to Android attack surface analysis for mobile security",
      "Improved security tooling increasing team efficiency by 40%"
    ],
    leadership: ["Technical Mentorship", "Process Improvement"],
    technical: ["Penetration Testing", "Vulnerability Assessment", "Security Automation", "Mobile Security"]
  }
];

function ExperienceCard({ experience }: { experience: typeof executiveExperience[0] }) {
  return (
    <Card className="executive-card border-0 mb-8">
      <CardHeader className="pb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex-1">
            <CardTitle className="text-2xl lg:text-3xl executive-title mb-3">
              <span className="gold-accent">{experience.title}</span>
            </CardTitle>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground mb-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <span className="font-semibold text-foreground text-lg">{experience.company}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="font-medium">{experience.period}</span>
              </div>
            </div>
            
            <Badge 
              variant="outline" 
              className="border-primary/30 text-primary bg-primary/5 px-3 py-1"
            >
              {experience.type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
        
        {/* Business Impact */}
        <div>
          <h4 className="flex items-center gap-2 text-lg font-semibold gold-accent mb-4">
            <TrendingUp className="w-5 h-5" />
            Business Impact & Achievements
          </h4>
          <ul className="space-y-3">
            {experience.businessImpact.map((impact, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="leading-relaxed">{impact}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h5 className="flex items-center gap-2 text-sm font-semibold text-accent mb-3">
              <Users className="w-4 h-4" />
              Leadership & Strategy
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.leadership.map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="text-xs bg-accent/10 border-accent/30 text-accent"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-sm font-semibold text-primary mb-3">
              Technical Expertise
            </h5>
            <div className="flex flex-wrap gap-2">
              {experience.technical.map((skill, i) => (
                <Badge 
                  key={i} 
                  variant="outline" 
                  className="text-xs bg-primary/10 border-primary/30 text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExecutiveExperience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl executive-title mb-6">
            Executive <span className="gold-accent">Leadership</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Driving technological innovation and security excellence across enterprise organizations
          </p>
        </div>
        
        {/* Experience timeline */}
        <div className="space-y-0">
          {executiveExperience.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}