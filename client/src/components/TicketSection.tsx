import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Ticket } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const affiliateGroups = [
  "Scout Pack 1",
  "Scout Pack 2", 
  "Scout Pack 3",
  "Parent Volunteer Group",
  "School Staff",
  "Local Business - Garage Force",
  "Community Member",
  "Other",
];

export default function TicketSection() {
  const [quantity, setQuantity] = useState(1);
  const [selectedAffiliate, setSelectedAffiliate] = useState<string>('');
  const { toast } = useToast();

  const ticketPrice = 15;
  const total = quantity * ticketPrice;

  const handleRegister = () => {
    if (!selectedAffiliate) {
      toast({
        title: "Please select a referral source",
        description: "We need to know who referred you to properly track affiliates.",
        variant: "destructive",
      });
      return;
    }

    console.log('Registration triggered:', { quantity, total, affiliate: selectedAffiliate });
    
    toast({
      title: "Registration Started!",
      description: `Proceeding to checkout for ${quantity} ticket(s) supporting ${selectedAffiliate}.`,
    });

    // Reset form - in real app, this would redirect to payment
    setQuantity(1);
    setSelectedAffiliate('');
  };

  return (
    <section id="tickets" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
              Get Your Tickets
            </h2>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Get fired up for a great cause! Secure your spot at the St. Pat's Troop 168 Chili Cook-Off and help our Scouts keep the adventure going all year long.
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Ticket className="w-6 h-6 text-primary" />
                Event Tickets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="affiliate" className="text-base font-semibold">
                    Who referred you? <span className="text-destructive">*</span>
                  </Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Help us track which group gets credit for your ticket purchase
                  </p>
                  <Select value={selectedAffiliate} onValueChange={setSelectedAffiliate}>
                    <SelectTrigger 
                      id="affiliate" 
                      className="mt-2"
                      data-testid="select-affiliate"
                    >
                      <SelectValue placeholder="Select your referral source" />
                    </SelectTrigger>
                    <SelectContent>
                      {affiliateGroups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {selectedAffiliate && (
                  <Badge 
                    className="bg-primary text-primary-foreground"
                    data-testid="badge-selected-affiliate"
                  >
                    Your purchase supports: {selectedAffiliate}
                  </Badge>
                )}

                <div>
                  <Label className="text-base">Number of Tickets</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                      data-testid="button-decrease-quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <div className="w-20 text-center">
                      <div className="text-2xl font-bold font-display">{quantity}</div>
                      <div className="text-sm text-muted-foreground">tickets</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                      data-testid="button-increase-quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Price per ticket:</span>
                    <span className="font-semibold">${ticketPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold font-display text-primary" data-testid="text-total-price">
                      ${total}
                    </span>
                  </div>
                </div>

                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={handleRegister}
                  data-testid="button-register"
                >
                  Register - ${total}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  All proceeds benefit St. Pat's Troop 168 for adventures, gear, service projects, and leadership activities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
