export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <nav className="mb-16 flex w-full max-w-xl flex-col gap-5 text-sm sm:mb-24 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-semibold text-sky-300">INBUILTCUTS</span>

          <div className="flex gap-5 text-slate-300">
            <a className="transition hover:text-white" href="#about">
             About
               </a>
               <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#contact">
              Contact
              </a>
          </div>
     </nav>
      <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
        PORTFOLIO
      </p>

      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m Yash Vardhan.
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
        I&apos;m an editor and a beginner web developer learning to build my portfolio with useful, thoughtful
        tools.
      </p>
      <section
        id="about"
        className="mt-16 max-w-xl rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold">About me</h2>

        <p className="mt-4 leading-7 text-slate-300">
        I enjoy learning how websites work and turning ideas into simple, useful
        experiences.
        </p>
       </section>
     <section
        id="projects"
        className="mt-16 max-w-xl">
         <h2 className="text-2xl font-semibold">Projects</h2>

          <article className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
         <p className="text-sm font-semibold tracking-[0.2em] text-sky-300">
          PROJECT 01 · IN PROGRESS
          </p>

          <h3 className="mt-3 text-xl font-semibold">
           My Portfolio Website
          </h3>

            <p className="mt-3 leading-7 text-slate-300">
             A personal website where I am learning to present my work, skills, and
             progress as a developer.
             </p>

            <div className="mt-5 flex gap-3">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
               Next.js
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">
              Tailwind CSS
             </span>
              </div>
         </article>
       </section>
        <section id="contact" className="mt-16 max-w-xl border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-semibold">Let&apos;s connect</h2>

            <p className="mt-4 leading-7 text-slate-300">
              For work related queries, feel free to reach out!
            </p>

              <a
                className="mt-4 inline-block font-semibold text-sky-300 underline decoration-sky-300/40 underline-offset-4 transition hover:text-sky-200"
                href="mailto:inbuilt.work1@gmail.com">

                inbuilt.work1@gmail.com
              </a>
        </section>
        <footer className="mt-20 max-w-xl border-t border-slate-800 py-8 text-sm text-slate-500">
        © 2026 Yash Vardhan. All rights reserved.
        </footer>
    </main>
  );
}
