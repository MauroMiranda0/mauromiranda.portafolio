import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-[80dvh] min-h-[500px] flex items-center justify-center text-center animate-in fade-in duration-500">
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto space-y-4">
          <Badge variant="secondary" className="text-sm shadow">Full-Stack Developer & Tech Enthusiast</Badge>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Mauricio Vergara
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Crafting robust and scalable web applications with a passion for clean code and user-centric design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="shadow-md">
              <Link href="#portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-sm">
               <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
