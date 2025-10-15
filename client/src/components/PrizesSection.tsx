import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Palette } from 'lucide-react';

const prizes = [
  {
    icon: Users,
    title: "People's Choice",
    description: "The crowd favorite! Your fellow attendees will vote for their favorite chili.",
  },
  {
    icon: Trophy,
    title: "Scoutmaster's Choice",
    description: "Expert selection from our experienced scout leaders.",
  },
  {
    icon: Palette,
    title: "Best Presentation",
    description: "Get creative with decorations and costumes!",
  },
];

export default function PrizesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold font-display text-center mb-4 text-foreground">
          Compete for Top Honors
        </h2>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Show off your best chili recipe and compete in these exciting categories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {prizes.map((prize, index) => (
            <Card 
              key={index} 
              className="border-2 border-card-border hover-elevate transition-all duration-300"
              data-testid={`card-prize-${index}`}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-chart-2 rounded-full flex items-center justify-center">
                  <prize.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold font-display mb-3 text-foreground">
                  {prize.title}
                </h3>
                <p className="text-muted-foreground">
                  {prize.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
