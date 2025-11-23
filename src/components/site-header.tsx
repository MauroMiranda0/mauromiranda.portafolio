import Link from 'next/link';
import { Briefcase } from 'lucide-react';
import { Button } from './ui/button';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg">Mauricio Vergara</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          <Button variant="link" asChild className="text-foreground/60">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground/60">
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground/60">
            <Link href="#portfolio">Portfolio</Link>
          </Button>
          <Button variant="link" asChild className="text-foreground/60">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
