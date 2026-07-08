export default function IntroSection() {
  return (
    <section id="inicio" className="bg-black text-center flex flex-col items-center justify-center px-6 py-20">
      <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Hi, My name is</p>
      <h1 className="mt-4 text-5xl font-black text-white sm:text-6xl">Jhon Amaya.</h1>
      <h2 className="mt-2 text-3xl font-semibold text-slate-300 sm:text-4xl typewriter">Full-stack Developer</h2>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 text-center">
        I am a junior full-stack developer specialized in React and Node.js. I love creating accessible, fast, and polished interfaces down to the smallest detail. I am currently looking for my first opportunity to grow as part of a team.
      </p>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href="#proyectos"
          className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
        >
          View projects →
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-lg border border-slate-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
        >
          Contact me
        </a>
      </div>
      <div className="mt-10 flex items-center justify-center gap-4 text-slate-300">
        <a
          href="https://github.com/Amaya2912"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.287-.01-1.047-.015-2.055-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.81 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.305-.535-1.53.115-3.19 0 0 1.005-.322 3.3 1.23a11.516 11.516 0 013.005-.405c1.02.005 2.045.138 3.005.405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.66.244 2.885.12 3.19.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.096.81 2.21 0 1.595-.015 2.875-.015 3.265 0 .32.215.7.825.58C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/jhonamaya2912/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.268 2.369 4.268 5.455v6.286zM5.337 7.433a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.723V22.28C0 23.232.792 24 1.771 24h20.451C23.2 24 24 23.232 24 22.28V1.723C24 .77 23.2 0 22.225 0z" />
          </svg>
        </a>
        <a
          href="mailto:jhamaya2904@gmail.com"
          aria-label="Email"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 transition hover:border-white"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
