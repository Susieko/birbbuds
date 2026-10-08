# BirbBuds Roadmap 🐦

This roadmap describes the intended growth of BirbBuds from a tiny interactive prototype into a larger cozy virtual pet experience.

The backlog can be ambitious. **The active version should stay small.**

---

## Core principles

### 1. One Birb should feel alive before there are twenty
Character behaviour comes before collection size.

### 2. Needs are felt, not managed as percentages
Hunger, cleanliness, energy, happiness and bond may be numerical internally, but the normal interface should communicate them through animation, behaviour, dialogue and appearance.

### 3. Growth should matter
Egg, Hatchling, Chick, Juvenile and Adult should feel meaningfully different rather than being simple cosmetic swaps.

### 4. Motion has a purpose
Animation should communicate mood, state, interaction or personality — not exist only as decoration.

### 5. Systems should connect
Mini-games, exploration, care, inventory, growth and collection should affect the same Birb instead of feeling like unrelated features.

---

# V0 — Make one Birb feel alive

## V0.1 — World prototype

**Goal:** establish the technical and visual foundation.

- [x] React + TypeScript + Vite project
- [x] Tailwind CSS
- [x] Motion
- [x] first world scene
- [ ] first reusable `Birb` component
- [ ] replace placeholder art with a defined Birb art direction
- [ ] idle animation
- [ ] blink animation
- [ ] hover reaction
- [ ] click reaction
- [ ] basic responsive layout
- [ ] reduced-motion support

**Main tools:** React, TypeScript, Tailwind CSS, Motion.

---

## V0.2 — Personality and hidden needs

**Goal:** make the prototype Birb respond like a creature rather than a button.

Introduce internal state such as:

```ts
type BirbNeeds = {
  hunger: number
  cleanliness: number
  energy: number
  happiness: number
  bond: number
}
```

The values should initially remain hidden from the player.

### Behaviour examples

- hungry → watches food, pecks, gives food-related reactions
- tired → droopy eyes, slower idle, yawning, sleeping
- dirty → scruffy appearance, scratching or feather shaking
- happy → hops, chirps, wing wiggles
- unhappy → quieter or less responsive behaviour
- high bond → approaches player, special greeting or cursor-follow interaction

### Tasks

- [ ] create Birb state types
- [ ] define mood/state rules
- [ ] create reaction/message system
- [ ] add state-driven animation variants
- [ ] add a simple feed interaction
- [ ] add a simple play interaction
- [ ] prototype sleep/energy behaviour

**Main tools:** React state/hooks, TypeScript, Motion.

---

# V1 — The first real BirbBuds loop

**Goal:** turn the prototype into a small playable virtual pet experience.

## Care

- [ ] feeding
- [ ] playing
- [ ] sleeping/resting
- [ ] cleaning
- [ ] basic health/wellbeing feedback
- [ ] care items

## Growth

Life stages:

```text
Egg → Hatchling → Chick → Juvenile → Adult
```

- [ ] egg state and hatch sequence
- [ ] hatchling art/behaviour
- [ ] chick art/behaviour
- [ ] juvenile art/behaviour
- [ ] adult art/behaviour
- [ ] growth conditions
- [ ] celebratory evolution transitions

Growth should depend on time/progress and healthy care rather than repetitive grinding.

## Home

- [ ] cozy home scene
- [ ] food area
- [ ] sleeping area
- [ ] interactive objects
- [ ] first room customisation options

**Main tools:** React, TypeScript, Motion, persistent browser state initially.

---

# V2 — Species, collection and personality

**Goal:** make different Birbs worth discovering and raising.

## Birb species

Initial candidates:

- Sparrow
- Bluebird
- Cockatiel
- Java Sparrow
- Crow
- Finch
- Parakeet
- Owl
- Duck
- Lovebird
- Penguin

Each species should have its own:

- silhouette
- colour palette
- expressions
- idle behaviours
- personality tendencies
- animation details
- growth artwork

Example: a Cockatiel can animate its crest; an Owl can have exaggerated sleepy blinks; a Crow can have more mischievous behaviours.

## Birbdex

- [ ] species discovery
- [ ] discovered/undiscovered states
- [ ] rarity
- [ ] individual Birb profiles
- [ ] life-stage history
- [ ] favourite Birbs
- [ ] personality notes

## Personality

Possible traits:

- curious
- calm
- playful
- social
- shy
- mischievous
- affectionate
- energetic
- sleepy

Traits should influence animation and reactions rather than existing only as labels.

---

# V3 — Inventory, customisation and progression

**Goal:** give care and exploration useful rewards.

## Inventory

- [ ] food
- [ ] treats
- [ ] toys
- [ ] cleaning items
- [ ] decorations
- [ ] accessories
- [ ] rare/special items

## Customisation

- [ ] room decorations
- [ ] perches
- [ ] beds/nests
- [ ] plants
- [ ] wall items
- [ ] wearable Birb accessories

Accessories should eventually move correctly with character animation where possible.

## Progression

- [ ] achievements
- [ ] journal
- [ ] milestones
- [ ] unlockable locations
- [ ] rare encounters

---

# V4 — Exploration and mini-games

**Goal:** expand BirbBuds beyond the home scene.

## Locations

Possible locations:

- Sunny Meadow
- Misty Forest
- Crystal Lake
- town/garden
- seasonal areas
- rare hidden locations

Exploration can provide:

- items
- food
- species encounters
- journal entries
- mini-games
- secrets

## Mini-games

Mini-games should feed back into the core systems.

Examples:

### Foraging
Find seeds, berries or special items.

**Effects:** food/resources, happiness, exploration progress.

### Flight challenge
Navigate a short obstacle route.

**Effects:** happiness, bond, achievements.

May only unlock once the Birb is old enough to fly.

### Catch/play game
Short reaction-based play activity.

**Effects:** happiness rises, energy falls.

### Bath/cleaning interaction
A playful cleaning activity rather than a menu button.

**Effects:** cleanliness and happiness depending on personality.

**Main tools:** begin with React for simple interactions; introduce Phaser when a mini-game genuinely benefits from a game loop, collision, physics or sprite systems.

---

# V5 — Accounts and persistent world

**Goal:** move persistence from one browser into a real backend.

## Backend

Introduce:

- Laravel API
- PHP
- MySQL

Possible data domains:

- users
- Birbs
- species
- life stages
- needs/state
- inventory
- rooms/customisation
- achievements
- Birbdex discoveries
- exploration progress

## Accounts

- [ ] registration/login
- [ ] save progress
- [ ] multiple Birbs
- [ ] persistent inventory
- [ ] persistent rooms
- [ ] account settings

React remains responsible for the interactive client. Laravel becomes responsible for persistent application rules and data.

---

# V6+ — Bigger world

Possible future directions, not current commitments:

- weather
- day/night cycle
- seasons
- rare and legendary Birbs
- special growth paths
- more rooms
- deeper exploration
- friendship/social systems
- limited events
- more complex mini-games
- richer character rigging
- sound design and Birb chirps
- accessibility settings
- offline/PWA features

---

# Art and animation pipeline

## Stage 1 — prototype

Use simple SVG/layered art and Motion to prove interaction.

Best for:

- bobbing
- blinking
- hopping
- squash/stretch
- head tilts
- hover/click reactions
- UI transitions

## Stage 2 — production Birb art

Create consistent character sheets containing:

- body
- head
- wings
- tail
- eyes/eyelids
- beak
- feet
- expressions
- accessories
- stage variants

The important goal is reusable character construction rather than one flattened illustration for every possible pose.

## Stage 3 — richer character animation

Evaluate Rive or another suitable rigged animation workflow when the art direction is stable.

Potential animations:

- breathing
- blinking
- looking
- preening
- eating
- sleeping
- hopping
- wing flapping
- happy reaction
- upset reaction
- petting reaction
- growth/evolution

Do not introduce a complex animation tool before the character design itself is settled.

---

# Technical responsibilities

| Technology | Responsibility |
| --- | --- |
| React | screens, components and interactive application UI |
| TypeScript | models, state types and application/game rules |
| Tailwind CSS | layout, responsive styling and design system |
| Motion | interface animation and lightweight character reactions |
| SVG / layered artwork | early Birb character visuals |
| Rive (later, if suitable) | richer rigged character animation |
| Phaser (later, when needed) | game-like mini-games and exploration |
| Laravel / PHP (later) | API, authentication and server-side rules |
| MySQL (later) | persistent users, Birbs, inventory and progression |
| Git / GitHub | incremental version history and project planning |

---

# Near-term build order

The next development steps are intentionally small:

1. Build the reusable first Birb component.
2. Define the real Birb visual direction.
3. Add blink, idle and interaction animation.
4. Create typed Birb mood/needs state.
5. Make one hidden need visibly affect behaviour.
6. Add the first care interaction.
7. Add reaction messages/personality.
8. Refine the scene into the cozy illustrated direction.
9. Make V0 responsive and accessible.
10. Only then begin the Egg → Hatchling growth loop.

---

# Git workflow

Prefer small commits that tell the development story.

Examples:

```text
Create first reusable Birb component
Add Birb idle and blink animations
Introduce typed Birb needs state
Add hunger-based Birb reactions
Add first feeding interaction
Create hatchling growth stage
Add basic inventory model
```

Avoid waiting until several unrelated systems are complete before committing.

---

## Current focus

**Make one Birb lovable.**

If caring for a single Birb already feels expressive and satisfying, the rest of the systems have something worth building around.
