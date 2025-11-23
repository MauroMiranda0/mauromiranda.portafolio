import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Copyright } from './copyright';

export function ContactFooter() {
  return (
    <footer id="contact" className="w-full py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center text-center gap-8">
        <div className="space-y-2">
          <h3 className="font-headline text-2xl font-bold">Get in Touch</h3>
          <p className="text-primary-foreground/70 max-w-md">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" size="icon">
            <Link href="mailto:mauricio.vergara@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" size="icon">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-primary-foreground/50 text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground rounded-full" size="icon">
            <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        </div>
         <div className="flex items-center gap-2 text-primary-foreground/70">
            <MapPin className="h-5 w-5" />
            <span>San Francisco, CA</span>
         </div>
      </div>
      <Copyright />
    </footer>
  );
}
