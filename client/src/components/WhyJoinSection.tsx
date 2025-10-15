import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Users2, HandHeart } from 'lucide-react';
import communityImage from '@assets/stock_images/community_gathering__03cee9ca.jpg';
import catholicCharitiesLogo from '@assets/image_1760488967768.png';

const benefits = [
  {
    icon: ChefHat,
    text: "Have fun cooking and sharing your favorite chili recipe.",
  },
  {
    icon: Users2,
    text: "Connect with neighbors, businesses, and Scout families.",
  },
  {
    icon: Heart,
    text: "Support the youth of St. Pat's Troop 168 as they grow in leadership and service.",
  },
  {
    icon: HandHeart,
    text: "Extra chili will be donated to the La Crosse Warming Shelter through Catholic Charities.",
  },
];

export default function WhyJoinSection() {
  return (
    <section id="details" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-foreground">
              Why Join?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              This is more than just a cook-off — it's about community, compassion, and creating lasting memories.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start"
                  data-testid={`benefit-${index}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-foreground pt-2">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <Card className="mt-8 border-2 border-destructive bg-destructive/5">
              <CardContent className="p-6 space-y-4">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-destructive font-bold">No good chili should go to waste!</span> We're aiming to donate 20 gallons to those in need.
                </p>
                <div className="flex items-center justify-center gap-3 pt-2 border-t">
                  <span className="text-xs text-muted-foreground">In partnership with</span>
                  <img 
                    src={catholicCharitiesLogo} 
                    alt="Catholic Charities" 
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img 
                src={communityImage} 
                alt="Community gathering" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-primary/20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
