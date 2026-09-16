"use client"

import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { useMemo, useState } from "react"
import { capture } from "@/lib/analytics"
import {
  caseStudy,
  diffRounds,
  type ChangeKind,
  type RoundId,
} from "@/data/case-study"
import { cn } from "cn"

const changeLabel: Record<ChangeKind, string> = {
  added: "Added",
  removed: "Removed",
  moved_up: "Moved up",
  moved_down: "Moved down",
  unchanged: "Kept",
}

export function CaseStudy() {
  const [roundId, setRoundId] = useState<RoundId>("r1")
  const roundIndex = caseStudy.rounds.findIndex((round) => round.id === roundId)
  const round = caseStudy.rounds[roundIndex]
  const previous = roundIndex > 0 ? caseStudy.rounds[roundIndex - 1] : undefined
  const changes = useMemo(() => diffRounds(previous, round), [previous, round])
  const visibleChanges = changes.filter((change) => change.kind !== "unchanged")
  const changeById = useMemo(
    () => new Map(changes.map((change) => [change.id, change])),
    [changes],
  )

  function selectRound(id: RoundId) {
    setRoundId(id)
    capture({ name: "case_round_changed", properties: { round: id } })
  }

  return (
    <MotionConfig reducedMotion="user">
    <section id="case" className="mx-auto w-full max-w-5xl px-6 py-8 sm:py-12">
      <div className="max-w-2xl">
        <p className="text-sm text-muted-foreground">{caseStudy.kicker}</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">{caseStudy.title}</h2>
        <p className="mt-4 text-base leading-7 text-muted-foreground">{caseStudy.disclaimer}</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="flex gap-1 overflow-x-auto border-b border-border p-2">
          {caseStudy.rounds.map((item) => {
            const selected = item.id === roundId
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => selectRound(item.id)}
                aria-pressed={selected}
                className={cn(
                  "min-w-36 shrink-0 rounded-xl px-3 py-2 text-left transition-colors",
                  selected ? "bg-foreground text-background" : "hover:bg-muted",
                )}
              >
                <span className="block text-sm font-medium">{item.label}</span>
                <span className={cn("block text-xs", selected ? "text-background/70" : "text-muted-foreground")}>
                  {item.phase}
                </span>
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]">
          <aside className="border-b border-border p-5 lg:border-r lg:border-b-0">
            <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
              {caseStudy.profile.label}
            </p>
            <dl className="mt-4 space-y-3">
              {caseStudy.profile.items.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs text-muted-foreground">{item.label}</dt>
                  <dd className="text-sm font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
            <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm leading-6 text-muted-foreground">
              {caseStudy.profile.preferences.map((preference) => (
                <li key={preference}>{preference}</li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={round.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <p className="text-sm font-medium">{round.summary}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{round.context}</p>

                <ol className="mt-6 divide-y divide-border rounded-xl border border-border">
                  {round.choices.map((choice, index) => {
                    const change = changeById.get(choice.id)
                    return (
                      <li key={choice.id} className="flex items-start gap-3 px-3 py-3 sm:px-4">
                        <span className="w-6 shrink-0 pt-0.5 text-sm tabular-nums text-muted-foreground">
                          {index + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                            <p className="text-sm font-medium">{choice.college}</p>
                            <p className="text-sm text-muted-foreground">{choice.city}</p>
                          </div>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {choice.course} · {choice.quota}
                          </p>
                        </div>
                        {change && change.kind !== "unchanged" ? (
                          <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs">
                            {changeLabel[change.kind]}
                          </span>
                        ) : null}
                      </li>
                    )
                  })}
                </ol>

                {visibleChanges.length > 0 ? (
                  <div className="mt-6">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                      What changed
                    </p>
                    <ul className="mt-3 space-y-3">
                      {visibleChanges.map((change) => (
                        <li key={`${change.kind}-${change.id}`} className="text-sm leading-6">
                          <span className="font-medium">
                            {changeLabel[change.kind]} · {change.college}
                          </span>
                          {change.fromPosition || change.toPosition ? (
                            <span className="text-muted-foreground">
                              {" "}
                              {formatPositions(change.fromPosition, change.toPosition)}
                            </span>
                          ) : null}
                          <p className="text-muted-foreground">{change.reason}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-muted-foreground">
                    First freeze. Changes appear once a later round is selected.
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
    </MotionConfig>
  )
}

function formatPositions(from: number | null, to: number | null) {
  if (from && to) return `(#${from} → #${to})`
  if (to) return `(#${to})`
  if (from) return `(was #${from})`
  return ""
}
