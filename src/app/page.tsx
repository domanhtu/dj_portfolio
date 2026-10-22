import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './components/scrollReveal';
import GitHubIcon from '@/components/icons/GitHubIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';

const skills = [
  'Javascript',
  'Typescript',
  'React',
  'Flutter',
  'Next.js',
  'Nuxt.js',
  'Vue.js',
  'C# and .NET',
];

const projects = [
  {
    name: 'Squared & Auctify',
    company: 'Sinfin · 2023–2025',
    description:
      'Ruby on Rails vývojář — bug-fixing a nové funkce pro CMS Squared, spoluautor nového auction enginu pro Auctify.',
    stack: 'Ruby on Rails',
  },
  {
    name: 'Talsec portál',
    company: 'KOALA42 · 2025–2025',
    description:
      'Dokončení React CRM portálu pro Talsec (App & API protection SDK) s grafy a reporty.',
    stack: 'React',
    href: 'https://my.talsec.app/',
  },
  {
    name: 'ReTribe',
    company: 'KOALA42 · 2025–2026',
    description:
      'Flutter mobilní aplikace pro iOS a Android spojující bývalé profesionální sportovce — dotazníky, feed a chat.',
    stack: 'Flutter',
    href: 'https://retribecollective.com/',
  },
  {
    name: 'Tento portfolio web',
    company: 'Osobní projekt',
    description:
      'Next.js web s playlisty tahanými živě ze Spotify API pro DJing.',
    stack: 'Next.js',
    href: 'https://github.com/domanhtu/dj_portfolio',
  },
];

const socials = [
  { href: 'https://github.com/domanhtu/', Icon: GitHubIcon, label: 'GitHub' },
  {
    href: 'https://www.instagram.com/tuti.do/',
    Icon: InstagramIcon,
    label: 'Instagram',
  },
  {
    href: 'https://www.linkedin.com/in/tuti-do-2213a9246/',
    Icon: LinkedInIcon,
    label: 'LinkedIn',
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#16325e] via-[#224f95] to-[#16325e] font-mono text-white">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-yellow-200/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-12 lg:py-28">
          <div className="space-y-10">
            <div>
              <p className="mb-2 text-sm tracking-[0.3em] text-blue-200">
                VÍTEJTE
              </p>
              <h1 className="text-6xl font-bold leading-none lg:text-8xl">
                Tuti Do
              </h1>
            </div>

            <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              <div>
                <h2 className="mb-3 border-b border-white/20 pb-2 text-sm uppercase tracking-widest text-blue-200">
                  Frontend web a mobile developer
                </h2>
                <p className="text-lg">Full-stack developer</p>
                <p className="mt-2 text-sm text-blue-100">
                  Absolvent s inžernýrským titulem ze školy České vysoké učení
                  technické v Praze na Fakultě informačních technologií v oboru
                  Webové inženýrství
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-sm transition-colors duration-200 hover:border-blue-200/60 hover:bg-blue-200/10 hover:text-blue-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-3 border-b border-white/20 pb-2 text-sm uppercase tracking-widest text-blue-200">
                  Open-format
                  <br />
                  DJ
                </h2>
                <p className="text-lg">Freelance eventový DJ</p>
                <p className="mt-2 text-sm text-blue-100">
                  Zkušený DJ hrající na maturitních plesech, afterparties,
                  firemních večírcích, svatbách nebo i v Pražských barech.
                </p>
                <Link
                  href="/playlists"
                  className="mt-2 inline-flex items-center gap-1 text-yellow-200 underline underline-offset-4 transition-colors hover:text-yellow-100"
                >
                  Playlist
                </Link>
              </div>
            </div>

            <div className="flex gap-4">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group rounded-full border border-white/20 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[380px] w-full max-w-xs sm:h-[440px] sm:max-w-sm lg:h-[480px] lg:max-w-none">
            <div className="absolute left-1/2 top-0 h-72 w-56 -translate-x-1/2 overflow-hidden rounded-3xl border-4 border-white/20 shadow-2xl sm:h-80 sm:w-64 lg:left-1/4 lg:h-[22rem] lg:w-72">
              <Image
                src="/headshot-1.jpg"
                alt="Tuti Do"
                fill
                sizes="(min-width: 1024px) 18rem, (min-width: 640px) 16rem, 14rem"
                className="object-cover object-top"
                unoptimized
                priority
              />
            </div>

            <div className="absolute bottom-0 left-0 h-36 w-28 -rotate-6 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl sm:h-44 sm:w-36 lg:h-48 lg:w-40">
              <Image
                src="/dj-2.JPG"
                alt="Tuti Do za DJ pultem"
                fill
                sizes="(min-width: 1024px) 10rem, 9rem"
                className="object-cover"
                unoptimized
              />
            </div>

            <div className="absolute bottom-4 right-0 h-28 w-40 rotate-6 overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl sm:h-32 sm:w-48 lg:h-40 lg:w-56">
              <Image
                src="/dj-1.JPG"
                alt="Tuti Do mixuje pro davem"
                fill
                sizes="(min-width: 1024px) 14rem, 12rem"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-center place-items-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

      <section className="mx-auto max-w-3xl px-6 pb-24 lg:px-12">
        <p className="mb-2 font-mono text-sm tracking-[0.3em] text-[#224f95] dark:text-blue-300">
          PROJEKTY
        </p>
        <h2 className="mb-12 text-balance font-mono text-3xl font-bold text-gray-900 dark:text-neutral-200">
          Na čem jsem pracoval
        </h2>

        <ol className="relative border-l-2 border-[#224f95]/20 pl-9 dark:border-blue-300/20">
          {projects.map((project, i) => (
            <li
              key={project.name}
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
                  {project.company}
                </p>
                <h3 className="mt-1 font-mono text-lg font-semibold text-gray-900 dark:text-neutral-200">
                  {project.name}
                </h3>
                <p className="mt-1 max-w-[60ch] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
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
                        Odkaz
                      </a>
                    </>
                  )}
                </p>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
