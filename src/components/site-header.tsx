import Image from 'next/image';
import Link from 'next/link';
import styles from './site-header.module.scss';

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.decorations}>
        <span className={`${styles.hex} ${styles.hexPrimary}`} />
        <span className={`${styles.hex} ${styles.hexOutline}`} />
        <span className={`${styles.hex} ${styles.hexAccent}`} />
      </div>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="Ir al inicio">
          <Image
            src="/images/logos/logo.svg"
            alt="Mauricio Vergara personal logo"
            width={140}
            height={40}
            className={styles.logo}
            priority
          />
        </Link>
      </div>
    </header>
  );
}
