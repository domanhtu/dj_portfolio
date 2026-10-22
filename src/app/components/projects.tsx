'use client';

import { useTranslation } from 'react-i18next';
import ScrollReveal from './scrollReveal';

const projects = [
  { id: 'squared', stack: 'Ruby on Rails' },
  { id: 'talsec', stack: 'React', href: 'https://my.talsec.app/' },
  { id: 'retribe', stack: 'Flutter', href: 'https://retribecollective.com/' },
  {
    id: 'portfolio',
    stack: 'Next.js',
    href: 'https://github.com/domanhtu/dj_portfolio',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-12">
      <p className="mb-2 font-mono text-sm tracking-[0.3em] text-[#224f95] dark:text-blue-300">
        {t('projects.eyebrow')}
      </p>
      <h2 className="mb-12 text-balance font-mono text-3xl font-bold text-gray-900 dark:text-neutral-200">
        {t('projects.heading')}
      </h2>

      <ol className="relative border-l-2 border-[#224f95]/20 pl-9 dark:border-blue-300/20">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className={i === 0 ? 'relative' : 'relative mt-10'}
          >
            <span
              className={
                i === projects.length - 1
                  ? 'absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-[#224f95] bg-[#e6e6e6] dark:border-blue-300 dark:bg-zinc-900'
                  : 'absolute -left-[2.6rem] top-1.5 h-3 w-3 rounded-full bg-[#224f95] dark:bg-blue-300'
              }
            />

            <ScrollReveal delayMs={i * 120}>
              <p className="font-mono text-xs uppercase tracking-widest text-[#224f95] dark:text-blue-300">
                {t(`projects.items.${project.id}.company`)}
              </p>
              <h3 className="mt-1 font-mono text-lg font-semibold text-gray-900 dark:text-neutral-200">
                {t(`projects.items.${project.id}.name`)}
              </h3>
              <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {t(`projects.items.${project.id}.description`)}
              </p>
              <p className="mt-2 flex items-center gap-3 text-xs text-gray-500 dark:text-gray-500">
                <span>{project.stack}</span>
                {project.href && (
                  <>
                    <span
                      aria-hidden
                      className="text-gray-300 dark:text-gray-700"
                    >
                      /
                    </span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#224f95] underline underline-offset-4 transition-colors hover:text-[#16325e] dark:text-blue-300 dark:hover:text-blue-200"
                    >
                      {t('projects.link')}
                    </a>
                  </>
                )}
              </p>
            </ScrollReveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
