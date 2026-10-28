# Roadmap

## Release 0.1.0

- **T01 — SKELEKRON UI foundation refinement:** Implemented and focused verification complete;
  awaiting maintainer review.
  Explicit skelekron.scss master, root Sass settings, rem() and named breakpoint
  tools, grouped base/layout/component partials, skel- naming, explicit BEM
  modifiers, static demo, and usage documentation. Release remains 0.1.0.
- **T02 — Modal / lightbox:** Next; not started. Scope and accessibility behavior
  will be defined in a separate task.

T01 changes remain uncommitted for review. No merge, push, tag, publication, or
release-version change is part of this task.

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
