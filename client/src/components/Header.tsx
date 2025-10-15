import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';

export default function Header() {
  const scrollToTickets = () => {
    const ticketSection = document.getElementById('tickets');
    ticketSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold font-display text-primary-foreground">
            TROOP 168 CHILI COOK-OFF
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <CountdownTimer />
          <Button 
            variant="destructive" 
            size="lg"
            onClick={scrollToTickets}
            data-testid="button-get-tickets-header"
          >
            Get Tickets
          </Button>
        </div>

        <Button 
          variant="destructive" 
          size="default"
          onClick={scrollToTickets}
          className="md:hidden"
          data-testid="button-get-tickets-mobile"
        >
          Get Tickets
        </Button>
      </div>
    </header>
  );
}
