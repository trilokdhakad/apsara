export type Quota = "AIQ" | "State"
export type ChangeKind = "added" | "removed" | "moved_up" | "moved_down" | "unchanged"

export type CollegeChoice = {
  id: string
  college: string
  course: string
  quota: Quota
  city: string
}

export type RoundId = "r1" | "r2" | "r3" | "r4"

export type Round = {
  id: RoundId
  label: string
  phase: string
  summary: string
  context: string
  choices: CollegeChoice[]
}

export type ChoiceChange = {
  id: string
  kind: ChangeKind
  college: string
  course: string
  fromPosition: number | null
  toPosition: number | null
  reason: string
}

export type CaseStudy = {
  title: string
  kicker: string
  disclaimer: string
  profile: {
    label: string
    items: Array<{ label: string; value: string }>
    preferences: string[]
  }
  rounds: Round[]
  changeReasons: Record<RoundId, Record<string, string>>
}

/**
 * Anonymized demonstration case for MCC + Madhya Pradesh NEET-UG counselling.
 *
 * Colleges are real public institutions. Identifying student data, exact ranks,
 * cutoffs, and probabilities are omitted — those belong in the prepared dataset
 * and must not be invented for the landing page.
 */
export const caseStudy: CaseStudy = {
  title: "How a choice list should move",
  kicker: "Anonymized case · MCC + MP · government MBBS",
  disclaimer:
    "This is a reconstructed working set from counselling research for an MP candidate. College names are real. Rank, category details, and admission odds are withheld.",
  profile: {
    label: "Candidate",
    items: [
      { label: "Exam", value: "NEET-UG" },
      { label: "Domicile", value: "Madhya Pradesh" },
      { label: "Category", value: "Unreserved" },
      { label: "Systems", value: "MCC AIQ + MP DME" },
      { label: "Target", value: "Government MBBS" },
    ],
    preferences: [
      "Stay in Madhya Pradesh when the college quality is comparable.",
      "Treat All-India stretch options as early-round only, not as the whole list.",
      "Do not burn state-quota order on colleges that will not be accepted.",
      "Private and deemed seats stay off the working set unless government options collapse.",
    ],
  },
  rounds: [
    {
      id: "r1",
      label: "Round 1",
      phase: "Choice freeze",
      summary: "Stretch AIQ at the top, then the MP government core in true preference order.",
      context:
        "Before allotment, the list has to express genuine preference. Stretch All-India options sit above the state colleges the student would actually join, because MCC will not skip down to a lower choice if a higher one is allotted.",
      choices: [
        {
          id: "aiims-bhopal",
          college: "AIIMS Bhopal",
          course: "MBBS",
          quota: "AIQ",
          city: "Bhopal",
        },
        {
          id: "gmc-bhopal",
          college: "Gandhi Medical College",
          course: "MBBS",
          quota: "State",
          city: "Bhopal",
        },
        {
          id: "mgm-indore",
          college: "MGM Medical College",
          course: "MBBS",
          quota: "State",
          city: "Indore",
        },
        {
          id: "nscb-jabalpur",
          college: "NSCB Medical College",
          course: "MBBS",
          quota: "State",
          city: "Jabalpur",
        },
        {
          id: "ssmc-rewa",
          college: "Shyam Shah Medical College",
          course: "MBBS",
          quota: "State",
          city: "Rewa",
        },
        {
          id: "bmc-sagar",
          college: "Bundelkhand Medical College",
          course: "MBBS",
          quota: "State",
          city: "Sagar",
        },
        {
          id: "gmc-vidisha",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Vidisha",
        },
        {
          id: "gmc-datia",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Datia",
        },
      ],
    },
    {
      id: "r2",
      label: "Round 2",
      phase: "After Round 1 allotment",
      summary: "AIQ stretch is dropped. The MP core is compacted; a newer GMC enters the working set.",
      context:
        "Round 1 closing data showed the AIIMS AIQ seat would not be in play for this profile. Keeping it above Gandhi Medical College would only create false hope and a worse upgrade path. State-quota order is tightened around colleges the family would actually report to.",
      choices: [
        {
          id: "gmc-bhopal",
          college: "Gandhi Medical College",
          course: "MBBS",
          quota: "State",
          city: "Bhopal",
        },
        {
          id: "mgm-indore",
          college: "MGM Medical College",
          course: "MBBS",
          quota: "State",
          city: "Indore",
        },
        {
          id: "nscb-jabalpur",
          college: "NSCB Medical College",
          course: "MBBS",
          quota: "State",
          city: "Jabalpur",
        },
        {
          id: "ssmc-rewa",
          college: "Shyam Shah Medical College",
          course: "MBBS",
          quota: "State",
          city: "Rewa",
        },
        {
          id: "bmc-sagar",
          college: "Bundelkhand Medical College",
          course: "MBBS",
          quota: "State",
          city: "Sagar",
        },
        {
          id: "gmc-vidisha",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Vidisha",
        },
        {
          id: "gmc-shivpuri",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Shivpuri",
        },
        {
          id: "gmc-datia",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Datia",
        },
      ],
    },
    {
      id: "r3",
      label: "Round 3",
      phase: "After Round 2 movement",
      summary: "Vacancy in later GMCs matters more than repeating an exhausted AIQ story.",
      context:
        "Round 2 movement opened a few state-quota seats that were frozen earlier. The list is re-ordered so upgrade preference is still honest: Bhopal and Indore remain above newer campuses, but Shivpuri and Datia are no longer treated as interchangeable backups.",
      choices: [
        {
          id: "gmc-bhopal",
          college: "Gandhi Medical College",
          course: "MBBS",
          quota: "State",
          city: "Bhopal",
        },
        {
          id: "mgm-indore",
          college: "MGM Medical College",
          course: "MBBS",
          quota: "State",
          city: "Indore",
        },
        {
          id: "nscb-jabalpur",
          college: "NSCB Medical College",
          course: "MBBS",
          quota: "State",
          city: "Jabalpur",
        },
        {
          id: "bmc-sagar",
          college: "Bundelkhand Medical College",
          course: "MBBS",
          quota: "State",
          city: "Sagar",
        },
        {
          id: "ssmc-rewa",
          college: "Shyam Shah Medical College",
          course: "MBBS",
          quota: "State",
          city: "Rewa",
        },
        {
          id: "gmc-shivpuri",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Shivpuri",
        },
        {
          id: "gmc-vidisha",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Vidisha",
        },
        {
          id: "gmc-khandwa",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Khandwa",
        },
      ],
    },
    {
      id: "r4",
      label: "Mop-up",
      phase: "Late-round freeze",
      summary: "The list is short. Only colleges the student will join if allotted remain.",
      context:
        "By mop-up, unused stretch options waste a round. The working set is the colleges the family will actually take. Rewa moves above Sagar after travel and reporting constraints are made explicit. Khandwa stays as the last government MBBS the student will accept.",
      choices: [
        {
          id: "gmc-bhopal",
          college: "Gandhi Medical College",
          course: "MBBS",
          quota: "State",
          city: "Bhopal",
        },
        {
          id: "mgm-indore",
          college: "MGM Medical College",
          course: "MBBS",
          quota: "State",
          city: "Indore",
        },
        {
          id: "nscb-jabalpur",
          college: "NSCB Medical College",
          course: "MBBS",
          quota: "State",
          city: "Jabalpur",
        },
        {
          id: "ssmc-rewa",
          college: "Shyam Shah Medical College",
          course: "MBBS",
          quota: "State",
          city: "Rewa",
        },
        {
          id: "bmc-sagar",
          college: "Bundelkhand Medical College",
          course: "MBBS",
          quota: "State",
          city: "Sagar",
        },
        {
          id: "gmc-khandwa",
          college: "Government Medical College",
          course: "MBBS",
          quota: "State",
          city: "Khandwa",
        },
      ],
    },
  ],
  changeReasons: {
    r1: {},
    r2: {
      "aiims-bhopal":
        "Removed after Round 1 AIQ closing ranks made the seat unreachable for this profile. Leaving it above state options would distort upgrades.",
      "gmc-shivpuri":
        "Added once Round 1 vacancy showed a newer GMC belonging in the government working set, not as an afterthought.",
      "gmc-bhopal": "Moved to the top of the list once the AIQ stretch was no longer honest.",
    },
    r3: {
      "bmc-sagar":
        "Moved above Rewa after Round 2 state movement made Sagar a more realistic upgrade than a longer travel option.",
      "ssmc-rewa": "Dropped one place so upgrade order matches colleges the student would actually report to.",
      "gmc-datia":
        "Removed from the working set after the family ruled it out on location. It should not consume a late-round allotment.",
      "gmc-khandwa":
        "Added as the last government MBBS the student will accept if higher state options do not move.",
      "gmc-vidisha": "Moved down after Shivpuri showed more late-round movement in the previous seat matrix.",
    },
    r4: {
      "ssmc-rewa":
        "Moved back above Sagar once travel and reporting constraints were written down, not guessed.",
      "bmc-sagar": "Dropped one place to match the revised reporting preference.",
      "gmc-shivpuri":
        "Removed from the mop-up working set. If it is not a college they will join, it should not be on the list.",
      "gmc-vidisha":
        "Removed for the same reason: mop-up is for joinable seats only.",
      "gmc-khandwa": "Kept as the floor — the last government MBBS they will take.",
    },
  },
}

export function getRound(id: RoundId): Round {
  const round = caseStudy.rounds.find((item) => item.id === id)
  if (!round) {
    throw new Error(`Unknown round: ${id}`)
  }
  return round
}

export function diffRounds(previous: Round | undefined, current: Round): ChoiceChange[] {
  if (!previous) {
    return current.choices.map((choice, index) => ({
      id: choice.id,
      kind: "unchanged" as const,
      college: choice.college,
      course: choice.course,
      fromPosition: null,
      toPosition: index + 1,
      reason: "Initial working set before allotment data exists.",
    }))
  }

  const prevIndex = new Map(previous.choices.map((choice, index) => [choice.id, index]))
  const nextIndex = new Map(current.choices.map((choice, index) => [choice.id, index]))
  const reasons = caseStudy.changeReasons[current.id]
  const changes: ChoiceChange[] = []

  for (const [id, from] of prevIndex) {
    if (!nextIndex.has(id)) {
      const choice = previous.choices[from]
      changes.push({
        id,
        kind: "removed",
        college: choice.college,
        course: choice.course,
        fromPosition: from + 1,
        toPosition: null,
        reason: reasons[id] ?? "Removed from the working set.",
      })
    }
  }

  current.choices.forEach((choice, index) => {
    const from = prevIndex.get(choice.id)
    const reason = reasons[choice.id]
    if (from === undefined) {
      changes.push({
        id: choice.id,
        kind: "added",
        college: choice.college,
        course: choice.course,
        fromPosition: null,
        toPosition: index + 1,
        reason: reason ?? "Added to the working set.",
      })
      return
    }
    let kind: ChangeKind = "unchanged"
    if (index < from) kind = "moved_up"
    if (index > from) kind = "moved_down"
    if (kind !== "unchanged" || reason) {
      changes.push({
        id: choice.id,
        kind,
        college: choice.college,
        course: choice.course,
        fromPosition: from + 1,
        toPosition: index + 1,
        reason: reason ?? (kind === "moved_up" ? "Moved up." : kind === "moved_down" ? "Moved down." : ""),
      })
    }
  })

  const order: Record<ChangeKind, number> = {
    added: 0,
    removed: 1,
    moved_up: 2,
    moved_down: 3,
    unchanged: 4,
  }

  return changes.sort((a, b) => order[a.kind] - order[b.kind])
}
