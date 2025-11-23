import { CodeXml, Database, Server, Container, GitMerge, Component, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { name: 'TypeScript', icon: <CodeXml className="h-8 w-8" /> },
  { name: 'React', icon: <Component className="h-8 w-8" /> },
  { name: 'Next.js', icon: <Globe className="h-8 w-8" /> },
  { name: 'Node.js', icon: <Server className="h-8 w-8" /> },
  { name: 'PostgreSQL', icon: <Database className="h-8 w-8" /> },
  { name: 'Docker', icon: <Container className="h-8 w-8" /> },
  { name: 'Git', icon: <GitMerge className="h-8 w-8" /> },
];

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Expertise</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of technologies and tools I'm proficient with. I'm always eager to learn and adapt to new stacks.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center text-center gap-2">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-md border hover:bg-accent/10 transition-colors">
                  <div className="text-primary">{skill.icon}</div>
              </div>
              <h3 className="text-sm font-semibold font-headline">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
