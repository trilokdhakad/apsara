# Apsara

> **The intelligence layer for navigating college admissions.**

Apsara is building an intelligent, end-to-end system for navigating college admissions.

Admissions are not a static search problem. A student's profile, preferences, constraints, deadlines, eligibility, available options, and the state of the admissions system can all change. The decision therefore has to evolve with them.

Apsara's long-term goal is to connect that entire process:

**Understand → Research → Reason → Plan → Act → Monitor → Re-plan**

The current product is an early prototype focused on demonstrating this approach through a real Indian medical counselling case.

## Current Prototype

The current MVP is a product landing page and interactive proof of concept.

It demonstrates:

- a real anonymized Indian medical counselling case
- round-by-round changes in an admissions strategy
- structured counselling and admissions data
- the reasoning behind changing an ordered set of choices
- an illustrative view of how the underlying approach could extend to other admissions systems
- the broader Apsara product vision

The prototype **does not yet implement the full admissions intelligence system**.

The medical counselling case is the initial proof point, not the long-term boundary of the product.

## Product Direction

The long-term Apsara system is intended to combine:

```text
Student profile
+ Preferences & constraints
+ Admissions rules
+ Historical data
+ Current information
        ↓
   Decision engine
        ↓
    Strategy
        ↓
 Explanation / next action
        ↓
 Monitor changes
        ↓
    Re-plan
```

Potential capabilities over time include:

- understanding a student's profile, goals, and constraints
- researching relevant institutions and programs
- reasoning about eligibility and tradeoffs
- constructing personalized application or counselling strategies
- helping with concrete admissions tasks
- monitoring meaningful changes
- continuously updating the recommended strategy

The goal is not simply to provide more admissions information. It is to help turn that information into decisions and actions.

## Initial Scope

The initial implementation focuses on:

**NEET UG → MCC + Madhya Pradesh medical counselling**

This narrow starting point provides a concrete environment in which to develop and validate the underlying decision-making approach.

Future expansion may include other Indian admissions systems and, eventually, other structured admissions environments internationally.

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **UI:** React, Tailwind CSS v4, shadcn/ui, Base UI
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Validation:** Zod
- **Backend / Data:** Supabase
- **Analytics:** PostHog
- **Deployment:** Vercel

## Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── waitlist/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── ui/
│
├── data/
│
└── lib/
```

Project documentation:

```text
AGENTS.md      Repository and agent instructions
PRODUCT.md     Product direction and scope
DESIGN.md      Visual and interaction principles
COPY.md        Brand and copy guidelines
TECH.md        Technical architecture and conventions
README.md      Project overview
```

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Environment Variables

Create a local environment file when required:

```text
.env.local
```

Use `.env.example` as the reference for required variables.

Never commit secrets or production credentials to the repository.

## Architecture Principles

### Typed data first

Admissions and counselling data should be represented as structured, typed data rather than being embedded directly into presentation components.

### Separate data from presentation

Product data belongs in `src/data/`.

UI components should consume structured data rather than containing large hardcoded datasets.

### Build the decision layer before the AI layer

The long-term architecture may combine:

- structured admissions data
- historical models
- rules and constraints
- optimization / decision logic
- retrieval of current information
- language models for interaction and explanation

Language models should support the decision system rather than replace its underlying logic.

### Do not overbuild

The current stage is for validating the product and the underlying problem.

The repository should not prematurely introduce:

- a generalized admissions platform
- a large backend architecture
- unnecessary services
- complex agent infrastructure
- unsupported automation
- speculative features

## Current Limitations

The current prototype does not provide:

- a complete admissions database
- a production prediction engine
- full student personalization
- automated application submission
- autonomous admissions monitoring across systems
- universal international admissions support
- accounts or authentication
- payments

Future-facing capabilities should be clearly distinguished from features that currently exist.

## Privacy and Data

Real student research used in the prototype is anonymized.

The application should not expose unnecessary personal information, private identifiers, or sensitive counselling records.

Do not add fabricated:

- student outcomes
- admission probabilities
- accuracy metrics
- testimonials
- user counts
- partnerships
- success rates

## Status

**Early product validation.**

The immediate objective is to turn the current proof of concept into a useful first product for a narrowly defined admissions environment, validate it with real users, and use those learnings to develop the broader Apsara intelligence system.

## License

This project is not currently released under an open-source license.
