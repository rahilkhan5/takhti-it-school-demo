---
name: Takhti IT School
description: A demo IT courses site for Pakistan, built as the familiar course catalogue played straight at Udemy and Coursera craft level.
colors:
  brand-blue: "#2453d6"
  brand-blue-deep: "#1b40ad"
  brand-wash: "#eaf0fd"
  free-green: "#0f7a55"
  free-wash: "#e5f3ec"
  star-amber: "#9a5800"
  page-white: "#ffffff"
  cool-surface: "#f6f7f9"
  surface-deep: "#eceff3"
  ink: "#16181d"
  ink-soft: "#474e5c"
  ink-muted: "#5f6776"
  hairline: "#dde1e7"
  rule-strong: "#c3c9d3"
  night-band: "#16181d"
  night-raised: "#2a2e37"
  on-night-soft: "#c9ced8"
  night-link: "#a9c1ff"
  night-star: "#ffc04d"
  night-green: "#7fe0b5"
  stage-glow: "#23324f"
  stage-deep: "#0d0f13"
  error-red: "#c0262d"
  error-wash: "#fdecec"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.875rem, 1.4rem + 1.9vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  headline-small:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.5rem, 1.25rem + 0.9vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Source Sans 3, Segoe UI, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.5
  code:
    fontFamily: "Source Code Pro, Consolas, monospace"
    fontSize: "0.92em"
    fontWeight: 400
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "72px"
  "9": "104px"
components:
  button-primary:
    backgroundColor: "{colors.brand-blue}"
    textColor: "{colors.page-white}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.brand-blue-deep}"
    textColor: "{colors.page-white}"
  button-outline:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.cool-surface}"
    textColor: "{colors.ink}"
  tag-free:
    backgroundColor: "{colors.free-wash}"
    textColor: "{colors.free-green}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  tag-neutral:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  tag-brand:
    backgroundColor: "{colors.brand-wash}"
    textColor: "{colors.brand-blue-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
  input-field:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    height: "48px"
  search-pill:
    backgroundColor: "{colors.cool-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px 0 44px"
    height: "44px"
  topic-chip:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  progress-bar:
    backgroundColor: "{colors.surface-deep}"
    rounded: "{rounded.pill}"
    height: "8px"
  course-cover:
    rounded: "{rounded.md}"
  enrol-card:
    backgroundColor: "{colors.page-white}"
    rounded: "{rounded.lg}"
    padding: "24px"
    width: "340px"
  quiz-option:
    backgroundColor: "{colors.page-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    height: "48px"
  quiz-option-selected:
    backgroundColor: "{colors.brand-wash}"
    textColor: "{colors.ink}"
  course-band:
    backgroundColor: "{colors.night-band}"
    textColor: "{colors.page-white}"
---

# Design System: Takhti IT School

## Overview

**Creative North Star: "The Open Syllabus"**

Takhti is the course site a student already knows how to use. White pages, a cool grey for bands and inputs, near black ink, one blue that does every job an action does, and a dark band behind the title of every course. Nothing is themed. The craft lives in the details a learner touches: a card that already says hours, lessons, level, rating and price; a course page that opens the whole curriculum before the price asks for anything; a progress bar that shows up wherever the course does.

The density is the category's: generous on the catalogue and course page, tight and functional in the player and checkout. Headlines and course titles are set in a serif over a sans interface, the familiar pattern of the big course marketplaces. The only imagery is course covers drawn in code (a Word window, a spreadsheet, a code editor, a terminal, an artboard, a gig card), each on its own soft tint, so the catalogue looks illustrated without a single photo on mobile data.

The direction was chosen by the user as the category standard, played straight. The visual rejection is quirky theming: no metaphor world, no decorative texture, no second accent colour.

**Key Characteristics:**
- White pages, cool grey bands, one brand blue for action, link, focus, selection and progress.
- Green means Free or Completed and nothing else; amber is only for rating stars.
- A near black band carries course titles, the demo strip, the player top bar and the footer.
- Serif headlines over a sans interface; the sans also sets card titles and every control.
- Course covers are code-drawn artwork at 16:9 on a per-course tint.
- Flat surfaces with hairlines; soft shadows only on floating proof, the enrol card and hovered covers.

## Colors

A cool neutral page with exactly one working colour, plus two meaning colours that never decorate.

### Primary
- **Takhti Blue** (#2453d6): primary buttons, text links, the focus ring (3px outline, 2px offset), text selection, the header count badge, the active nav underline, progress fills, the checked quiz dot and the CSS accent colour for native controls.
- **Takhti Blue Deep** (#1b40ad): hover for primary buttons and links, the active nav label, card titles on hover, instructor names, text on brand tags.
- **Blue Wash** (#eaf0fd): the selected quiz option background and brand tags.

### Secondary
- **Free Green** (#0f7a55): the Free tag, completed lesson ticks, the progress bar once a course is finished, the completed state of the Mark complete button, the "courses are free" reassurance line.
- **Free Wash** (#e5f3ec): background of Free tags and the completed lesson button.

### Tertiary
- **Star Amber** (#9a5800): rating stars and the rating number on white. Empty stars use Rule Strong.
- **Night Star** (#ffc04d): the same stars when they sit on the dark course band.

### Neutral
- **Page White** (#ffffff): every page, cards, inputs, the enrol card.
- **Cool Surface** (#f6f7f9): the facts band, header search, hover on outline buttons and nav, curriculum module footers, sidebar module titles.
- **Surface Deep** (#eceff3): progress track, neutral tags, disabled buttons, module summary hover.
- **Ink** (#16181d): headings, body text, outline button borders.
- **Ink Soft** (#474e5c): subtitles, hero sub line, progress captions.
- **Ink Muted** (#5f6776): instructor names on cards, meta lines, durations, hints, icons inside fields.
- **Hairline** (#dde1e7): header bottom rule, card and panel borders, sidebar dividers.
- **Rule Strong** (#c3c9d3): input, chip and quiz option borders at rest, empty stars.
- **Night Band** (#16181d): the course title band, demo strip, player top bar, footer and dark proof chip. Same value as Ink, kept as its own role.
- **Night Raised** (#2a2e37): dividers and progress track on the night band.
- **On Night Soft** (#c9ced8): secondary text on the night band and footer links.
- **Night Link** (#a9c1ff): links, breadcrumbs, rating counts and the focus ring on the night band.
- **Night Green** (#7fe0b5): the done tick on the dark proof chip. Green Means Done, on dark.
- **Stage Glow** (#23324f) to **Stage Deep** (#0d0f13): the radial gradient behind the lesson player stage, with a 55% black scrim under the stage length label.
- **Artwork palettes:** course covers (Cover.astro) draw small product scenes, such as a spreadsheet or a code editor, in their own colours, and the certificate keeps its cream paper and gold double border. These colours stay inside that artwork and never become interface colours.
- **Error Red** (#c0262d) and **Error Wash** (#fdecec): invalid field borders, error messages and error panels.

### Named Rules
**The One Blue Rule.** Every interactive affordance uses Takhti Blue. No second accent exists; a new feature that wants attention gets a primary button, not a new colour.

**The Green Means Done Rule.** Free Green is reserved for Free and Completed. It never decorates, never marks success of a form in general, and never appears on an unfinished state.

**The Stars Only Rule.** Amber appears only in rating stars and their number.

## Typography

**Display Font:** Source Serif 4 (with Georgia, serif)
**Body Font:** Source Sans 3 (with Segoe UI, system-ui, sans-serif)
**Label/Mono Font:** Source Code Pro (with Consolas, monospace), for code inside lessons and on covers only

**Character:** A bookish serif for the promise (headlines, course titles, prices) over a plain, highly legible sans for everything a learner reads and taps. All three faces are self-hosted variable fonts, the two main ones preloaded.

### Hierarchy
- **Display** (700, clamp(2.25rem, 1.5rem + 3vw, 3.75rem), 1.12): the home headline (max 15ch) and course titles on the night band (max 20ch).
- **Headline** (700, clamp(1.875rem, 1.4rem + 1.9vw, 2.75rem), 1.12): section headings on home, the enrol card price, checkout done heading.
- **Headline Small** (700, clamp(1.5rem, 1.25rem + 0.9vw, 1.875rem), 1.12): section headings inside the course page and lesson notes.
- **Title** (Source Sans 3, 700, 1.25rem, 1.25): course card titles, sidebar heading, instructor name, hero and course sub lines (at weight 400).
- **Body** (400, 1.0625rem, 1.55): reading text, capped at 58 to 68ch in prose blocks.
- **Body Small** (400, 0.9375rem): card meta, lesson rows, hints, breadcrumbs, field labels (at 700).
- **Label** (700, 0.8125rem): tags, the demo strip, the header count badge, tiny captions.

### Named Rules
**The Serif Promises, Sans Works Rule.** Serif sets headings, course titles in hero contexts, the wordmark and prices. Card titles, controls, labels and lesson rows are always the sans.

**The No Shouting Rule.** No uppercase labels and no tracked out small caps. Hierarchy comes from size, weight and the serif, never from letter-spacing. Numbers that line up (prices, counts, progress) use tabular figures.

## Layout

One centred column, `min(1240px, 100% - 2rem)`, on every page except the player. Spacing follows a nine step scale from 4px to 104px; sections on home and the course page are separated by 72px, the footer starts 104px below content.

- **Home:** a two column hero (words and search on the left, a stacked proof card of real product UI on the right), a full bleed grey facts band, then the catalogue: a filter row (All/Free/Paid segmented pill, search, topic, level and sort selects) over a card grid that auto-fills at a 340px minimum, which lands at three columns on desktop.
- **Course page:** a full bleed night band carries breadcrumbs, title, sub line, rating, instructor and meta, right padded to leave room for the 340px enrol card, which pulls up into the band and stays sticky (top 88px) beside the main column.
- **Player:** full width, no site header. A 60px sticky night top bar, a 16:9 stage (max 68svh) with lesson notes below, and a 380px sticky curriculum sidebar on the right.
- **Checkout:** form column beside a sticky order summary.
- **Breakpoints:** at 1000px the header search hides; around 900 to 960px two column layouts stack and the enrol card becomes a bottom sticky bar on phones; at 640px the nav wraps under the wordmark, the demo strip shortens, the footer becomes one column.
- Header is sticky at 68px, white at 97% opacity with a hairline and a faint drop.

## Elevation & Depth

Flat by default. Depth comes from hairlines, the cool grey surface and the night band. Shadows are reserved for things that float above the page: the enrol card, the hero proof card and chip, the hero search pill, and course covers on hover.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 2px rgb(22 24 29 / 0.06), 0 8px 24px -12px rgb(22 24 29 / 0.18)`): the hero search pill and quiet floating panels.
- **Lift** (`box-shadow: 0 2px 4px rgb(22 24 29 / 0.06), 0 18px 40px -18px rgb(22 24 29 / 0.32)`): the sticky enrol card, the hero proof, the play button on the enrol cover, and covers on hover.
- **Header drop** (`box-shadow: 0 2px 8px -6px rgb(22 24 29 / 0.25)`): the sticky header only.
- **Cover edge** (`box-shadow: inset 0 0 0 1px rgb(22 24 29 / 0.06)`): a faint inner rule so light cover tints hold their edge on white.

### Named Rules
**The Float Only Rule.** A shadow means the element sits above the scroll (sticky, overlapping, or lifted by hover). Static cards and panels get a hairline instead.

## Shapes

Gently rounded and consistent. Controls, tags and quiz options use 6px; course covers and focus outlines around cards use 10px; the enrol card, panels and the curriculum box use 16px. Searches, topic chips, the segmented filter, progress bars and badges are full pills. Avatars and the play button are circles. Covers are always 16:9 and clip their artwork to the parent radius. Borders are 1px hairlines on containers and 1.5px on anything you can type into or press.

## Components

### Buttons
Plain and confident, the category's button.
- **Shape:** gently rounded (6px), min height 48px, 24px side padding, 700 weight, 20px icon with 8px gap.
- **Primary:** Takhti Blue fill and border, white text. Used once per view for the main action (Start free course, Buy now, Continue, Pay).
- **Hover / Focus:** hover deepens to Blue Deep in 160ms; press scales to 0.97 in 120ms; focus is the global 3px blue outline.
- **Outline:** white with a 1.5px Ink border and Ink text; hover fills Cool Surface. Inside a pill search the button takes the pill radius.
- **Disabled:** Surface Deep fill, Rule Strong border, Ink Muted text, no press.

### Chips
- **Topic chips:** white pills, 40px tall, 1.5px Rule Strong border that darkens to Ink Muted on hover.
- **Segmented filter:** a pill group where the selected option is a dark filled pill.
- **Tags:** small 6px rounded labels at 0.8125rem bold: Free (green on green wash), neutral (Ink Soft on Surface Deep), brand (Blue Deep on Blue Wash).

### Cards / Containers
- **Course card:** no box. A 16:9 code-drawn cover (10px radius) over a sans title, instructor, stars with rating count, a meta line (hours, lessons, level, separated by middots), then the price in bold or a Free tag. When enrolled, a progress bar and "N of M lessons" caption appear below. Hover lifts the cover 3px with the Lift shadow and turns the title Blue Deep.
- **Enrol card:** white, 16px radius, hairline, Lift shadow. Cover with a gradient scrim, a white circular play button and "Preview this course"; then the serif price, the primary action, a reassurance line and "This course includes" with outline icons.
- **Panels:** white, 16px radius, hairline border, 24px padding (What you will learn, reviews, curriculum).

### Inputs / Fields
- **Style:** white, 1.5px Rule Strong border, 6px radius, 48px tall, 1.0625rem text; a bold label above and a muted hint below.
- **Focus:** border turns Takhti Blue with the blue outline flush.
- **Error:** Error Red border and a 600 weight red message. The checkout has no card, wallet, PIN or CNIC fields.
- **Search:** header search is a grey pill with a leading icon that turns white on focus; the hero search is a larger white pill with the Rest shadow and an embedded primary button.

### Navigation
- **Header:** wordmark (blue tablet mark plus "Takhti" in the serif at 1.5rem), Courses, Free courses, search, My learning with a blue count badge. Links are 600 weight, 44px tall, Cool Surface on hover; the current page gets Blue Deep text and a 3px blue underline.
- **Demo strip:** a night band line above everything, shortened on phones.
- **Footer:** night band, three columns of muted links that brighten and underline on hover.

### Curriculum
The signature: one list that tells you where you are. Modules are native disclosure rows on Cool Surface with a chevron that rotates in 200ms and a "N lessons · M min" meta. Lessons show a play or lock icon, the title, a Preview link where free, and minutes. A completed lesson swaps its icon for a white tick in a green circle. The module ends with the final quiz and certificate rows. The same completion state drives the player sidebar, the course card progress, the enrol card and My learning.

### Lesson Player
A night top bar (home mark, course name, a 6px progress bar, My learning), a dark 16:9 stage that is a labelled placeholder for the video, notes below, and the sticky curriculum sidebar. Mark complete draws its tick (stroke dash animation, 360ms) and turns green.

### Quiz Option
48px rows with a 1.5px Rule Strong border and a custom radio dot. Checked rows take a blue border and Blue Wash fill, and the dot fills in with a 160ms scale.

## Do's and Don'ts

### Do:
- **Do** use Takhti Blue (#2453d6) for every action, link, focus ring and progress fill, and Blue Deep (#1b40ad) for their hover.
- **Do** keep Free Green (#0f7a55) for Free and Completed only.
- **Do** put hours, lesson count, level, rating and price (or Free) on every course card.
- **Do** draw new course covers in code at 16:9 on a soft per-course tint, using real product scenes (a window, a sheet, an editor).
- **Do** show progress the same way everywhere: an 8px pill track in Surface Deep with a blue fill that turns green when finished.
- **Do** keep motion quick and quiet: 160ms hovers, 200 to 220ms chevrons and cover lifts, the 400ms progress fill, and one tick drawing itself on completion; respect reduced motion.
- **Do** label anything made up (reviews, numbers, the payment step, certificates) as a demo in plain text.

### Don't:
- **Don't** add a second accent colour, gradients on controls, or a themed texture; the user chose the category standard played straight.
- **Don't** use uppercase or letter-spaced labels above headings.
- **Don't** set card titles, buttons or form labels in the serif.
- **Don't** put a shadow on a static card; use a hairline.
- **Don't** use stock photos or real instructor photos; instructors are initials on a soft tone.
- **Don't** add scroll-triggered entrance animations.
