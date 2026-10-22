import Hero from './components/hero';
import Projects from './components/projects';

export default function Home() {
  return (
    <>
      <Hero />

      <div className="flex justify-center place-items-center before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]"></div>

      <Projects />
    </>
  );
}
