import type { LucideIcon } from 'lucide-react';
import { CodeXml, Database, Server, Container, GitMerge, Component, Globe } from 'lucide-react';
import styles from './skills-section.module.scss';

const skills: { name: string; Icon: LucideIcon }[] = [
  { name: 'TypeScript', Icon: CodeXml },
  { name: 'React', Icon: Component },
  { name: 'Next.js', Icon: Globe },
  { name: 'Node.js', Icon: Server },
  { name: 'PostgreSQL', Icon: Database },
  { name: 'Docker', Icon: Container },
  { name: 'Git', Icon: GitMerge },
];

export function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Skills & Expertise</h2>
          <p className={styles.description}>
            A selection of technologies and tools I&apos;m proficient with. I&apos;m always eager to learn and adapt to
            new stacks.
          </p>
        </div>
        <div className={styles.skillsGrid}>
          {skills.map(({ name, Icon }) => (
            <div key={name} className={styles.skillCard}>
              <span className={styles.skillIcon}>
                <Icon aria-hidden size={32} />
              </span>
              <h3 className={styles.skillName}>{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
