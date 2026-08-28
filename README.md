# Hive Lovable UI

A **Lovable-native** starter that makes AI-generated internal tools look like
Hive. It is a standard **Vite + React + TypeScript + Tailwind + shadcn/ui**
project — the exact stack Lovable generates — with one Hive-specific thing:
the **design tokens**.

Generated apps get the Hive look (color, type, spacing, radius) for free,
because every shadcn component reads Hive's semantic tokens.

---

## What this is (and isn't)

- **Is:** native shadcn components wearing Hive tokens. Lovable understands
  it natively and builds on top of it without fighting the tooling.
- **Isn't:** the real Hive component library. `@hive-engineering/design-system`
  (React Aria + styled-components, private npm) cannot go into Lovable —
  wrong paradigm, private registry, and Lovable's external-npm path is
  Enterprise-only. So tools built here **look like** Hive; they are not built
  from Hive DS components. That is the intended, pragmatic ceiling.

Token source of truth: the Claude Design export (`colors_and_type.css`),
ported into [`src/index.css`](src/index.css).

---

## How the tokens connect (the bridge)

`src/index.css` has three layers:

1. **Hive tokens** — every primitive + semantic token, verbatim from the
   canonical export (e.g. `--bg-primary-default`, `--text-secondary-default`).
2. **shadcn bridge** — maps shadcn's contract onto Hive tokens
   (`--primary → --bg-inverse-default`, `--border → --border-default`, …).
   Single source of truth stays the Hive layer.
3. **Tailwind base.**

`tailwind.config.ts` wires the utilities (`bg-primary`, `text-muted-foreground`,
…) to those variables. Change a Hive token once → every component updates.

---

## Connecting to Lovable

Three ways, cheapest first:

1. **Knowledge file (Tier 0).** Paste [`.lovable/system.md`](.lovable/system.md)
   into a Lovable project's Knowledge tab. Soft guidance, no code.
2. **Starter repo (Tier 1 — this repo).** Use this as the seed project in
   Lovable (duplicate / remix), then build features on top. Colors *are* the
   tokens, so output stays on-brand. This is the recommended path.
3. **Native Lovable Design System (Tier 2).** Promote this into a released
   Lovable design-system project that other tools subscribe to, with versioned
   updates and adherence scanning. Only worth it with several tools + an owner.

---

## Fonts & licensing

The real Hive face, **Noi Variable Flex, is proprietary and not
redistributable.** This shared/remixable seed ships **Geist** only (SIL OFL,
~95% identical metrics). To re-enable Noi inside a licensed internal Hive
deployment, uncomment the `@font-face` block in `src/index.css`, add the
`.ttf`, and put `"Noi Variable Flex"` first in `--font-sans` / `--font-display`.

---

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build
```

Add more shadcn components with `npx shadcn@latest add <name>` — they inherit
the Hive theme automatically via `components.json`.

## Stack

Vite · React 18 · TypeScript · Tailwind CSS · shadcn/ui · Geist · lucide-react
