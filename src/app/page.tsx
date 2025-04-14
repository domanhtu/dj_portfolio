import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";

export default function Home() {
  return (
    <>
      <div className="bg-[#224f95] font-mono text-white p-12 lg:p-24">
        <div className="lg:w-4/5 lg:mx-auto lg:flex place-items-center">
          <div className="space-y-8 lg:w-2/3">
            <h1 className="text-7xl lg:text-8xl">Tuti Do</h1>
            <div className="lg:flex place-items-center space-y-6 lg:space-y-0 lg:space-x-20 text-xl">
              <div className="lg:w-1/2">
                <p>Full-stack developer</p>
                <p>Absolvent školy České vysoké učení technické v Praze na
                Fakultě informačních technologií</p>
              </div>
              <div className="lg:w-1/3">
                <span className="underline">Webový vývojář</span>
                <ul>
                  <li>Ruby on Rails</li>
                  <li>C# - Blazor framework</li>
                  <li>PHP - Symfony framework</li>
                  <li>Python - Django framework</li>
                  <li>React - Next 13</li>
                </ul>
              </div>
            </div>
            <div className="lg:flex flex-row-reverse justify-end space-y-6 lg:space-y-0 text-xl place-items-center">
              <div className="lg:w-1/2 lg:ml-40">
                <span className="underline">DJ</span>
                <div>
                  <span>Výběr písniček: </span>
                  <Link className="text-yellow-200 underline" href={"/playlists"}>
                    Playlist
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="grid grid-cols-3 gap-y-6 place-items-center">
                  <div className="group hover:scale-110 transition-transform duration-300 transform origin-center">
                    <a
                      href="https://github.com/domanhtu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon className="h-10 w-10" />
                    </a>
                  </div>
                  <div className="group hover:scale-110 transition-transform duration-300 transform origin-center">
                    <a
                      href="https://www.instagram.com/tuti.do/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="h-10 w-10" />
                    </a>
                  </div>
                  <div className="group hover:scale-110 transition-transform duration-300 transform origin-center">
                    <a
                      href="https://www.linkedin.com/in/tuti-do-2213a9246/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon className="h-10 w-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="my-6 lg:my-0"
            src="/headshot-1.jpg"
            alt="Tuti Do"
            width={400}
            height={400}
            unoptimized={true}
            priority
          />
        </div>
      </div>

      <div className="flex justify-center place-items-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>
    </>
  );
}
