# Hive UI Style Guide for Lovable

This file defines the visual rules for Hive internal tools generated with Lovable.

The goal is **consistent visual appearance across generated apps**.

Use only the tokens and rules defined below.

---

# Instruction Priority

When generating UI:

1. Follow this file first
2. Prefer the exact tokens listed here
3. Do not invent new colors
4. Do not use Tailwind palette colors such as `gray-*`, `slate-*`, `zinc-*`, `neutral-*`, `stone-*`

If unsure, choose the calmer and more neutral option.

---

# Primitive Tokens

## Neutral Greys

- `Grey.0` → `#FFFFFF`
- `Grey.25` → `#FBFAF8`
- `Grey.50` → `#F8F7F4`
- `Grey.100` → `#F5F4F0`
- `Grey.200` → `#E8E6E0`
- `Grey.300` → `#CEC9C4`
- `Grey.500` → `#9A9792`
- `Grey.700` → `#6E6B67`
- `Grey.900` → `#1B1A18`
- `Grey.1200` → `#000000`

## Decorative Colors

### Cherry (Red)

- `Decorative.Cherry.25` → `#FFF8F6`
- `Decorative.Cherry.50` → `#FFEDEA`
- `Decorative.Cherry.200` → `#FFC9C0`
- `Decorative.Cherry.400` → `#FF9B8E`
- `Decorative.Cherry.600` → `#A83A27`
- `Decorative.Cherry.700` → `#741209`

### Forest (Green)

- `Decorative.Forest.25` → `#F2FCF2`
- `Decorative.Forest.50` → `#DFF7E1`
- `Decorative.Forest.200` → `#8DD49A`
- `Decorative.Forest.400` → `#2D9E44`
- `Decorative.Forest.600` → `#085D0D`
- `Decorative.Forest.700` → `#064B0A`

### Sun (Yellow)

- `Decorative.Sun.25` → `#FFF9EE`
- `Decorative.Sun.50` → `#FFF0D7`
- `Decorative.Sun.200` → `#FFD59A`
- `Decorative.Sun.400` → `#F9A533`
- `Decorative.Sun.600` → `#E27E04`
- `Decorative.Sun.700` → `#B45F00`

### Blue

- `Decorative.Blue.25` → `#F0F8FF`
- `Decorative.Blue.50` → `#E5F0FF`
- `Decorative.Blue.200` → `#A7C9FF`
- `Decorative.Blue.400` → `#5895E5`
- `Decorative.Blue.600` → `#2270CF`
- `Decorative.Blue.700` → `#2855A3`

### Papaya (Orange)

- `Decorative.Papaya.25` → `#FFF0EA`
- `Decorative.Papaya.50` → `#FFE3D3`
- `Decorative.Papaya.200` → `#FFC0A6`
- `Decorative.Papaya.400` → `#FF8D65`
- `Decorative.Papaya.600` → `#FF7243`
- `Decorative.Papaya.700` → `#F2683B`

### Lipstick (Pink)

- `Decorative.Lipstick.25` → `#FFF6FC`
- `Decorative.Lipstick.50` → `#FFEAF8`
- `Decorative.Lipstick.200` → `#FFC2E8`
- `Decorative.Lipstick.400` → `#FF8CD4`
- `Decorative.Lipstick.600` → `#FF5CC8`
- `Decorative.Lipstick.700` → `#D245A8`

### Plum (Purple)

- `Decorative.Plum.25` → `#F9F3F7`
- `Decorative.Plum.50` → `#F8E9F4`
- `Decorative.Plum.200` → `#D4A9C6`
- `Decorative.Plum.400` → `#B05E96`
- `Decorative.Plum.600` → `#85085D`
- `Decorative.Plum.700` → `#6A064A`

### Sunrise (Wine)

- `Decorative.Sunrise.25` → `#FFFEFA`
- `Decorative.Sunrise.50` → `#FFFDF4`
- `Decorative.Sunrise.200` → `#FFF7CC`
- `Decorative.Sunrise.400` → `#FFF099`
- `Decorative.Sunrise.600` → `#FFDF39`
- `Decorative.Sunrise.700` → `#C7AE2E`

### Volt (Jungle)

- `Decorative.Volt.25` → `#F9FDE7`
- `Decorative.Volt.50` → `#F0F9C4`
- `Decorative.Volt.200` → `#E4F49D`
- `Decorative.Volt.400` → `#D0EA58`
- `Decorative.Volt.600` → `#D3EB42`
- `Decorative.Volt.700` → `#B5CD36`

### Banana (Coral)

- `Decorative.Banana.25` → `#FFFEFA`
- `Decorative.Banana.50` → `#FFFDF4`
- `Decorative.Banana.200` → `#FFF9DE`
- `Decorative.Banana.400` → `#FFF5C1`
- `Decorative.Banana.600` → `#FFEFA0`
- `Decorative.Banana.700` → `#CCBF80`

### Sand (Reseda)

- `Decorative.Sand.25` → `#FBFAF7`
- `Decorative.Sand.50` → `#F9F7F1`
- `Decorative.Sand.200` → `#EFECE3`
- `Decorative.Sand.400` → `#EADFCF`
- `Decorative.Sand.600` → `#E5DFCD`
- `Decorative.Sand.700` → `#BFB7A3`

### Ultramarine

- `Decorative.Ultramarine.25` → `#F4F6FB`
- `Decorative.Ultramarine.50` → `#ECF0F9`
- `Decorative.Ultramarine.200` → `#AAB8E2`
- `Decorative.Ultramarine.400` → `#6777C7`
- `Decorative.Ultramarine.600` → `#090C9B`
- `Decorative.Ultramarine.700` → `#0F068A`

### Fjord

- `Decorative.Fjord.25` → `#F6F8F9`
- `Decorative.Fjord.50` → `#EDF1F3`
- `Decorative.Fjord.200` → `#728A9D`
- `Decorative.Fjord.400` → `#5A728A`
- `Decorative.Fjord.600` → `#415A77`
- `Decorative.Fjord.700` → `#384469`

### Teal

- `Decorative.Teal.25` → `#F7FEFC`
- `Decorative.Teal.50` → `#E0FCF5`
- `Decorative.Teal.200` → `#A4EDE0`
- `Decorative.Teal.400` → `#19BBA1`
- `Decorative.Teal.600` → `#197368`
- `Decorative.Teal.700` → `#126B60`

---

# Semantic Tokens

These are the preferred UI meanings.

## Background Tokens

### Neutral Surfaces

- `Background.Primary.Default` → `Grey.0` → `#FFFFFF`
- `Background.Primary.Hover` → `Grey.50` → `#F8F7F4`
- `Background.Primary.Disabled` → `Grey.50` → `#F8F7F4`

- `Background.Secondary.Default` → `Grey.50` → `#F8F7F4`
- `Background.Secondary.Hover` → `Grey.100` → `#F5F4F0`
- `Background.Secondary.Disabled` → `Grey.100` → `#F5F4F0`

- `Background.Tertiary.Default` → `Decorative.Sand.25` → `#FBFAF7`
- `Background.Tertiary.Hover` → `Decorative.Sand.50` → `#F9F7F1`
- `Background.Tertiary.Disabled` → `Decorative.Sand.50` → `#F9F7F1`

- `Background.Inverse.Default` → `Grey.1200` → `#000000`
- `Background.Inverse.Hover` → `Grey.900` → `#1B1A18`
- `Background.Inverse.Disabled` → `Grey.700` → `#6E6B67`

### Status Backgrounds

- `Background.Danger.Default` → `Decorative.Cherry.50` → `#FFEDEA`
- `Background.Danger.Hover` → `Decorative.Cherry.200` → `#FFC9C0`
- `Background.Danger.Disabled` → `Decorative.Cherry.25` → `#FFF8F6`
- `Background.Danger.Inverse.Default` → `Decorative.Cherry.600` → `#A83A27`
- `Background.Danger.Inverse.Hover` → `Decorative.Cherry.700` → `#741209`
- `Background.Danger.Inverse.Disabled` → `Decorative.Cherry.400` → `#FF9B8E`

- `Background.Info.Default` → `Decorative.Blue.50` → `#E5F0FF`
- `Background.Info.Hover` → `Decorative.Blue.200` → `#A7C9FF`
- `Background.Info.Disabled` → `Decorative.Blue.25` → `#F0F8FF`
- `Background.Info.Inverse.Default` → `Decorative.Blue.600` → `#2270CF`
- `Background.Info.Inverse.Hover` → `Decorative.Blue.700` → `#2855A3`
- `Background.Info.Inverse.Disabled` → `Decorative.Blue.400` → `#5895E5`

- `Background.Warning.Default` → `Decorative.Sun.50` → `#FFF0D7`
- `Background.Warning.Hover` → `Decorative.Sun.200` → `#FFD59A`
- `Background.Warning.Disabled` → `Decorative.Sun.25` → `#FFF9EE`
- `Background.Warning.Inverse.Default` → `Decorative.Sun.600` → `#E27E04`
- `Background.Warning.Inverse.Hover` → `Decorative.Sun.700` → `#B45F00`
- `Background.Warning.Inverse.Disabled` → `Decorative.Sun.400` → `#F9A533`

- `Background.Success.Default` → `Decorative.Forest.50` → `#DFF7E1`
- `Background.Success.Hover` → `Decorative.Forest.200` → `#8DD49A`
- `Background.Success.Disabled` → `Decorative.Forest.25` → `#F2FCF2`
- `Background.Success.Inverse.Default` → `Decorative.Forest.600` → `#085D0D`
- `Background.Success.Inverse.Hover` → `Decorative.Forest.700` → `#064B0A`
- `Background.Success.Inverse.Disabled` → `Decorative.Forest.400` → `#2D9E44`

## Border Tokens

- `Border.Default` → `Grey.200` → `#E8E6E0`
- `Border.Hover` → `Grey.300` → `#CEC9C4`
- `Border.Disabled` → `Grey.100` → `#F5F4F0`

- `Border.Inverse.Default` → `Grey.1200` → `#000000`
- `Border.Inverse.Hover` → `Grey.900` → `#1B1A18`
- `Border.Inverse.Disabled` → `Grey.700` → `#6E6B67`

- `Border.Danger.Default` → `Decorative.Cherry.600` → `#A83A27`
- `Border.Danger.Hover` → `Decorative.Cherry.700` → `#741209`
- `Border.Danger.Disabled` → `Decorative.Cherry.400` → `#FF9B8E`

- `Border.Info.Default` → `Decorative.Blue.600` → `#2270CF`
- `Border.Info.Hover` → `Decorative.Blue.700` → `#2855A3`
- `Border.Info.Disabled` → `Decorative.Blue.400` → `#5895E5`

- `Border.Warning.Default` → `Decorative.Sun.600` → `#E27E04`
- `Border.Warning.Hover` → `Decorative.Sun.700` → `#B45F00`
- `Border.Warning.Disabled` → `Decorative.Sun.400` → `#F9A533`

- `Border.Success.Default` → `Decorative.Forest.600` → `#085D0D`
- `Border.Success.Hover` → `Decorative.Forest.700` → `#064B0A`
- `Border.Success.Disabled` → `Decorative.Forest.400` → `#2D9E44`

## Text Tokens

- `Text.Title.Default` → `Grey.1200` → `#000000`
- `Text.Title.Hover` → `Grey.900` → `#1B1A18`
- `Text.Title.Disabled` → `Grey.700` → `#6E6B67`

- `Text.Primary.Default` → `Grey.900` → `#1B1A18`
- `Text.Primary.Hover` → `Grey.1200` → `#000000`
- `Text.Primary.Disabled` → `Grey.700` → `#6E6B67`

- `Text.Secondary.Default` → `Grey.700` → `#6E6B67`
- `Text.Secondary.Hover` → `Grey.900` → `#1B1A18`
- `Text.Secondary.Disabled` → `Grey.500` → `#9A9792`

- `Text.Tertiary.Default` → `Grey.500` → `#9A9792`
- `Text.Tertiary.Hover` → `Grey.700` → `#6E6B67`
- `Text.Tertiary.Disabled` → `Grey.300` → `#CEC9C4`

- `Text.Danger.Default` → `Decorative.Cherry.600` → `#A83A27`
- `Text.Info.Default` → `Decorative.Blue.600` → `#2270CF`
- `Text.Success.Default` → `Decorative.Forest.600` → `#085D0D`
- `Text.Warning.Default` → `Decorative.Sun.600` → `#E27E04`
- `Text.Link.Default` → `Decorative.Blue.600` → `#2270CF`

- `Text.Inverse.Default` → `Grey.0` → `#FFFFFF`
- `Text.Inverse.Hover` → `Grey.50` → `#F8F7F4`
- `Text.Inverse.Disabled` → `Grey.200` → `#E8E6E0`

## Icon Tokens

- `Icon.Default` → `Grey.700` → `#6E6B67`
- `Icon.Hover` → `Grey.900` → `#1B1A18`
- `Icon.Disabled` → `Grey.500` → `#9A9792`

- `Icon.Inverse.Default` → `Grey.0` → `#FFFFFF`
- `Icon.Inverse.Hover` → `Grey.50` → `#F8F7F4`
- `Icon.Inverse.Disabled` → `Grey.100` → `#F5F4F0`

- `Icon.Interactive.Default` → `Grey.1200` → `#000000`
- `Icon.Interactive.Hover` → `Grey.900` → `#1B1A18`
- `Icon.Interactive.Disabled` → `Grey.700` → `#6E6B67`

---

# Core UI Rules

## Overall Tone

Hive internal tools should look:

- calm
- minimal
- structured
- neutral
- product-like, not marketing-like

Avoid decorative SaaS styling.

---

# Typography

Font: **Geist**

Use:

- strong titles with `Text.Title`
- regular body copy with `Text.Primary`
- helper and secondary text with `Text.Secondary`

Do not introduce extra fonts.

---

# Copy Style

Use **sentence case** for UI labels and actions.

Examples:

Correct:

- Add new
- Create order
- Edit address
- Save changes
- View details

Incorrect:

- Add New
- Create Order
- Edit Address
- Save Changes
- View Details

Use sentence case for:

- buttons
- navigation items
- form labels
- section titles
- table column headers
- dialog titles

Only capitalize proper nouns and product names.

Avoid title case in UI copy.

---

# Layout

Use a stable internal-tool structure:

- sidebar navigation
- top header
- main content area

Avoid experimental layouts and flashy compositions.

---

# Surface Rules

Use these defaults unless the page explicitly needs semantic/status styling.

- Page background → `Background.Tertiary.Default` → `#FBFAF7`
- Main cards / panels → `Background.Primary.Default` → `#FFFFFF`
- Secondary surfaces / table headers / neutral fills → `Background.Secondary.Default` → `#F8F7F4`

---

# Border Rules

Default UI border:

- `Border.Default` → `#E8E6E0`

Hover / stronger outline:

- `Border.Hover` → `#CEC9C4`

Use subtle borders instead of heavy shadows.

---

# Text Rules

Default text stack:

- Title / heading → `Text.Title.Default` → `#000000`
- Main body → `Text.Primary.Default` → `#1B1A18`
- Secondary / helper → `Text.Secondary.Default` → `#6E6B67`
- Tertiary / disabled → `Text.Tertiary.Default` → `#9A9792`

---

# Button Rules

## Primary button

Use:

- background → `Background.Inverse.Default` → `#000000`
- text → `Text.Inverse.Default` → `#FFFFFF`
- icon → `Icon.Inverse.Default` → `#FFFFFF`

Hover:

- background → `Background.Inverse.Hover` → `#1B1A18`

## Secondary button

Use:

- background → `Background.Primary.Default` → `#FFFFFF`
- border → `Border.Default` → `#E8E6E0`
- text → `Text.Title.Default` → `#000000`

Hover:

- background → `Background.Primary.Hover` → `#F8F7F4`
- border → `Border.Hover` → `#CEC9C4`

Do not use blue primary buttons unless explicitly requested.

---

# Table Rules

Tables should:

- sit inside cards
- use `Border.Default` for row dividers
- use `Text.Secondary` for table headers
- use `Text.Primary` for cell content
- use `Background.Secondary.Default` for subtle header fill when needed

Avoid dense grid styling.

---

# Form Rules

Inputs should use:

- background → `Background.Primary.Default`
- border → `Border.Default`
- stronger focus outline → `Border.Hover`

Labels:

- label text → `Text.Title.Default`
- helper text → `Text.Secondary.Default`

Avoid decorative inputs and bright focus colors.

---

# Badge and Status Rules

Neutral badges:

- background → `Background.Secondary.Default`
- border → `Border.Default`
- text → `Text.Primary.Default`

Danger badges / banners:

- background → `Background.Danger.Default`
- text → `Text.Danger.Default`
- border → `Border.Danger.Default`

Info badges / banners:

- background → `Background.Info.Default`
- text → `Text.Info.Default`
- border → `Border.Info.Default`

Success badges / banners:

- background → `Background.Success.Default`
- text → `Text.Success.Default`
- border → `Border.Success.Default`

Warning badges / banners:

- background → `Background.Warning.Default`
- text → `Text.Warning.Default`
- border → `Border.Warning.Default`

Use status colors only for actual semantic meaning.

---

# Decorative Surface Rules

Use decorative families sparingly.

Allowed decorative families for large soft surfaces, charts, or accent blocks:

- Sand
- Fjord
- Ultramarine
- Banana
- Sunrise
- Volt
- Plum
- Lipstick
- Forest
- Papaya

Preferred usage:

- large tinted backgrounds
- category accents
- data viz accents
- non-critical visual grouping

Do not use many decorative families on one screen.
Prefer one accent family per page.

---

# Spacing

Use a consistent spacing rhythm:

- `8`
- `16`
- `24`
- `32`
- `48`

Recommended:

- page padding → `24px`
- card padding → `16px`
- section spacing → `24px`

---

# Forbidden Styles

Do NOT use:

- Tailwind palettes such as `gray-*`, `slate-*`, `zinc-*`, `neutral-*`, `stone-*`
- gradients
- neon colors
- heavy shadows
- oversized border radius
- overly playful UI
- random new hex colors

Use only the token values in this file.

---

# Final Rule

When generating a page, choose the simplest implementation that still looks like part of the same Hive product family.

Consistency is more important than creativity.