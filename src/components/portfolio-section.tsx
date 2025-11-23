import Image from 'next/image';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import styles from './portfolio-section.module.scss';

const project1Pic = PlaceHolderImages.find(img => img.id === 'project-1');
const project2Pic = PlaceHolderImages.find(img => img.id === 'project-2');
const project3Pic = PlaceHolderImages.find(img => img.id === 'project-3');

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with a modern, responsive user interface, product management, and a secure checkout process.',
    image: project1Pic,
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    liveHref: '#',
    repoHref: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A real-time data visualization dashboard for business intelligence, featuring interactive charts and customizable reports.',
    image: project2Pic,
    tags: ['React', 'D3.js', 'Node.js', 'WebSocket'],
    liveHref: '#',
    repoHref: '#',
  },
    {
    title: 'Project Management Tool',
    description: 'A collaborative platform for teams to manage tasks, track progress, and communicate effectively, enhancing productivity.',
    image: project3Pic,
    tags: ['React', 'Firebase', 'Tailwind CSS', 'ShadCN UI'],
    liveHref: '#',
    repoHref: '#',
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Projects</h2>
          <p className={styles.description}>Here are some of the projects I&apos;m proud to have worked on.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.card}>
              {project.image && (
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image.imageUrl}
                    alt={project.image.description}
                    data-ai-hint={project.image.imageHint}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Link
                    href={project.repoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionLink} ${styles.outline}`}
                  >
                    <Github aria-hidden size={16} /> Code
                  </Link>
                  <Link
                    href={project.liveHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionLink} ${styles.solid}`}
                  >
                    <ExternalLink aria-hidden size={16} /> Live Demo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
