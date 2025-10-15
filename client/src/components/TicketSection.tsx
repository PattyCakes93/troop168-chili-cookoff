import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Ticket } from 'lucide-react';

export default function TicketSection() {
  const [promoCode, setPromoCode] = useState('');

  const handleRegister = () => {
    // Log promo code for tracking (will be integrated with Square later)
    console.log(`Ticket purchase - Promo Code: ${promoCode.toUpperCase() || 'None'}`);
    // Open Google Form for ticket registration
    window.open('https://forms.gle/QghAykWBEzkyAPpH9', '_blank');
  };

  return (
    <section id="tickets" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
              Get Your Tickets
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
              Get fired up for a great cause! Secure your spot at the St. Pat's Troop 168 Chili Cook-Off and help our Scouts keep the adventure going all year long.
            </p>
            <p className="text-base text-muted-foreground">
              Tickets are $10 per person
            </p>
          </div>

          <Card className="bg-background/50 mb-8">
            <CardContent className="p-6">
              <div className="max-w-md mx-auto">
                <label htmlFor="ticket-promo" className="block text-sm font-medium text-foreground mb-2 text-center">
                  Supporting a Scout? Enter their promo code (optional)
                </label>
                <Input
                  id="ticket-promo"
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="text-center uppercase"
                  data-testid="input-promo-code-ticket"
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button 
              variant="destructive" 
              size="lg" 
              className="text-xl px-12 py-6 h-auto"
              onClick={handleRegister}
              data-testid="button-register"
            >
              <Ticket className="w-6 h-6 mr-3" />
              Buy Tickets Now
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              All proceeds benefit St. Pat's Troop 168 for adventures, gear, service projects, and leadership activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
