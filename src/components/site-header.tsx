import Link from 'next/link';
import { Briefcase, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-gradient-to-r from-emerald-50 via-white to-cyan-50/80 backdrop-blur">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 left-[-3rem] h-48 w-48 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="absolute -bottom-16 right-6 h-56 w-56 rounded-full border border-teal-300/60" />
      </div>
      <div className="container relative flex h-20 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-3 rounded-[2.5rem] border-2 border-emerald-900/30 bg-white/80 px-6 py-2 text-lg font-semibold tracking-wide text-emerald-900 shadow hover:-translate-y-0.5 hover:shadow-lg transition"
              >
                Menu
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 p-1">
                  <ChevronDown className="h-4 w-4 text-emerald-600" />
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[180px] bg-white/90 backdrop-blur border border-emerald-100 shadow-xl">
              {navItems.map((item) => (
                <DropdownMenuItem key={item.href} className="px-3 py-2" asChild>
                  <Link href={item.href} className="w-full text-base text-emerald-900">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/" className="hidden sm:flex items-center space-x-2 rounded-full bg-white/70 px-4 py-2 shadow-sm">
            <Briefcase className="h-5 w-5 text-emerald-700" />
            <span className="font-bold font-headline text-base text-emerald-900">Mauricio Vergara</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium">
          {navItems.map((item) => (
            <Button key={item.href} variant="link" asChild className="text-emerald-900/70 hover:text-emerald-900">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
