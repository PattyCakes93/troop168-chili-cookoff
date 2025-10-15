import { Card, CardContent } from '@/components/ui/card';
import { Flame, Thermometer, Sparkles } from 'lucide-react';

const requirements = [
  {
    icon: Flame,
    title: "5 Gallons of Chili Minimum",
    description: "Bring at least 5 gallons (more if you can!). We're aiming for 20 gallons total to donate.",
  },
  {
    icon: Thermometer,
    title: "Keep It Hot",
    description: "Bring a slow cooker or roaster to keep your chili at the perfect temperature.",
  },
  {
    icon: Sparkles,
    title: "Get Creative",
    description: "Decorations or costumes encouraged — there's a prize for Best Presentation!",
  },
];

export default function RequirementsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          What You'll Need
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Ready to compete? Here's what to bring to the Cook-Off
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {requirements.map((req, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-requirement-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-12 h-12 mb-6 bg-primary rounded-lg flex items-center justify-center">
                  <req.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3 text-foreground">
                  {req.title}
                </h3>
                <p className="text-muted-foreground">
                  {req.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
