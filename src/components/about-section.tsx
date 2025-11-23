import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import styles from './about-section.module.scss';

const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-pic');

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>About Me</h2>
            <p className={styles.description}>
              I&apos;m a dedicated software engineer with a knack for building innovative digital experiences from the
              ground up. With a background in computer science, I thrive in collaborative environments, turning complex
              problems into elegant solutions.
            </p>
            <p className={styles.description}>
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source projects, and
              staying active with hiking and sports.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            {profilePic && (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                data-ai-hint={profilePic.imageHint}
                width={400}
                height={400}
                className={styles.portrait}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
