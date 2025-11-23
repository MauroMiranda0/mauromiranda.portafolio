import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Copyright } from './copyright';
import styles from './contact-footer.module.scss';

const socialLinks = [
  { href: 'mailto:mauricio.vergara@example.com', label: 'Email', Icon: Mail },
  { href: '#', label: 'LinkedIn', Icon: Linkedin, external: true },
  { href: '#', label: 'GitHub', Icon: Github, external: true },
];

export function ContactFooter() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3 className={styles.title}>Get in Touch</h3>
          <p className={styles.description}>
            I&apos;m currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>
        <div className={styles.socials}>
          {socialLinks.map(({ href, label, Icon, external }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={styles.socialLink}
            >
              <Icon aria-hidden size={20} />
            </Link>
          ))}
        </div>
        <div className={styles.location}>
          <MapPin aria-hidden size={20} />
          <span>San Francisco, CA</span>
        </div>
      </div>
      <Copyright />
    </footer>
  );
}
