import { Heart } from 'lucide-react';
import scoutingAmericaLogo from '@assets/image_1760489027963.png';
import catholicCharitiesLogo from '@assets/image_1760488967768.png';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-border py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <span className="text-lg font-semibold font-display">ST. PAT'S SCOUT TROOP 168</span>
          </div>
          
          <p className="text-sm text-primary-foreground/70 max-w-2xl mx-auto">
            In partnership with Catholic Charities, supporting the La Crosse Warming Shelter
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-6">
            <div className="h-16 flex items-center">
              <img 
                src={scoutingAmericaLogo} 
                alt="Scouting America" 
                className="h-12 w-auto object-contain"
              />
            </div>
            <div className="h-16 flex items-center">
              <img 
                src={catholicCharitiesLogo} 
                alt="Catholic Charities" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>for our community</span>
          </div>

          <p className="text-xs text-primary-foreground/50">
            © 2025 St. Pat's Scout Troop 168. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
