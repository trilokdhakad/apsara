const pillars = [
  {
    title: "Profile and constraints",
    body: "Domicile, category, what the family will actually join, and which counselling systems apply — before any college is ranked.",
  },
  {
    title: "An ordered working set",
    body: "Not 150 undifferentiated choices. A list whose order is the strategy: stretch, core, and floor, in that sequence.",
  },
  {
    title: "Round-wise revision",
    body: "When allotment, vacancy, or a constraint changes, the list should move, and the movement should be explainable.",
  },
]

export function Vision() {
  return (
    <section id="vision" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
      <p className="text-sm text-muted-foreground">What we are building</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
        The intelligence layer for college admissions.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        The long-term system should take a student&apos;s profile, historical cutoffs, and live
        counselling information, then keep an ordered strategy current as rounds unfold. This page
        is a demonstration, not that system.
      </p>
      <div className="mt-12 grid gap-10 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3 className="text-sm font-medium">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
