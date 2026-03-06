# hive-lovable-ui

Starter template for Hive internal apps built with Lovable.

## Purpose

This repository exists to make Lovable-generated internal tools look consistent across the company.

Use this repo as the starting point for new apps instead of generating UI from scratch.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

## Design principles

- Reuse the existing app shell
- Reuse existing shadcn components
- Keep spacing and typography consistent
- Prefer simple neutral layouts over decorative styling
- Extend patterns already present in the repo

## Rules

- Do not invent new design styles
- Do not add gradients, glassmorphism, or flashy visual treatments
- Do not create multiple competing button, card, or table styles
- Do not replace the base layout unless there is a strong product reason
- Prefer composition of existing components over custom UI

## Layout expectations

Apps should generally follow this structure:

- Left sidebar navigation
- Top page header
- Card-based content areas
- Consistent page padding
- Clear visual hierarchy

## Components

Use existing shadcn components wherever possible, especially:

- Button
- Card
- Input
- Table
- Dialog
- Tabs
- Badge
- Dropdown Menu
- Select
- Sheet
- Separator

## Design tokens

### Core colors
- Background: #FFFFFF
- Surface muted: #F5F6F6
- Hover/accent surface: #EAECED
- Text primary: #3E4042
- Text strong: #161617
- Text secondary: #64676A
- Border: #D6D9DB
- Primary action: #2379DD
- Danger: #DB2C1D

### Radius
- Default radius: 8px
- Small radius: 4px
- Pill/full radius: 200px

### Spacing
- 4, 8, 16, 24, 32, 40, 48, 56
- Prefer 16px card gaps and 24px page sections

## How to use with Lovable

Start from this repository and ask Lovable to extend the existing UI system.

Recommended wording:

> Extend this project using the existing design system and layout patterns. Reuse the sidebar, header, spacing, and shadcn components. Do not invent a new visual style.

## Example prompts

### Add a new page

> Add an Orders page to this project. Use the existing sidebar and header patterns. Build with shadcn components only. Keep the visual style aligned with the current dashboard.

### Add a form

> Add a settings form using the existing layout and shadcn form controls. Keep spacing, typography, and card structure consistent with the rest of the app.

### Add a table

> Add a shipments table page using the existing app shell. Reuse card, table, badge, and button components. Do not introduce custom styling patterns.

## Contribution note

If you improve the shared UI foundation, keep changes generic and reusable for future internal tools.