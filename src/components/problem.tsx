export function Problem() {
  const loopNodes = [
    "Student",
    "Profile",
    "Eligibility",
    "Options",
    "Constraints",
    "Decision",
    "New information",
    "Revised decision",
  ] as const

  return (
    <section id="problem" className="bg-white border-b border-border/30">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-28">
        <div className="grid gap-12 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-20">
          <div>
            <p className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-muted-foreground">
              The problem
            </p>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight leading-[1.15]">
              Today the student stitches it all together.
              <br />
              By hand. Over and over.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-foreground/80 text-pretty max-w-2xl">
              Admissions is not a static search. It is a decision under uncertainty:
              a profile turns into realistic options, ordered against preferences
              and constraints — then new information arrives, and the whole thing
              has to be rebuilt.
            </p>
          </div>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="relative hidden sm:block">
            <div className="grid grid-cols-4 gap-2">
              {loopNodes.slice(0, 4).map((node, idx) => (
                <div key={`top-${node}`} className="relative">
                  <div className="relative z-10 rounded-lg border border-border/60 bg-white px-3 py-2.5">
                    <p className="text-[0.72rem] font-medium tracking-tight text-foreground/75 text-center">
                      {node}
                    </p>
                  </div>
                  {idx < 3 ? (
                    <div className="pointer-events-none absolute inset-y-0 left-full z-0 hidden w-2 items-center sm:flex">
                      <div className="relative h-px w-full bg-border/50">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[3px] border-l-[5px] border-y-transparent border-l-border/50"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="pointer-events-none absolute left-1/2 top-full z-0 hidden h-6 w-6 -translate-x-1/2 sm:block">
                      <svg viewBox="0 0 24 24" className="h-full w-full text-border/50" fill="none">
                        <path d="M12 4 V 14" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        <path d="M12 14 L 8 10 M 12 14 L 16 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-4 gap-2">
              {loopNodes.slice(4, 8).map((node, idx) => (
                <div key={`bottom-${node}`} className="relative">
                  {idx === 0 ? (
                    <div className="pointer-events-none absolute left-1/2 -top-6 z-0 hidden h-6 w-6 -translate-x-1/2 sm:block">
                      <svg viewBox="0 0 24 24" className="h-full w-full text-border/50" fill="none">
                        <path d="M12 10 V 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : null}
                  <div className="relative z-10 rounded-lg border border-border/60 bg-white px-3 py-2.5">
                    <p className="text-[0.72rem] font-medium tracking-tight text-foreground/75 text-center">
                      {node}
                    </p>
                  </div>
                  {idx < 3 ? (
                    <div className="pointer-events-none absolute inset-y-0 left-full z-0 hidden w-2 items-center sm:flex">
                      <div className="relative h-px w-full bg-border/50">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 border-y-[3px] border-l-[5px] border-y-transparent border-l-border/50"></div>
                      </div>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 320 36"
                  className="h-9 w-[34rem] text-border/50"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M4 30 C 60 4, 260 4, 316 30"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                  />
                  <path
                    d="M309 24 L316 30 L309 36"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <span className="text-[0.7rem] leading-5 text-muted-foreground text-center max-w-xl">
                Every round of new information reopens earlier decisions.
              </span>
            </div>
          </div>

          <div className="relative sm:hidden">
            <div className="relative space-y-0 pl-6">
              <div className="absolute left-[0.45rem] top-0 h-full w-px bg-border/50"></div>
              {loopNodes.map((node, idx) => (
                <div key={`m-${node}`} className="relative py-3.5">
                  <div className="absolute -left-6 top-5 flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full border border-border/70 bg-white">
                    <div className="h-1.5 w-1.5 rounded-full bg-foreground/50"></div>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-white px-3 py-2">
                    <p className="text-[0.76rem] font-medium tracking-tight text-foreground/75">
                      {node}
                    </p>
                  </div>
                  {idx === loopNodes.length - 1 ? (
                    <div className="mt-4 flex items-start gap-3">
                      <div className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border/60 bg-surface-neutral">
                        <svg viewBox="0 0 16 16" className="h-3 w-3 text-muted-foreground" fill="none">
                          <path
                            d="M12.5 5.5 V 2.5 H 9.5"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12.5 2.5 C 10 4.5, 7 6, 4.5 5.5 C 2.5 5, 2 3.5, 2 2"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <p className="text-[0.74rem] leading-5 text-muted-foreground">
                        Every round of new information reopens earlier decisions.
                      </p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
