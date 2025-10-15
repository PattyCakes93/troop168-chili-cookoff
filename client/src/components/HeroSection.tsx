import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import chiliImage from '@assets/stock_images/steaming_hot_chili_i_f192cdb6.jpg';
import scoutUniformImage from '@assets/Untitled design-2_1760489584459.png';

export default function HeroSection() {
  const scrollToTickets = () => {
    const ticketSection = document.getElementById('tickets');
    ticketSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70"></div>
      
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 opacity-30 md:opacity-100">
        <img 
          src={chiliImage} 
          alt="Steaming hot chili" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-64 md:w-80 lg:w-[28rem] z-10">
        <img 
          src={scoutUniformImage} 
          alt="Scout uniform with shamrock and chili" 
          className="w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24 flex items-center min-h-[80vh]">
        <div className="max-w-3xl">
          <Badge className="bg-chart-2 text-foreground border-chart-2 mb-6" data-testid="badge-event-date">
            <Calendar className="w-4 h-4 mr-2" />
            Saturday, January 31, 2025
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold font-display text-primary-foreground mb-4 leading-tight">
            ST. PAT'S SCOUT TROOP 168
          </h1>
          
          <div className="mb-6">
            <span className="text-6xl md:text-8xl font-bold font-display text-destructive">Chili </span>
            <span className="text-6xl md:text-8xl font-bold font-display text-chart-2">Cook-Off</span>
          </div>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            It's cold outside, there's no football, so what else is there to do? <br />
            Come warm up with friends, neighbors, and scouts!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground">
              <Clock className="w-5 h-5 text-chart-2" />
              <span className="font-medium">4:30 – 7:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground">
              <MapPin className="w-5 h-5 text-chart-2" />
              <span className="font-medium">St. Patrick's School Cafeteria</span>
            </div>
          </div>

          <p className="text-lg text-primary-foreground/80 mb-8">
            127 11th Ave. N., Onalaska
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="destructive" 
              size="lg" 
              className="text-lg px-8"
              onClick={scrollToTickets}
              data-testid="button-get-tickets-hero"
            >
              Get Your Tickets
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => {
                const detailsSection = document.getElementById('details');
                detailsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
