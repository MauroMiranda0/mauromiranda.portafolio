import styles from './copyright.module.scss';

export function Copyright() {
  const year = new Date().getFullYear();
  return <div className={styles.copyright}>&copy; {year} Mauricio Vergara. All Rights Reserved.</div>;
}
