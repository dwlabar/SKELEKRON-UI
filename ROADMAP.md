# Roadmap

## Release 0.1.0

- **T01 — SKELEKRON UI foundation refinement:** Implemented and focused verification complete;
  awaiting maintainer review.
  Explicit skelekron.scss master, root Sass settings, rem() and named breakpoint
  tools, grouped base/layout/component partials, skel- naming, explicit BEM
  modifiers, static demo, and usage documentation. Release remains 0.1.0.
- **T02 — Modal / lightbox:** Backlog; not started. Scope and accessibility behavior
  will be defined in a separate task.
- **T03 — SKELEKRON Theme & Hero: COMPLETE.** White/navy foundation palette,
  electric-blue controls and labels, responsive skull/cloud image layers, and
  demo-only hero composition implemented on `codex/0.1.0-t03-theme-hero`.
  Visually accepted by the maintainer on 2026-10-29; release remains 0.1.0.

- **T04 — Light/Dark Theme Support: REVIEW.** Centralized Sass palettes, semantic
  CSS colors, system/manual selection, and an optional persistent demo selector
  implemented on `codex/0.1.0-t04-light-dark-themes`. Awaiting maintainer visual
  review; release remains 0.1.0.

- **T05 — Hero SVG & Layout Refinement: REVIEW.** Supplied buildings SVG inlined
  with original geometry and IDs, three demo-only theme colors, and a responsive
  Grid-centered artwork layer on `codex/0.1.0-t05-hero-svg`. Existing uncommitted
  T04 work preserved. Awaiting maintainer visual review; release remains 0.1.0.

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
Next: **0.1.0 public release preparation**.
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
