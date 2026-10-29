# Roadmap

## Release 0.1.0

- **T01 — SKELEKRON UI foundation refinement:** Implemented and focused verification complete;
  awaiting maintainer review.
  Explicit skelekron.scss master, root Sass settings, rem() and named breakpoint
  tools, grouped base/layout/component partials, skel- naming, explicit BEM
  modifiers, static demo, and usage documentation. Release remains 0.1.0.
- **T02 — Modal / lightbox:** Next; not started. Scope and accessibility behavior
  will be defined in a separate task.
- **T03 — SKELEKRON Theme & Hero: COMPLETE.** White/navy foundation palette,
  electric-blue controls and labels, responsive skull/cloud image layers, and
  demo-only hero composition implemented on `codex/0.1.0-t03-theme-hero`.
  Visually accepted by the maintainer on 2026-10-29; release remains 0.1.0.

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
