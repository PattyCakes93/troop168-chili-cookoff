import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, Calendar } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-primary-foreground">
            Ready to Join the Competition?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Register to compete by November 15, 2025, so we can plan space and supplies.
          </p>

          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-display mb-6 text-primary-foreground">
                Contact Patrick Ilfrey
              </h3>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-6">
                <a 
                  href="tel:651-402-8186" 
                  className="flex items-center gap-2 text-primary-foreground hover:text-chart-2 transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-medium">651-402-8186</span>
                </a>
                
                <a 
                  href="mailto:patrick@garageforce.com" 
                  className="flex items-center gap-2 text-primary-foreground hover:text-chart-2 transition-colors"
                  data-testid="link-email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-lg font-medium">patrick@garageforce.com</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-6">
                <Calendar className="w-5 h-5 text-chart-2" />
                <span>Registration Deadline: November 15, 2025</span>
              </div>

              <Button 
                variant="outline" 
                size="lg"
                className="bg-primary-foreground/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30"
                onClick={() => window.location.href = 'mailto:patrick@garageforce.com?subject=Chili Cook-Off Registration'}
                data-testid="button-contact-register"
              >
                Contact to Register
              </Button>
            </CardContent>
          </Card>

          <p className="text-lg text-primary-foreground/80 mt-8 leading-relaxed">
            Let's make this a night of good food, great fun, and real community impact. <br />
            Come cook, laugh, and help support our Scouts and our neighbors in need.
          </p>
        </div>
      </div>
    </section>
  );
}
