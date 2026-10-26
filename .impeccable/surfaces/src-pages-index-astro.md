---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

Scope: the whole IT school demo: home with the course catalogue (`src/pages/index.astro`), 6 course pages (`src/pages/course/[slug].astro`), checkout for the paid courses (`src/pages/checkout/[slug].astro`), the lesson player with quiz (`src/pages/learn/[slug].astro`), My learning (`src/pages/my.astro`) and the certificate (`src/pages/certificate/[slug].astro`). Mode: Persuade on home and course pages, Operate in checkout, the player and My learning.

Audience: institute owners and trainers in Pakistan judging a demo on a phone; story visitors are young people learning computer and IT skills for a job or freelancing, on a phone at night, on mobile data.
Job: make a learner start a course today and come back to finish it. Action: browse, open a course, see the full syllabus, start a free course in one tap or buy a paid one with JazzCash, Easypaisa or card, learn lesson by lesson, pass the quiz, get the certificate.
Proof: 6 courses with full syllabus, hours, levels and PKR prices, free preview lessons, a player that remembers progress, a real quiz, a printable certificate, all clearly demo.
Constraints: everything labelled demo; no real numbers (03XX XXXXXXX); no card, wallet, PIN or CNIC fields at all; no video files (a labelled placeholder plays instead); enrolment, progress, quiz and certificate stay in the browser.

## Direction contract

THESIS: The category standard played straight, at the craft level of Udemy and Coursera: a calm white catalogue where every course card already tells you what you get (cover, hours, level, rating, price or Free), a course page that shows the whole syllabus before it asks for money, and a player that always says how far you are. Chosen by the user from the direction round (canon card, seed b2de6422). It refuses quirky themes, and it refuses the WhatsApp group and YouTube playlist habit of the category.

OWN-WORLD: White pages (#ffffff) with a cool grey surface (#f6f7f9) for bands and inputs, near black ink (#16181d), one brand blue (#2453d6) for primary actions, links, focus and progress, a quiet green (#0f7a55) that means Free and Completed only, an amber (#b26b00) for rating stars only, and a dark band (#16181d) behind the course title on course pages. Source Serif 4 for headlines and course titles (the Udemy pattern of a serif headline over a sans interface), Source Sans 3 for the interface and reading, Source Code Pro only for code inside lessons and covers. Course covers are authored artwork drawn in code per course (a code editor, a terminal, a spreadsheet, an artboard, a gig card, a desktop window), so the catalogue has real covers with no heavy photos on mobile data.

STORY: A student lands from a Facebook ad, sees "Learn computer and IT skills that get you hired", searches Python or taps Free, opens Web Design with HTML and CSS, reads the syllabus, presses Start free course and is in lesson one in one tap. She comes back the next night: My learning shows 3 of 9 lessons done and Continue takes her straight to lesson 4. She finishes, passes the quiz with 3 of 4 and prints her certificate. An institute owner sees his own courses selling and teaching while he sleeps.

FIRST VIEWPORT: Home: header with the Takhti wordmark, Courses, Free courses, My learning and a search box. A serif headline "Learn computer and IT skills that get you hired", one plain line under it, a large search field with quick topics (Python, MS Office, Freelancing, Web design) and "3 courses are free. No sign up." Beside it, proof instead of a stock photo: a real Continue learning card from the player (course cover, "Lesson 4 of 9: Boxes, margin and padding", a progress bar at 33%, Continue button) overlapping a course card. On phones: headline, search, quick topics, then the proof card.

FORM: Category standard (canon), user choice. Signature interaction: completing a lesson checks it off in the curriculum, fills the progress bar and moves the Continue point, everywhere it appears (player sidebar, course page, My learning). Motion grammar: quiet and quick, 150 to 250ms ease-out on hovers, accordions and the progress fill; one authored moment, the checkmark drawing itself when a lesson is completed; no scroll-triggered entrances.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict and DESIGN.md.
