import { AboutSection } from '@/components/about-section';
import { ContactFooter } from '@/components/contact-footer';
import { HeroSection } from '@/components/hero-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { SiteHeader } from '@/components/site-header';
import { SkillsSection } from '@/components/skills-section';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
      </main>
      <ContactFooter />
    </div>
  );
}
