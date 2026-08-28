# Hive UI — Lovable knowledge file

This project is a Hive internal tool. Keep every screen visually part of the
same Hive product family: **calm, minimal, structured, neutral, product-like —
not marketing-like.** Consistency matters more than creativity.

## Non-negotiables

1. **Use the existing shadcn/ui components** in `src/components/ui`. Do not
   introduce another component library or re-style primitives from scratch.
2. **Use only design tokens.** Never write raw hex, and never use Tailwind
   palette colors (`gray-*`, `slate-*`, `zinc-*`, `neutral-*`, `stone-*`).
   Colors come from the semantic tokens in `src/index.css`.
3. **Font is Geist.** Do not add another font family.
4. **Sentence case** for all UI copy — buttons, nav, labels, headers, dialog
   titles. "Create order", not "Create Order". Only proper nouns capitalised.
5. No gradients, neon, heavy shadows, or oversized radii. Subtle borders over
   shadows. Radius default is 8px (`rounded-md`); pills use `rounded-full`.

## Layout

Every tool uses the same shell: **sidebar → header → content**. Content nests
Page → Section → Card. Reuse the shell in `src/App.tsx`; don't invent new
layouts. Product UI is desktop-first (min 1280px).

## Color usage (Tailwind utilities → meaning)

- `bg-background` page, `bg-card` surfaces/panels, `bg-secondary` muted fills
  and table headers.
- Primary button is **black** (`variant="default"`). Do **not** use a blue
  primary button unless explicitly asked.
- `variant="secondary"` = white + hairline border. `variant="destructive"` =
  terracotta, for destructive actions only.
- Status/semantic color only when it carries real meaning: success (forest),
  info (blue), warning (sun), danger (cherry). Use `<Badge variant="…">`.
- Decorative color families (fjord, teal, plum, sun, …) are for categorical
  accents and data-viz only — one accent family per screen, used sparingly.

## Spacing

Stick to the scale: 4 / 8 / 16 / 24 / 32 / 48. Page padding `p-6`, card padding
`p-4`, section gap `space-y-6`, grid gap `gap-4`. Don't invent custom values.

## When generating a new feature

> Extend this project using the existing sidebar/header/content shell and the
> shadcn components in `src/components/ui`. Use only the semantic design tokens
> in `src/index.css` — no raw hex, no Tailwind palette colors. Geist font,
> sentence-case copy, subtle borders, black primary buttons. Choose the
> simplest implementation that still looks like part of the Hive product family.

Choose the calmer, more neutral option when unsure.
