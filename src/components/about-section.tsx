import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profilePic = PlaceHolderImages.find(img => img.id === 'profile-pic');

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card animate-in fade-in-0 slide-in-from-bottom-10 duration-700">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a dedicated software engineer with a knack for building innovative digital experiences from the ground up. With a background in computer science, I thrive in collaborative environments, turning complex problems into elegant solutions.
            </p>
             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and staying active with hiking and sports.
            </p>
          </div>
          <div className="flex justify-center">
            {profilePic && (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                data-ai-hint={profilePic.imageHint}
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square shadow-lg border-4 border-background"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
