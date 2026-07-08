export default function AboutSection() {
  return (
    <section id="sobre-mi" className="rounded-3xl bg-black p-10 shadow-lg shadow-slate-950/40">
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="font-mono text-white">01.</span>
          <h2 className="text-3xl font-semibold text-white">About me</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch lg:h-full">
          <div className="h-full flex flex-col">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-slate-950/80 p-8 shadow-xl border border-slate-800">
              <div>
                    {/*<div className="mb-5 flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="h-3 w-3 rounded-full bg-amber-400" />
                        <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    </div>*/}

                    <div className="space-y-4 font-mono text-slate-300">
                        <div>
                            <p className="text-slate-400">Jhon@portfolio:~$ whoami</p>
                            <p>Jhon Amaya — junior full-stack developer</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-400">Jhon@portfolio:~$ cat about-me.md</p>
                            <p>Turning ideas into interfaces people enjoy using.</p>
                            <p>Started by customizing templates and haven't stopped since.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-slate-400">Jhon@portfolio:~$ echo $OBJECTIVE</p>
                            <p>Find my first frontend role and grow inside a team.</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-slate-300">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                <span className="text-lg">✓</span>
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Status</p>
                                <p className="mt-1 text-sm font-semibold text-white">Available to work</p>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 text-slate-300">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                <span className="text-lg">📍</span>
                              </div>
                              <div>
                                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Location</p>
                                <p className="mt-1 text-sm font-semibold text-white">Bucaramanga, Colombia</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-center lg:justify-start">
                        <a
                        href="#contacto"
                        className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                        >
                        Contact me →
                        </a>
                    </div>
              </div>

            </div>
          </div>

          <div className="lg:w-105 lg:h-full lg:self-stretch">
            <div className="grid h-full gap-4 sm:grid-cols-2 auto-rows-fr">
              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  🚀
                </div>
                <div>
                  <p className="mt-6 text-4xl font-bold text-white">5+</p>
                  <p className="mt-2 text-sm text-slate-400">Personal projects</p>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  🔧
                </div>
                <div>
                  <p className="mt-6 text-4xl font-bold text-white">200+</p>
                  <p className="mt-2 text-sm text-slate-400">Commits this year</p>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  ☕
                </div>
                <div>
                  <p className="mt-6 text-4xl font-bold text-white">∞</p>
                  <p className="mt-2 text-sm text-slate-400">Coffees turned into code</p>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  ✨
                </div>
                <div>
                  <p className="mt-6 text-4xl font-bold text-white">100%</p>
                  <p className="mt-2 text-sm text-slate-400">Eagerness to learn</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    </section>
  );
}
