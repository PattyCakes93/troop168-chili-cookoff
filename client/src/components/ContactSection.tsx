import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-primary-foreground">
            Ready to Join the Competition?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Register to compete by November 15, 2026, so we can plan space and supplies.
          </p>

          <Card className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
            <CardContent className="p-8">
              <a 
                href="https://forms.gle/QghAykWBEzkyAPpH9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-primary-foreground hover:text-chart-2 transition-colors text-xl font-semibold"
                data-testid="link-register-form"
              >
                <Calendar className="w-6 h-6 text-chart-2" />
                <span>Register Here</span>
              </a>
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
