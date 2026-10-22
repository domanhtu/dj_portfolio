import Image from 'next/image';
import Link from 'next/link';
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

export default function Hero() {
  return (
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
  );
}
