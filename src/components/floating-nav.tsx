'use client';

import { useState } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { Menu, ArrowUpRight, X } from 'lucide-react';
import styles from './floating-nav.module.scss';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

type FloatingNavProps = {
  className?: string;
};

export function FloatingNav({ className }: FloatingNavProps) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className={clsx(styles.root, className)}>
      <button type="button" className={styles.triggerButton} onClick={() => setOpen(true)}>
        <span className={styles.triggerIcon}>
          <Menu />
        </span>
        <span className={styles.triggerCopy}>
          <span className={styles.triggerLabel}>Menu</span>
          <span className={styles.triggerTitle}>Navigation</span>
        </span>
      </button>
      <div
        className={clsx(styles.overlay, open && styles.overlayVisible)}
        aria-hidden={!open}
        onClick={close}
      />
      <aside
        className={clsx(styles.drawer, open && styles.drawerOpen)}
        aria-modal="true"
        role="dialog"
        aria-label="Primary navigation"
      >
        <button type="button" className={styles.closeButton} onClick={close} aria-label="Close navigation">
          <X size={18} />
        </button>
        <div className={styles.drawerBody}>
          <span className={`${styles.decor} ${styles.decorOne}`} />
          <span className={`${styles.decor} ${styles.decorTwo}`} />
          <span className={`${styles.decor} ${styles.decorThree}`} />
          <div className={styles.sheetHeader}>
            <p className={styles.sheetEyebrow}>Navigate</p>
            <p className={styles.sheetTitle}>Explore</p>
          </div>
          <nav className={styles.navList}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink} onClick={close}>
                {item.label}
                <ArrowUpRight className={styles.navIcon} />
              </Link>
            ))}
          </nav>
          <div className={styles.sheetFooter}>
            <strong>Need a project?</strong>
            Let&apos;s work together to build your next digital product.
          </div>
        </div>
      </aside>
    </div>
  );
}
