import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-primary-foreground">
            <span className="text-lg font-semibold font-display">ST. PAT'S SCOUT TROOP 168</span>
          </div>
          
          <p className="text-sm text-primary-foreground/70 max-w-2xl mx-auto">
            In partnership with Catholic Charities, supporting the La Crosse Warming Shelter
          </p>

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
