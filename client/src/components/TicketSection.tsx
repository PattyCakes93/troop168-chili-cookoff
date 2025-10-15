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
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const { toast } = useToast();

  const ticketPrice = 15;
  const total = quantity * ticketPrice;

  const handlePurchase = () => {
    if (!selectedAffiliate) {
      toast({
        title: "Please select a referral source",
        description: "We need to know who referred you to properly track affiliates.",
        variant: "destructive",
      });
      return;
    }

    if (!buyerName || !buyerEmail) {
      toast({
        title: "Please fill in your details",
        description: "We need your name and email to complete the purchase.",
        variant: "destructive",
      });
      return;
    }

    console.log('Purchase triggered:', { quantity, total, affiliate: selectedAffiliate, name: buyerName, email: buyerEmail });
    
    toast({
      title: "Purchase Successful! 🎉",
      description: `Your ${quantity} ticket(s) support ${selectedAffiliate}. Check your email for confirmation.`,
    });

    // Reset form - in real app, this would happen after payment
    setQuantity(1);
    setSelectedAffiliate('');
    setBuyerName('');
    setBuyerEmail('');
  };

  return (
    <section id="tickets" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-foreground">
              Get Your Tickets
            </h2>
            <p className="text-lg text-muted-foreground">
              Support your favorite scout group while securing your spot at the event!
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
                  <Label htmlFor="name" className="text-base">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="mt-2"
                    data-testid="input-buyer-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={buyerEmail}
                    onChange={(e) => setBuyerEmail(e.target.value)}
                    className="mt-2"
                    data-testid="input-buyer-email"
                  />
                </div>

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
                  onClick={handlePurchase}
                  data-testid="button-purchase-tickets"
                >
                  Purchase Tickets - ${total}
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
