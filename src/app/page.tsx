import { AboutSection } from '@/components/about-section';
import { ContactFooter } from '@/components/contact-footer';
import { HeroSection } from '@/components/hero-section';
import { PortfolioSection } from '@/components/portfolio-section';
import { SkillsSection } from '@/components/skills-section';
import { SiteHeader } from '@/components/site-header';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <PortfolioSection />
      </main>
      <ContactFooter />
    </div>
  );
}
