import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mic, Users, Calendar, MapPin, ExternalLink, Award } from 'lucide-react';

const speakingEngagements = [
  {
    title: "Co-Speaker at Nullcon",
    event: "Nullcon Security Conference",
    year: "2018",
    location: "Goa, India",
    type: "Co-Speaker",
    audience: "500+ Security Professionals",
    topics: ["Advanced Persistent Threats", "Enterprise Security Architecture"],
    description: "Delivered keynote on emerging threat vectors and defensive strategies for enterprise environments.",
    category: "Conference"
  },
  {
    title: "INCTF Speaker Series",
    event: "India National Cyber Training Framework",
    year: "2021-2022",
    location: "Multiple Cities, India",
    type: "Featured Speaker",
    audience: "1000+ Cybersecurity Professionals",
    topics: ["Incident Response", "Threat Hunting", "Security Team Leadership"],
    description: "Multi-year speaking engagement covering advanced cybersecurity topics and leadership development.",
    category: "Training"
  },
  {
    title: "Security Posture Assessment",
    event: "VMware Internal Security Summit",
    year: "2023",
    location: "Palo Alto, CA",
    type: "Internal Talk",
    audience: "200+ Engineers & Leaders",
    topics: ["Security Posture", "Risk Assessment", "Compliance Frameworks"],
    description: "Internal presentation on enhancing organizational security posture and risk management strategies.",
    category: "Corporate"
  },
  {
    title: "Threat Modeling at Scale",
    event: "VMware Engineering Excellence",
    year: "2022",
    location: "Virtual Event",
    type: "Technical Workshop",
    audience: "150+ Security Engineers",
    topics: ["Threat Modeling", "Secure Development", "Architecture Review"],
    description: "Workshop on implementing threat modeling processes for large-scale enterprise applications.",
    category: "Workshop"
  },
  {
    title: "AI in Cybersecurity & Future Trends",
    event: "Broadcom Security Innovation Forum",
    year: "2024",
    location: "San Jose, CA",
    type: "Keynote",
    audience: "300+ Industry Leaders",
    topics: ["AI Security", "Machine Learning Threats", "Future of Cybersecurity"],
    description: "Keynote addressing the intersection of artificial intelligence and cybersecurity, including future threat landscapes.",
    category: "Innovation"
  },
  {
    title: "Security Leadership in Digital Transformation",
    event: "Broadcom Executive Summit",
    year: "2023",
    location: "Singapore",
    type: "Panel Discussion",
    audience: "100+ C-Suite Executives",
    topics: ["Digital Transformation", "Security Leadership", "Business Continuity"],
    description: "Panel discussion on leading security initiatives during organizational digital transformation.",
    category: "Executive"
  }
];

const ExecutiveSpeaking = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20">
            Speaking Engagements
          </Badge>
          <h2 className="text-4xl executive-title mb-6">
            Industry <span className="gold-accent">Thought Leadership</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights and expertise at premier security conferences, corporate summits, 
            and industry forums across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {speakingEngagements.map((engagement, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-500 border-primary/10 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Mic className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-1">
                        {engagement.category}
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        {engagement.year}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-primary/20">
                    {engagement.type}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold executive-title mb-2">
                  {engagement.title}
                </h3>
                
                <div className="text-primary font-medium mb-4">
                  {engagement.event}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {engagement.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{engagement.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{engagement.audience}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {engagement.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="outline" className="text-xs border-primary/20">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block bg-gradient-primary border-0 shadow-luxury">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-primary-foreground" />
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-primary-foreground">
                    Speaking Opportunities
                  </h3>
                  <p className="text-primary-foreground/80">
                    Available for keynotes, panels, and workshops
                  </p>
                </div>
              </div>
              <Button 
                variant="secondary" 
                className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/20"
              >
                Request Speaking Engagement
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSpeaking;