import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Nikhil's strategic vision in cybersecurity transformed our entire security posture. His ability to translate complex technical concepts into business value is unmatched.",
    author: "Rajesh Krishnamurthy",
    title: "CEO, TechVision Solutions",
    company: "Mumbai, India",
    domain: "Enterprise Security"
  },
  {
    quote: "Under Nikhil's leadership, we achieved zero-day vulnerability detection rates that exceeded industry benchmarks by 40%. A true security visionary.",
    author: "Dr. Priya Sharma",
    title: "Chief Information Officer",
    company: "Bangalore Tech Corp",
    domain: "Risk Management"
  },
  {
    quote: "His threat modeling expertise helped us identify and mitigate critical vulnerabilities before they could impact our operations. Exceptional strategic thinking.",
    author: "Klaus Weber",
    title: "Head of Cybersecurity",
    company: "Munich Financial Group",
    domain: "Financial Security"
  },
  {
    quote: "Nikhil's AI-driven security solutions reduced our incident response time by 60%. His forward-thinking approach to cybersecurity is exactly what modern enterprises need.",
    author: "Anita Patel",
    title: "CISO",
    company: "Delhi Infrastructure Ltd",
    domain: "Infrastructure Security"
  },
  {
    quote: "The security architecture Nikhil designed for our global operations has withstood every threat vector. His expertise spans both technical depth and business acumen.",
    author: "Friedrich Schmidt",
    title: "CTO",
    company: "Berlin Systems AG",
    domain: "Enterprise Architecture"
  },
  {
    quote: "Working with Nikhil on our security transformation was a game-changer. His ability to build and lead high-performing security teams is remarkable.",
    author: "Vikram Singh",
    title: "VP of Engineering",
    company: "Hyderabad Innovations",
    domain: "Team Leadership"
  }
];

const ExecutiveTestimonials = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background via-background/95 to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary/20">
            Client Testimonials
          </Badge>
          <h2 className="text-4xl executive-title mb-6">
            Trusted by <span className="gold-accent">Global Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Endorsements from C-suite executives and industry leaders who have experienced 
            the transformative impact of strategic cybersecurity leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-luxury transition-all duration-500 border-primary/10 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.domain}
                  </Badge>
                </div>
                
                <blockquote className="text-foreground/90 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-primary/10 pt-6">
                  <div className="font-semibold text-foreground executive-title">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-primary/10">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm text-muted-foreground">
              Confidential references available upon request
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveTestimonials;