import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Flame } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function DonationSection() {
  const [customAmount, setCustomAmount] = useState('');
  const { toast } = useToast();

  const handleDonation = (amount: number, label: string) => {
    // TODO: Integrate with payment processor (Google Form or Stripe)
    // For now, show confirmation
    toast({
      title: "Thank you for supporting St. Pat's Troop 168!",
      description: "Your generosity helps our Scouts learn, serve, and grow.",
      duration: 5000,
    });
    
    // Placeholder - replace with actual payment link
    console.log(`Donation: $${amount} - ${label}`);
  };

  const handleCustomDonation = () => {
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    handleDonation(amount, 'Custom Amount');
    setCustomAmount('');
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-foreground">
              Can't make it to the Chili Cook-Off? You can still help!
            </h2>
            <div className="space-y-3">
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Our Scouts could really use some new gear!
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                If you can't make it to the cook-off, please consider making a donation — every bit helps our youth programs grow stronger.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">
                  Support a Scout
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">$50</p>
                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => handleDonation(50, 'Support a Scout')}
                  data-testid="button-donate-50"
                >
                  Donate $50
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">
                  Fund New Gear
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">$100</p>
                <Button 
                  variant="default"
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => handleDonation(100, 'Fund New Gear')}
                  data-testid="button-donate-100"
                >
                  Donate $100
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <Flame className="w-8 h-8 text-destructive" />
                  </div>
                </div>
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">
                  Sponsor a Patrol
                </h3>
                <p className="text-3xl font-bold text-primary mb-4">$200</p>
                <Button 
                  variant="destructive"
                  size="lg" 
                  className="w-full text-lg"
                  onClick={() => handleDonation(200, 'Sponsor a Patrol')}
                  data-testid="button-donate-200"
                >
                  Donate $200
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold font-display mb-4 text-center text-foreground">
                Other Amount
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="text-lg"
                    min="1"
                    step="1"
                    data-testid="input-custom-amount"
                  />
                </div>
                <Button 
                  variant="default"
                  size="lg"
                  onClick={handleCustomDonation}
                  className="sm:w-auto w-full"
                  data-testid="button-donate-custom"
                >
                  Donate
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Every donation makes a difference in our Scouts' journey!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
