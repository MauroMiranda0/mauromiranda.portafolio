import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-pic');

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex w-full flex-col overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-cyan-100"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-70" />
        <div className="absolute top-8 right-48 h-20 w-20 rounded-full border-[3px] border-emerald-400/60" />
        <div className="absolute bottom-10 right-4 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
        <div
          className="absolute bottom-12 left-12 h-28 w-28 opacity-60"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(45, 212, 191, 0.55) 1px, transparent 0)',
            backgroundSize: '16px 16px',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/80 to-transparent" />
      </div>
      <div className="container relative z-10 grid gap-12 px-5 pb-14 pt-20 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 text-left">
          <Badge
            variant="outline"
            className="w-fit rounded-full border-emerald-200 bg-white/80 px-4 py-1 text-sm font-medium uppercase tracking-[0.35em] text-emerald-700 shadow-sm"
          >
            Full-Stack Developer
          </Badge>
          <div className="space-y-4">
            <p className="text-base font-semibold uppercase tracking-[0.45em] text-emerald-700">
              Hey! I am
            </p>
            <h1 className="font-headline text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Mauricio Vergara
              <span className="block text-emerald-700">Web Developer</span>
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">
              I build modern websites, web apps, and digital products with smooth interactions, scalable architectures,
              and a design-first mindset to help businesses tell their story online.
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-emerald-600 px-8 text-base font-semibold shadow-lg hover:bg-emerald-500"
            >
              <Link href="#portfolio">Learn More</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full bg-slate-900 px-8 text-base font-semibold text-white shadow-lg hover:bg-slate-800"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
          </div>
          <div className="hidden items-center gap-3 pt-2 text-emerald-700 sm:flex">
            <svg className="h-5 w-24" viewBox="0 0 120 20" fill="none">
              <path
                d="M1 10c15-12 25 12 40 0s25 12 40 0 25 12 40 0"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-[0.4em]">Let&apos;s build</span>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-[-48px] rounded-full border border-emerald-300/60" />
            <div className="absolute inset-[-24px] rounded-full border-4 border-emerald-100/80" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-200 to-cyan-300 opacity-70" />
            {profilePic ? (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                fill
                sizes="(min-width: 1024px) 320px, 70vw"
                className="rounded-full border-[10px] border-white object-cover shadow-2xl"
                priority
              />
            ) : (
              <div className="absolute inset-0 rounded-full bg-emerald-200" />
            )}
          </div>
          <div className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 rotate-90 items-center justify-center rounded-full border border-emerald-200 text-emerald-600 lg:flex">
            <ArrowDown className="h-5 w-5" />
          </div>
        </div>
      </div>
      <div className="mb-10 flex w-full justify-center lg:hidden">
        <Link href="#about" aria-label="Scroll to about section" className="flex flex-col items-center gap-2 text-emerald-700">
          <span className="text-xs uppercase tracking-[0.4em]">Scroll</span>
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
