import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Code, Database, Cloud, Zap, Award } from 'lucide-react';

const skillCategories = [
  {
    icon: Shield,
    title: "Security Expertise",
    color: "text-primary",
    skills: [
      { name: "Penetration Testing", level: "Expert" },
      { name: "Threat Modeling", level: "Expert" },
      { name: "Vulnerability Assessment", level: "Expert" },
      { name: "Incident Response", level: "Advanced" },
      { name: "Security Architecture", level: "Expert" },
      { name: "DevSecOps", level: "Advanced" }
    ]
  },
  {
    icon: Code,
    title: "Programming Languages",
    color: "text-secondary",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Go", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "SQL", level: "Expert" },
      { name: "Bash", level: "Advanced" },
      { name: "C/C++", level: "Intermediate" }
    ]
  },
  {
    icon: Database,
    title: "Frameworks & Tools",
    color: "text-accent",
    skills: [
      { name: "React", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "Flask", level: "Expert" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Burp Suite", level: "Expert" },
      { name: "Docker", level: "Advanced" }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    color: "text-primary",
    skills: [
      { name: "Google Cloud Platform", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Terraform", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Infrastructure as Code", level: "Advanced" }
    ]
  }
];

const certifications = [
  { name: "OSWE", issuer: "OffSec", year: "2024", color: "primary" },
  { name: "DevSecOps", issuer: "Synopsys", year: "2023", color: "secondary" },
  { name: "NSE1-3", issuer: "Fortinet", year: "2023", color: "accent" },
  { name: "Machine Learning", issuer: "Google", year: "2022", color: "primary" },
  { name: "Risk Management", issuer: "Google", year: "2022", color: "secondary" }
];

const achievements = [
  "CVE-2023-0163: Critical vulnerability reported in Mozilla",
  "Top 200 on Code4rena Smart Contract Audit Leaderboard",
  "Black Hat Scholar: Europe (2020), USA (2019)",
  "2nd Place at CSAW Finals (NYU) with Team bi0s",
  "1st Place at ER&DCI CTF Competition"
];

function SkillCard({ category }: { category: typeof skillCategories[0] }) {
  const Icon = category.icon;
  
  return (
    <Card className="cyber-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-500 group">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <Icon className={`w-6 h-6 ${category.color}`} />
          <span className="text-foreground group-hover:text-secondary transition-colors">
            {category.title}
          </span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {category.skills.map((skill, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-muted-foreground">{skill.name}</span>
              <Badge 
                variant="outline" 
                className={`
                  text-xs font-mono
                  ${skill.level === 'Expert' ? 'border-primary text-primary' : ''}
                  ${skill.level === 'Advanced' ? 'border-secondary text-secondary' : ''}
                  ${skill.level === 'Intermediate' ? 'border-accent text-accent' : ''}
                `}
              >
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="matrix-text">Technical Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for cybersecurity, development, and system architecture
          </p>
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} />
          ))}
        </div>
        
        {/* Certifications and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Award className="w-7 h-7 text-accent" />
                <span className="text-foreground">Certifications</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                    <div>
                      <h4 className="font-semibold text-primary">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`
                        ${cert.color === 'primary' ? 'border-primary text-primary' : ''}
                        ${cert.color === 'secondary' ? 'border-secondary text-secondary' : ''}
                        ${cert.color === 'accent' ? 'border-accent text-accent' : ''}
                      `}
                    >
                      {cert.year}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements */}
          <Card className="cyber-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="w-7 h-7 text-primary" />
                <span className="text-foreground">Key Achievements</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}