# BirbBuds 🐦

**Small birbs. Big personalities.**

BirbBuds is a cozy virtual pet experience about raising, caring for and bonding with expressive little birds.

The project combines character-focused interaction, playful motion and a soft illustrated interface with modern web development. The goal is not to turn care into a dashboard of percentages: Birbs should communicate how they feel through their **animation, behaviour and appearance**.

> **Current stage:** V0.1 — interactive world prototype

## The idea

Each Birb grows from an egg into a lifelong companion.

Players will be able to:

- hatch and raise different Birb species
- feed, clean, play with and care for their Birbs
- learn to read hidden needs through behaviour rather than progress bars
- build bond and unlock personality-driven reactions
- watch Birbs grow through multiple life stages
- customise their space and collect items
- explore new locations
- play mini-games
- fill a Birbdex with discovered species
- earn achievements and discover rare Birbs

## Design philosophy

BirbBuds should feel like a **little living world**, not an admin dashboard.

Needs such as hunger, energy, cleanliness, happiness and bond can exist internally, but the player should usually understand them from the Birb itself.

Examples:

- a hungry Birb may look toward food or peck around
- a tired Birb may move slowly, yawn or fall asleep
- a dirty Birb may look scruffy or shake its feathers
- a happy Birb may hop, chirp and wiggle its wings
- a highly bonded Birb may approach the player or unlock special greetings

The visual direction is cozy, colourful and illustrated, with expressive characters, warm environments and motion used to make the world feel alive.

## Growth

Planned life stages:

```text
Egg → Hatchling → Chick → Juvenile → Adult
```

Each stage can introduce new artwork, behaviours, animations and interactions.

## Current tech stack

- **React** — interface and component structure
- **TypeScript** — typed game and application logic
- **Tailwind CSS** — styling and design system
- **Motion** — UI and character micro-interactions
- **Vite** — development and build tooling
- **Git / GitHub** — version control and project history

## Planned technology

As BirbBuds grows, different tools will have different responsibilities:

- **Laravel + PHP** — future API and server-side application logic
- **MySQL** — accounts, Birbs, progress, inventory and collection data
- **Rive or layered character assets** — richer character animation and rigging
- **Phaser** — mini-games or game-like exploration where React is not the right tool

These are planned additions, not dependencies of the current prototype.

## Current prototype

The first milestone focuses on one Birb and one scene.

The goal is to prove that a single character can already feel alive through:

- idle motion
- blinking and small reactions
- hover/click interaction
- personality states
- care reactions
- environmental ambience

Once that foundation feels good, the project can expand into progression, collection and larger game systems.

## Roadmap

The full development plan is tracked in [ROADMAP.md](./ROADMAP.md).

The roadmap intentionally keeps early versions small. BirbBuds has a large long-term feature set, but each release should remain focused and playable.

## Local development

Install dependencies:

```bash
npm install
```

On Windows PowerShell, `npm.cmd install` can be used if script execution blocks `npm.ps1`.

Start the development server:

```bash
npm run dev
```

Or on Windows:

```bash
npm.cmd run dev
```

Create a production build:

```bash
npm run build
```

## Project goals

BirbBuds is both a long-term personal project and a playground for improving:

- React and TypeScript architecture
- character and interaction design
- animation systems
- state management
- responsive UI development
- game-like web interactions
- Laravel/API development
- database design
- Git workflow and incremental development

The long-term goal is simple: **make the Birbs feel like little friends rather than UI elements.**
