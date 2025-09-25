import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Code, Cloud, Users, Trophy, Briefcase } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Shield,
    title: "Security Leadership",
    color: "text-primary",
    gradient: "bg-gradient-gold",
    capabilities: [
      { name: "Enterprise Security Architecture", level: "Executive" },
      { name: "Threat Modeling & Risk Assessment", level: "Expert" },
      { name: "Compliance & Governance (SOC2, PCI DSS)", level: "Executive" },
      { name: "Security Strategy & Roadmap", level: "Executive" },
      { name: "Incident Response Leadership", level: "Expert" },
      { name: "Zero Trust Implementation", level: "Expert" }
    ]
  },
  {
    icon: Users,
    title: "Executive Leadership",
    color: "text-accent",
    gradient: "bg-accent/10",
    capabilities: [
      { name: "Technology Strategy & Vision", level: "Executive" },
      { name: "Cross-functional Team Leadership", level: "Executive" },
      { name: "Board & Stakeholder Relations", level: "Executive" },
      { name: "Business Process Optimization", level: "Expert" },
      { name: "Merger & Acquisition Technology Due Diligence", level: "Expert" },
      { name: "Global Remote Team Management", level: "Executive" }
    ]
  },
  {
    icon: Code,
    title: "Technical Architecture",
    color: "text-primary",
    gradient: "bg-primary/10",
    capabilities: [
      { name: "AI/ML Security Integration", level: "Expert" },
      { name: "Cloud Security Architecture (GCP, AWS)", level: "Expert" },
      { name: "DevSecOps & CI/CD Pipeline Security", level: "Expert" },
      { name: "Microservices & Container Security", level: "Expert" },
      { name: "API Security & Design", level: "Expert" },
      { name: "Secure Software Development Lifecycle", level: "Executive" }
    ]
  },
  {
    icon: Cloud,
    title: "Innovation & AI",
    color: "text-accent",
    gradient: "bg-accent/10",
    capabilities: [
      { name: "AI-Driven Threat Detection Systems", level: "Expert" },
      { name: "Machine Learning for Security Analytics", level: "Expert" },
      { name: "Automated Security Testing Frameworks", level: "Expert" },
      { name: "Smart Contract Security Auditing", level: "Expert" },
      { name: "Blockchain Security Architecture", level: "Advanced" },
      { name: "Edge Computing Security", level: "Advanced" }
    ]
  }
];

const executiveCertifications = [
  { 
    name: "OSWE", 
    issuer: "Offensive Security", 
    year: "2024", 
    type: "Technical Excellence",
    description: "Advanced Web Application Security"
  },
  { 
    name: "DevSecOps Professional", 
    issuer: "Synopsys", 
    year: "2023", 
    type: "Process Leadership",
    description: "Secure Development Lifecycle"
  },
  { 
    name: "NSE1-3 Security Architect", 
    issuer: "Fortinet", 
    year: "2023", 
    type: "Enterprise Security",
    description: "Network Security Architecture"
  },
  { 
    name: "Machine Learning Specialist", 
    issuer: "Google Cloud", 
    year: "2022", 
    type: "AI Innovation",
    description: "ML Engineering & Security"
  }
];

const executiveAchievements = [
  {
    title: "Security Research Impact",
    achievement: "CVE-2023-0163: Critical Mozilla vulnerability discovery",
    impact: "Protected millions of users globally"
  },
  {
    title: "Industry Recognition",
    achievement: "Black Hat Scholar (Europe 2020, USA 2019)",
    impact: "Thought leadership in cybersecurity research"
  },
  {
    title: "Competitive Excellence",
    achievement: "Top 200 on Code4rena Smart Contract Audit Leaderboard",
    impact: "Leading blockchain security assessments"
  },
  {
    title: "Team Achievement",
    achievement: "2nd Place CSAW Finals (NYU) with Team bi0s",
    impact: "International cybersecurity competition"
  }
];

function ExpertiseCard({ area }: { area: typeof expertiseAreas[0] }) {
  const Icon = area.icon;
  
  return (
    <Card className="executive-card h-full">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-xl">
          <div className={`p-2 rounded-lg ${area.gradient}`}>
            <Icon className={`w-6 h-6 ${area.color}`} />
          </div>
          <span className="executive-title">{area.title}</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          {area.capabilities.map((capability, i) => (
            <div key={i} className="flex items-center justify-between">
              <span className="text-muted-foreground font-medium text-sm">
                {capability.name}
              </span>
              <Badge 
                variant="outline" 
                className={`
                  text-xs font-mono border-0 px-2 py-1
                  ${capability.level === 'Executive' ? 'bg-primary/20 text-primary' : ''}
                  ${capability.level === 'Expert' ? 'bg-accent/20 text-accent' : ''}
                  ${capability.level === 'Advanced' ? 'bg-muted/30 text-muted-foreground' : ''}
                `}
              >
                {capability.level}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function ExecutiveSkills() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl executive-title mb-6">
            Executive <span className="gold-accent">Capabilities</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Strategic leadership combined with deep technical expertise across cybersecurity and enterprise architecture
          </p>
        </div>
        
        {/* Expertise areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} />
          ))}
        </div>
        
        {/* Certifications and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Executive Certifications */}
          <Card className="executive-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl executive-title">
                <Trophy className="w-7 h-7 text-primary" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {executiveCertifications.map((cert, i) => (
                  <div key={i} className="border-l-2 border-primary/30 pl-6 relative">
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-primary rounded-full"></div>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-lg gold-accent">{cert.name}</h4>
                      <Badge className="bg-primary/20 text-primary border-0 text-xs">
                        {cert.year}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-accent font-medium">{cert.type}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Executive Achievements */}
          <Card className="executive-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl executive-title">
                <Briefcase className="w-7 h-7 text-accent" />
                Key Achievements
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-6">
                {executiveAchievements.map((achievement, i) => (
                  <div key={i} className="space-y-2">
                    <h4 className="font-bold text-accent">{achievement.title}</h4>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {achievement.achievement}
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      {achievement.impact}
                    </p>
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