import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const project1Pic = PlaceHolderImages.find(img => img.id === 'project-1');
const project2Pic = PlaceHolderImages.find(img => img.id === 'project-2');
const project3Pic = PlaceHolderImages.find(img => img.id === 'project-3');

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern, responsive user interface, product management, and a secure checkout process.',
    image: project1Pic,
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    liveHref: '#',
    repoHref: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A real-time data visualization dashboard for business intelligence, featuring interactive charts and customizable reports.',
    image: project2Pic,
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    liveHref: '#',
    repoHref: '#',
  },
    {
    title: 'Project Management Tool',
    description: 'A collaborative platform for teams to manage tasks, track progress, and communicate effectively, enhancing productivity.',
    image: project3Pic,
    tags: ['React', 'Firebase', 'Tailwind CSS', 'ShadCN UI'],
    liveHref: '#',
    repoHref: '#',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {project.image && (
                <div className="overflow-hidden">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.image.description}
                      data-ai-hint={project.image.imageHint}
                      width={600}
                      height={400}
                      className="w-full object-cover aspect-video transition-transform duration-500 hover:scale-105"
                    />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-start gap-2">
                <Button asChild variant="outline">
                  <Link href={project.repoHref} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </Link>
                </Button>
                <Button asChild>
                   <Link href={project.liveHref} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
