# Roadmap

## Release 0.1.0

- **T01 — SKELEKRON UI foundation refinement: COMPLETE.** Foundation committed
  in `2279eee` and included in the accepted T03 baseline.
  Explicit skelekron.scss master, root Sass settings, rem() and named breakpoint
  tools, grouped base/layout/component partials, skel- naming, explicit BEM
  modifiers, static demo, and usage documentation. Release remains 0.1.0.
- **T02 — Modal / lightbox:** Backlog; not started. Scope and accessibility behavior
  will be defined in a separate task.
- **T03 — SKELEKRON Theme & Hero: COMPLETE.** White/navy foundation palette,
  electric-blue controls and labels, responsive skull/cloud image layers, and
  demo-only hero composition implemented on `codex/0.1.0-t03-theme-hero`.
  Visually accepted by the maintainer on 2026-10-29; release remains 0.1.0.

- **T04 — Light/Dark Theme Support: COMPLETE.** Centralized Sass palettes, semantic
  CSS colors, system/manual selection, and an optional persistent demo selector
  implemented on `codex/0.1.0-t04-light-dark-themes`; finalized with T07.
  Release remains 0.1.0.

- **T05 — Hero SVG & Layout Refinement: COMPLETE.** Supplied buildings SVG inlined
  with original geometry and IDs, three demo-only theme colors, and a responsive
  Grid-centered artwork layer on `codex/0.1.0-t05-hero-svg`. Existing uncommitted
  T04 work preserved at implementation; finalized with T07. Release remains 0.1.0.

- **T06 — Inverse Section Colors: WITHDRAWN.** Removed by T07 at the maintainer's
  request; sections use the normal theme palette again.
- **T07 — Dark Theme Refinement & Cleanup: COMPLETE.** Removed T06's dedicated
  section palette and demo coupling. Refined existing dark tokens toward cool
  steel neutrals and added one subtle demo-only radial hero light. Implemented
  on `codex/0.1.0-t07-dark-theme-polish`; approved for commit and local master integration on 2026-10-31.
  Final dark accents: primary #82B5D0 and secondary #AABDC8; approved hover
  and focus colors retained.
  Release remains 0.1.0.

- **T08 — Light Theme Refinement: COMPLETE.** Muted blue primary #286D96,
  soft secondary #DCE5EC with dark text, and demo-only #F8FAFC hero background.
  Implemented on `codex/0.1.0-t08-light-theme-polish`; visually approved for commit and local master integration.
  Dark palette, artwork, layout, and release 0.1.0 preserved.

- **T09 — Hero Animation & Effects: COMPLETE.** Skull hover animation,
  exhaust particle movement, positioning, size and SVG shape variations, and
  eye, ear, and thruster shimmer effects completed.
  Visually approved by the maintainer on 2026-11-01; release remains 0.1.0.

T07 finalization includes the accumulated T04/T05 theme and hero work.
- **T10 — Pre-release Audit & Polish: REVIEW.** Refined README/demo copy,
  separated demo Sass responsibilities, standardized subsection comments, and
  reconciled documentation with the current implementation. Awaiting maintainer
  review; changes remain uncommitted.

- **T11 — Standardize Responsive Breakpoints: DONE.** Added configurable
  sm/md/lg/xl Sass breakpoints at 640/768/1024/1280px and updated component
  references and README usage. Container padding and taller demo hero now
  transition at 1024px; container maximum and approved styling preserved.
  Release remains 0.1.0; maintainer approved finalization on 2026-11-01.

- **T12 — Demo Theme Cleanup: DONE.** Moved demo artwork theme declarations
  into the hero partial and removed redundant dark-mode building colors.
  System detection, explicit overrides, gradient, colors, and comments preserved.
  Build passed; compiled CSS differs only by the redundant declarations.
  Toolkit theme unchanged; maintainer approved finalization on 2026-11-01.

Next: **0.1.0 public release preparation**, after T10 review.
T02 modal/lightbox remains an unstarted backlog feature.
The dated verification notes below retain their original pre-finalization status.
Release remains 0.1.0; no push, tag, or publication.

### T01 verification — 2026-10-28

- Dart Sass 1.106.1: refined build passed without warnings or errors.
- Automated Edge 156 checks at 320, 375, 767, 768, 1152, and 1440px: no horizontal
  overflow; correct grid columns/gutters, container widths, section spacing,
  border-box sizing, and responsive image ratio.
- Keyboard skip link/focus, anchor/CTA destinations, submit action, disabled
  state, hover feedback, and default text/focus contrast checks passed.
- Sass configuration and independent layout/button module compilation passed.
- rem() unitless/px conversion and invalid-unit errors, custom breakpoint maps
  and unknown-name errors, and optional button omission passed without warnings.
- Generated CSS matches the pre-refinement baseline after prefix/whitespace
  normalization. A 20px root font-size check preserved text scaling without overflow.
- Mobile/desktop screenshots and keyboard focus were visually inspected.
  This is agent verification; maintainer visual acceptance remains pending.
- Generated CSS is present for static hosting. T02 remains unstarted.

### T03 verification — 2026-10-29

- Existing Sass build passed without warnings or errors; generated CSS updated.
- Automated Edge checks at 320, 375, 767, 768, 1152, and 1440px passed:
  no horizontal overflow, existing layout/grid contracts, anchors, CTA, submit,
  disabled/hover states, skip link, keyboard focus, and text/focus contrast.
- Hero checks at 320, 375, 768, 1440, and 2560px passed image loading,
  proportional sizing, pixelated rendering, and no overflow with a 20px root.
- Desktop, mobile, tablet, and CTA focus screenshots visually inspected.
  Text remains legible; layers retain their aspect ratios and complete artwork.
- Both supplied PNGs contain alpha transparency and were copied byte-for-byte
  to assets/hero-skull.png and assets/hero-clouds.png (matching SHA-256 hashes).
  Source artwork has speckled/fringed cutout edges around clouds and cyan exhaust;
  these were not retouched. Clouds retain their full width and are centered up to
  their native width, leaving visible side boundaries on ultrawide displays.
- No separate approved composition mockup was available in the repository or
  attachments; implementation follows the requested left text/right skull layout.
- Maintainer accepted T03 and authorized commit and local master integration on
  2026-10-29. Preserved the maintainer's hero-skull-v2.png selection and supplied
  hero variants unchanged. The original image verification above predates that
  replacement; the Sass build and six-width layout/interaction/contrast checks
  passed again with the selected replacement.
- No dependencies, application JavaScript, or release-version changes.
  T02 remains unstarted. No push or tag is part of this integration.

### T04 verification — 2026-10-29

- Existing Sass build passed; both generated stylesheets updated.
- Existing six-width layout/interaction checks passed without browser errors.
- Focused Edge checks passed explicit light/dark selection, live system changes,
  manual preference persistence, return to System, disabled JavaScript, and
  unavailable storage. README CSS overrides passed in automatic and manual modes.
- Sass light/dark configuration and independent button module compilation passed.
- Both palettes passed 4.5:1 text/button contrast and 3:1 border/focus contrast
  against their intended backgrounds, including hover colors.
- Light/dark checks at 320, 768, and 1440px found no horizontal overflow.
  Hero and selector focus screenshots inspected; footer selector preserves the
  existing hero composition. Supplied artwork remains unchanged.
- T04 remains uncommitted for maintainer visual review. No dependencies or
  release-version changes; no commit, merge, push, or tag.

### T05 verification — 2026-10-30

- Existing Sass build and six-width layout/interaction/customization/contrast
  checks passed without browser errors or Sass warnings. Toolkit CSS unchanged.
- Original SVG path attributes, IDs, dimensions, and viewBox verified unchanged.
  Decorative artwork is hidden from accessibility APIs and ignores pointer input.
- Focused Edge checks passed 36 combinations of light/dark themes, 16/20px root
  sizes, and viewport widths from 320 through 2560px: proportional SVG sizing,
  Grid centering, matching border/fill, seamless baseline, and no horizontal overflow.
- Existing selector and live system theme switching update the artwork without
  additional JavaScript. A narrower intrinsic-width image also centers correctly.
- Desktop reference-size, tablet, and mobile screenshots visually inspected.
  Skull sizing, positioning, and stacking remain unchanged, including the desktop
  thruster over the lower skyline; dark background remains #171c27.
- Active cloud styling/references removed; prior asset files retained to preserve
  existing work. No dependencies or version changes. Changes remain uncommitted
  for maintainer visual review; no merge, push, or tag.

### T06 verification — historical

T06's checks passed on 2026-10-30. The feature was subsequently withdrawn by T07;
its prior contrast results and usage documentation no longer describe the demo.

### T07 verification — 2026-10-31

- Existing Sass build and whitespace checks passed. Removed feature references
  from toolkit/demo SCSS, compiled CSS, HTML, and README; roadmap retains history.
- Focused Edge checks passed both palettes, enabled button/link hover states,
  theme select, visible keyboard focus, saved preference reload, and live system
  switching. Minimum tested text/link contrast was 5.62:1; border/focus 3.67:1.
- Eight viewport/theme combinations (320, 768, 1440, 2545px) passed centering,
  no horizontal overflow, normal typography colors, and the preserved 4px border.
- Skull file hash and SVG/hero markup verified unchanged. Existing light palette
  preserved, with no gradient in light mode; exactly one radial gradient in dark.
- Desktop/tablet dark controls and hero screenshots inspected. No browser errors.
- Existing uncommitted work preserved except the requested T06 removal. No new
  dependencies or JavaScript, version change, commit, merge, push, or tag.

### T07 finalization — 2026-10-31

- Maintainer approved the final implementation for commit and local master merge.
- Preserved final primary #82B5D0, secondary #AABDC8, and the authored -1px
  building seam adjustment and comment. T06 styles remain removed.
- Final build and whitespace checks passed; prior successful focused color and
  interaction checks retained without repeating the suite.

### T08 verification — 2026-10-31

- Sass build and whitespace checks passed. Focused Edge checks passed light/dark
  text and button contrast, hover, keyboard focus, theme persistence/system
  switching, and eight viewport/theme combinations without horizontal overflow.
- Minimum tested normal text/link contrast: 5.24:1; border/focus: 3.67:1.
  Secondary uses a separate semantic foreground to preserve primary white text
  and the existing dark secondary foreground. No artwork or layout changes.
- Maintainer approved T08 for commit and local master integration; release remains 0.1.0.
- Final compiled-CSS consistency and whitespace checks passed; previously successful
  browser/contrast checks were not repeated.

### T10 verification — 2026-11-01

- Sass build and all three README Sass examples compiled successfully.
- Toolkit CSS is unchanged. Demo declarations, media queries, and keyframes
  match the prior output after accounting for the explicit hero description
  class; regrouping preserves cascade precedence and reduced-motion overrides.
- Both inline SVGs are unchanged, including geometry and IDs. All 19 local
  asset/stylesheet/script/section/form destinations resolve; IDs are unique.
- All nine assets are present, tracked, and included by standard git archive.
  No repository omission was found; the earlier uploaded archive was not
  available to determine its exact export failure.
- Setup guide now targets the rendered GitHub README; destination verified.
- Manual browser review remains: revised copy wrapping at narrow widths,
  light/dark hero composition, keyboard focus, and reduced-motion rendering.
  Responsive and motion CSS were compared statically; no browser run in T10.
- Release remains 0.1.0; changes are uncommitted.

### T11 verification — 2026-11-01

- Existing Sass build passed without warnings or errors. All four default
  breakpoint queries, individual token overrides, full map overrides, README
  Sass examples, and unknown-name errors passed focused compilation checks.
- Generated toolkit/demo CSS differs only in the intended 72rem to 64rem
  media-query transition. The breakpoint mixin, container maximum, artwork,
  animations, and other declarations are unchanged.
- Focused Edge checks passed 56 combinations: light/dark, 16/20px root sizes,
  and widths 320, 375, 639, 640, 767, 768, 1023, 1024, 1025, 1151, 1152,
  1279, 1280, and 1440px. No horizontal overflow; grid columns, container
  padding/maximum, section spacing, and hero transitions match expectations.
- Boundary screenshots inspected at 1023/1024px in light mode and 1025px in
  dark mode. At 1024px the container padding increases from 16px to 32px and
  hero minimum height from 600px to 680px (at a 16px root), as intended.
  Maintainer visual acceptance of this earlier desktop transition remains pending.
- Existing README edits and settings whitespace preserved. Release remains
  0.1.0; changes are uncommitted. No merge, push, tag, or dependency changes.

### T11 finalization — 2026-11-01

- Maintainer approved T11 for commit and integration into local master.
- Preserved manual SCSS comment spacing and existing README edits. No functional
  code changed since verification; successful build and focused checks retained
  without repetition. T11 is DONE; release remains 0.1.0.
- No push, tag, branch deletion, or dependency changes.
