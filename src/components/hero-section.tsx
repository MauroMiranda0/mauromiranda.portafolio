import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FloatingNav } from '@/components/floating-nav';
import styles from './hero-section.module.scss';

const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-pic');

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.background}>
        <span className={`${styles.hexShape} ${styles.hexOne}`} />
        <span className={`${styles.hexShape} ${styles.hexTwo}`} />
        <span className={`${styles.hexShape} ${styles.hexThree}`} />
        <span className={`${styles.hexShape} ${styles.hexFour}`} />
        <span className={styles.fade} />
      </div>
      <FloatingNav className={styles.floatingNav} />
      <div className={styles.content}>
        <div className={styles.textColumn}>
          <div className={styles.brandLogoWrapper}>
            <Image
              src="/images/logos/logo.png"
              alt="Mauro Miranda logo"
              width={320}
              height={120}
              className={styles.brandLogo}
              priority
            />
            <span className={styles.tag}>Ingeniero Web</span>
          </div>
          <p className={styles.description}>
            I build modern websites, web apps, and digital products with smooth interactions, scalable architectures,
            and a design-first mindset to help businesses tell their story online.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="#portfolio" className={`${styles.ctaButton} ${styles.primaryCta}`}>
              Saber más de mi
            </Link>
            <Link href="#contact" className={`${styles.ctaButton} ${styles.secondaryCta}`}>
              Descargar CV
            </Link>
          </div>
          <div className={styles.buildMotif}>
            <div className={styles.motifGroup}>
              {Array.from({ length: 4 }).map((_, index) => (
                <span key={`motif-${index}`} className={styles.motifHex} />
              ))}
            </div>
            <span className={styles.buildLabel}>Let&apos;s build</span>
          </div>
        </div>
        <div className={styles.visual}>
          <div className={styles.photoWrapper}>
            <span className={`${styles.hexShape} ${styles.photoGlow}`} />
            <span className={`${styles.hexShape} ${styles.photoBorder}`} />
            <div className={styles.photoFrame}>
              {profilePic ? (
                <Image
                  src={profilePic.imageUrl}
                  alt={profilePic.description}
                  fill
                  sizes="(min-width: 1024px) 320px, 70vw"
                  className={styles.photoImage}
                  priority
                />
              ) : (
                <div className={styles.photoFallback} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <Link href="#about" aria-label="Scroll to about section" className={styles.scrollLink}>
          <span className={styles.scrollHintText}>Scroll</span>
          <ArrowDown className={styles.scrollIcon} />
        </Link>
      </div>
    </section>
  );
}
