# Product

## Working concept

A personalized counselling strategy for Indian medical admissions.

The long-term product helps students navigate counselling by combining their profile, preferences, historical admission data, seat availability, and round-wise movement into an evolving choice strategy.

## Current MVP

The MVP is NOT the full counselling product.

It is a premium landing page that demonstrates the concept using one real, anonymized counselling case.

The central demonstration is:

Student profile
→ candidate colleges
→ ordered strategy
→ round-by-round evolution
→ explanation of changes

## Target users

Primary:
- Indian NEET students
- Parents helping students with counselling

Initial counselling systems:
- MCC
- Madhya Pradesh counselling

## Current objective

Validate whether students and parents find the problem valuable enough to:
- inspect the case study
- understand the proposed product
- join the waitlist
- ask whether they can use it for their own counselling

The MVP is a validation experiment, not a finished counselling platform.

## Real case

The case shown on the website is based on real counselling research and real data prepared for an actual student.

Student-identifying information must not be exposed.

Use anonymized or generalized profile information where appropriate.

Do not fabricate:
- colleges
- ranks
- probabilities
- counselling outcomes
- statistics
- testimonials
- users
- product capabilities

## Core demonstration

The website should demonstrate that counselling strategy can evolve as new rounds of information become available.

For each round, the interface may show:
- ordered colleges
- branch/course
- confidence or probability only where supported by the underlying dataset
- changes from the previous round
- reasons for additions, removals, or movement

Do not present future AI capabilities as if they already exist.

## Long-term vision

The eventual product may:
- understand a student's complete profile and preferences
- analyze relevant colleges and courses
- incorporate historical cutoff and allotment data
- incorporate current counselling information
- model admission likelihood
- optimize an ordered choice list
- adapt the strategy as counselling progresses
- explain why recommendations change

The MVP does not implement these systems.

## What the MVP contains

- Landing page
- Navbar
- Hero
- Real counselling case study
- Student profile
- Round selector
- Strategy visualization
- Round-to-round change visualization
- Product vision section
- Waitlist form
- Basic analytics
- Responsive mobile layout

## What the MVP does not contain

- User accounts
- Login
- Full counselling predictor
- AI recommendation engine
- LLM chatbot
- Automated web scraping
- Automated counselling data ingestion
- Payment
- Full database of colleges
- Personalized recommendation for arbitrary users
- Admin dashboard

## Product positioning

Do not position the MVP as "another college predictor."

The long-term positioning is closer to:

"The intelligence layer for college admissions."

The product should communicate that the fundamental problem is not merely finding colleges, but making and continuously updating a personalized counselling strategy.

## Technical principles

- Prefer static, typed data for the case study during MVP development.
- Keep presentation logic separate from case-study data.
- Components should consume structured data rather than hard-coded college rows.
- Avoid introducing backend infrastructure unless required.
- Build the architecture so the static case can later be replaced by a real data service.
- Keep the MVP small.

## Success signal

The MVP succeeds if a visitor understands:
1. the problem,
2. the proposed solution,
3. why round-by-round strategy matters,
4. that the demonstration is based on real work,
5. how to express interest.

The first validation metric is not traffic.

It is whether qualified visitors demonstrate meaningful interest.