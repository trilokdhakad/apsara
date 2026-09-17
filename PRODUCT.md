# Product

## Working concept

Apsara is building an admissions intelligence system.

The core problem is not simply finding colleges or predicting admission.

Students make high-stakes education decisions using fragmented data, outdated information, spreadsheets, anecdotal advice, and static predictors. Admissions systems also change over time: cutoffs move, seats change, requirements differ, offers arrive, and counselling rounds evolve.

Apsara aims to turn this complexity into a personalized, data-driven strategy.

The long-term system takes a student's profile, preferences, constraints, and the relevant admissions environment, combines them with structured historical and current data, and continuously produces an actionable strategy.

The central loop is:

Student profile
→ admissions data
→ models
→ candidate options
→ personalized strategy
→ changing environment
→ updated strategy

## Product thesis

Admissions generate enormous amounts of structured and unstructured data, but students rarely have a system that can turn that data into decisions.

Apsara is not intended to be another static college list or generic AI chatbot.

The long-term product is a decision engine that can understand:

- who the student is
- what the student wants
- what the student can realistically pursue
- what the relevant admissions system allows
- how the situation is changing
- what action should be taken next

The long-term ambition is to become an intelligence layer between students and complex admissions systems.

## Current MVP

The MVP is NOT the full admissions intelligence system.

It is a premium product landing page and interactive proof-of-concept demonstrating the underlying idea through real and clearly-labelled case studies.

The primary case is a real, anonymized Indian medical counselling case built from real counselling research and data.

The case demonstrates:

Student profile
→ candidate colleges
→ ordered strategy
→ round-by-round evolution
→ explanation of changes

A second, clearly-labelled international case may be used to demonstrate how the same underlying product philosophy could extend beyond Indian counselling.

The international case must be labelled as illustrative unless it is based on real verified data and a real anonymized case.

## Target users

Primary long-term users:

- Students making university or college admission decisions
- Parents helping students navigate admissions
- Potentially counsellors or advisors who need decision-support tooling

Initial proof:

- Indian NEET students and parents
- MCC counselling
- Madhya Pradesh counselling

Future markets and systems may include:

- JEE / JoSAA / CSAB
- Other Indian centralized or state counselling systems
- China / Gaokao-related university selection
- UK / UCAS
- US undergraduate admissions
- Other international university admissions systems

Do not imply that these systems are currently supported.

## Current objective

Validate whether people care about the underlying problem, not merely the current implementation.

The MVP should determine whether visitors:

- understand the problem within seconds
- understand that Apsara is fundamentally data-driven
- recognize the difference between a static college predictor and an evolving strategy
- inspect the real counselling case
- explore multiple rounds
- understand why recommendations change
- express interest in using the product
- ask whether the system can analyze their own situation

The MVP is a validation experiment, not a finished admissions platform.

## Real Indian case

The primary case shown on the website is based on real counselling research and real data prepared for an actual student.

Student-identifying information must not be exposed.

Use anonymized or generalized information where appropriate.

Do not fabricate:

- colleges
- ranks
- probabilities
- counselling outcomes
- statistics
- testimonials
- users
- product capabilities
- data volume
- prediction accuracy

Where numbers are derived from the actual case or dataset, make their meaning clear.

## International case

The MVP may include one international admissions example to communicate the broader product vision.

The purpose is NOT to claim that Apsara already handles international admissions.

The purpose is to demonstrate that the same intelligence architecture can operate across fundamentally different admissions systems.

For example:

India:
rank
→ eligibility
→ seat availability
→ counselling rounds
→ ordered choices

UK:
academic profile
→ program requirements
→ course fit
→ entry requirements
→ application choices

US:
academic profile
→ program/institution requirements
→ application profile
→ cost
→ scholarship considerations
→ uncertainty

Different admissions systems should be presented as different data and decision environments rather than pretending they use the same prediction logic.

Any non-real case must be explicitly labelled as:
"Illustrative case"
or equivalent.

## Core demonstration

The website should demonstrate that admissions strategy is dynamic.

For the Indian case, the primary interaction is round-by-round evolution.

For each round, the interface may show:

- ordered colleges
- branch/course
- confidence or probability only where supported by the underlying dataset
- additions
- removals
- movements
- relevant data signals
- reasons for changes
- changes in the strategy compared with the previous round

The demonstration should make the concept of continuous updating visually obvious.

The product should communicate:

This is not a list.

It is a strategy that changes as the admissions environment changes.

## Data and intelligence narrative

Data should be central to the product story.

The long-term product may combine:

- historical cutoffs
- allotment results
- seat availability
- eligibility requirements
- student preferences
- category/reservation rules where applicable
- domicile rules where applicable
- tuition and total cost
- scholarships
- application deadlines
- program characteristics
- historical outcomes
- current admissions changes
- other relevant structured and unstructured information

The long-term intelligence layer may combine:

- statistical models
- prediction models
- optimization
- constraint solving
- retrieval systems
- language models
- other decision-support methods

Do not make the LLM the product story.

The product story is:
data → models → decisions.

AI is an implementation capability inside that system.

## Long-term vision

The eventual product may:

- understand a student's complete profile and preferences
- discover relevant admissions opportunities
- normalize and interpret admissions data from different systems
- incorporate historical and current information
- estimate admission likelihood where meaningful
- model uncertainty
- optimize ordered choices or applications
- account for constraints such as budget, geography, eligibility and preferences
- continuously update recommendations as new information arrives
- explain the factors behind recommendations
- identify what information is missing
- tell the student what action to take next

The long-term system should work across different admissions environments rather than assuming every country uses one counselling model.

## Product positioning

Do not position Apsara as:

- another college predictor
- a generic study-abroad consultant
- a chatbot for admissions
- an AI wrapper around search
- an education listing site

The positioning should be closer to:

"The intelligence layer for college admissions."

Alternative supporting idea:

"Turning admissions data into personalized strategy."

The product is fundamentally about decision-making under uncertainty.

## Vision

The company-level vision is significantly larger than the MVP.

The long-term opportunity is to build infrastructure that understands the world's fragmented admissions systems and turns them into a personalized decision layer for every student.

The website may communicate this ambition clearly.

However, present capabilities must remain factually accurate.

Vision can be ambitious.

Current product claims must be true.

## What the MVP contains

- Premium landing page
- Minimal navbar
- Strong hero and company-level positioning
- Real Indian counselling case study
- Anonymized student profile
- Interactive round selector
- Strategy visualization
- Round-to-round change visualization
- Explanations for changes
- Data/intelligence section
- Broader international admissions example where useful
- Product vision section
- Waitlist form
- Basic analytics
- Responsive mobile layout

## What the MVP does not contain

- User accounts
- Login
- Full admissions platform
- General-purpose college predictor
- AI recommendation engine for arbitrary users
- LLM chatbot
- Automated web scraping
- Automated admissions data ingestion
- Payment
- Complete global university database
- Personalized recommendations for arbitrary users
- Full counselling API
- Admin dashboard
- Claims of real-time coverage unless actually implemented

## Product experience

The ideal visitor journey is:

1. Understand the problem immediately.
2. See a large, ambitious vision.
3. See concrete evidence that the problem can be modeled.
4. Interact with the real Indian case.
5. Observe strategy changing across rounds.
6. Understand that data and models sit underneath the product.
7. See that the same concept could extend to other admissions systems.
8. Want to know whether Apsara can do the same for them.
9. Join the waitlist.

The case study should feel like evidence for the company thesis, not like a separate educational blog post.

## Technical principles

- Prefer static, typed data for MVP case studies.
- Keep presentation logic separate from case-study data.
- Components must consume structured data rather than hard-coded college rows.
- Keep the current case-study architecture extensible to multiple admissions systems.
- Avoid introducing backend infrastructure unless required.
- Build the architecture so static case data can later be replaced by a real data service.
- Do not build future systems prematurely.
- Keep the MVP small.

## Success signal

The MVP succeeds if a qualified visitor:

1. understands the problem,
2. understands the product thesis,
3. understands that data and models are central,
4. understands why strategy changes over time,
5. trusts that the demonstration is based on real work,
6. sees the broader market opportunity,
7. wants to use the product on their own admissions problem.

The first validation metric is not traffic.

The strongest early signal is qualified intent:
people asking for their own strategy or joining the waitlist after seeing the demonstration.