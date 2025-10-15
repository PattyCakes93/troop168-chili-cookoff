import { Button } from '@/components/ui/button';
import CountdownTimer from './CountdownTimer';
import troopLogo from '@assets/Untitled design-3_1760489925654.png';

export default function Header() {
  const scrollToTickets = () => {
    const ticketSection = document.getElementById('tickets');
    ticketSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b border-primary-border">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 md:gap-4">
          <img 
            src={troopLogo} 
            alt="Troop 168 St. Patrick's Parish" 
            className="h-12 md:h-14 w-auto"
          />
          <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-bold font-display text-primary-foreground whitespace-nowrap">
            TROOP 168 CHILI COOK-OFF
          </h1>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
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
          className="lg:hidden"
          data-testid="button-get-tickets-mobile"
        >
          Get Tickets
        </Button>
      </div>
    </header>
  );
}
