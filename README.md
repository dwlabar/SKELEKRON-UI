# SKELEKRON UI

A small HTML, CSS, and Sass foundation. **SKELEKRON** is the toolkit;
**SKELEKRON UI** is the project, in the `SKELEKRON-UI` repository. Release **0.1.0**.

## Install and compile

Use Node.js 20.19+ and npm (Node.js 24 is used for verification).

```sh
npm ci
npm run build
npm run watch
```

`build` compiles the two Sass entry points into `css/`. `watch` recompiles when
Sass files change; stop it with Ctrl+C. On PowerShell, use `npm.cmd` if script
execution policy blocks `npm.ps1`. Dart Sass is the only direct development
dependency. There is no JavaScript runtime or bundler.

Open `index.html` directly to view the demo. Generated CSS is intentionally kept
in the repository: a static host needs no Node.js. For GitHub Pages, publish the
repository root after the reviewed changes have been committed and pushed. All
demo URLs are relative, so repository subpaths work. Hosting is not configured
by this task.

## Use

Link only the toolkit CSS in your own page. `demo.css` is optional presentation
for this repository's demo.

```html
<link rel="stylesheet" href="css/skelekron.css">

<section class="skel-section" aria-labelledby="example-title">
  <div class="skel-container">
    <h2 id="example-title">Example section</h2>
    <div class="skel-grid" style="--skel-grid-columns: 2; --skel-grid-gap: 2rem;">
      <p>First column</p>
      <p>Second column</p>
    </div>
    <a class="skel-button skel-button--primary" href="details.html">View details</a>
  </div>
</section>
```

| Feature | API / default |
| --- | --- |
| Container | `.skel-container`, centered, maximum 72rem including padding |
| Narrow / fluid | Add `.skel-container--narrow` (44rem) or `.skel-container--fluid` |
| Local width | Set `--skel-container-max` on a container, e.g. `60rem` |
| Section | `.skel-section`, 2rem block padding; 3rem from 48rem |
| Grid | `.skel-grid`, one column below 48rem; three columns from 48rem |
| Grid columns | `--skel-grid-columns`: positive integer, applied from 48rem |
| Grid gutter | `--skel-grid-gap`: CSS gap value, including `0`; applies at all widths |
| Default gutter | 1rem below 48rem; 1.5rem from 48rem |
| Buttons | `.skel-button`, optionally with `--primary`, `--secondary`, or `--outline` modifiers |

Use full modifier names such as `skel-button--outline` alongside the base class.
Use links with real destinations for navigation/CTAs, and native `<button>`
elements for actions. Specify button `type`; native `disabled` is supported.
An anchor cannot be disabled with a `disabled` attribute. The demo includes a
working submit button, anchor destinations, and an unavailable native button.

The intentional globals are border-box sizing, body defaults, responsive images,
keyboard focus, headings, paragraphs, and links. Typography uses low-specificity
`:where()` selectors. Layout and buttons use `skel-` classes; no bare `section`,
`button`, or form-control styling is imposed. Layout and buttons can be loaded
independently through their Sass modules; buttons include their own focus style.

Images preserve their intrinsic aspect ratio and shrink to fit their container.
Provide useful `alt` text and intrinsic `width`/`height` attributes. Keep headings
in semantic order, and use the keyboard to check focus after customization.

## Customize

All configurable Sass defaults are in `scss/_settings.scss`, including
colors, font settings and heading sizes, spacing, breakpoints, containers, grid,
and button radius. Configure the module **before** loading any other toolkit
module. In a separate consumer entry (with `scss/` on the Sass load path), use:

```scss
@use "skelekron" with (
  $color-primary: #285943,
  $color-primary-hover: #1c402f,
  $breakpoints: (medium: 50rem, large: 72rem),
  $container-max: 68rem,
  $grid-columns: 2,
  $grid-gap: 1.25rem
);
```

Compile that consumer entry with `sass --load-path=scss your-entry.scss your-output.css`.
For this repository, run `npm run build` after changes. For a shared change affecting both the demo
and toolkit entry points, edit the defaults in `_settings.scss`. A `with` block
configures only its own compilation. CSS custom properties provide per-instance
container/grid overrides without recompiling. Custom properties inherit, so set
them explicitly on nested grids when different values are needed. Breakpoints
are Sass values because CSS custom properties cannot define media queries.

Keep text/background and focus colors accessible when changing the palette.
There are no generated utility classes, animation, or extra components.

## Light and dark themes

Without a theme attribute, CSS follows `prefers-color-scheme`, including live
system changes. No JavaScript is required. Set `<html data-skel-theme="light">`
or `<html data-skel-theme="dark">` to force a theme; remove the attribute to
return to System.

The optional `assets/demo-theme.js` provides the demo's System / Light / Dark
selector and saves manual choices under `skel-theme` in localStorage. If storage
is blocked, switching still works for the current page. Without JavaScript,
the selector stays hidden and CSS follows the system preference.

### Sass colors (recompile)

Existing `$color-…` settings configure light colors; `$color-dark-…` settings
configure dark colors. All defaults live in `scss/_settings.scss`:

```scss
@use "skelekron" with (
  $color-primary: #285943,
  $color-primary-hover: #1c402f,
  $color-focus: #285943,
  $color-dark-primary: #9bd5b4,
  $color-dark-primary-hover: #bce8ce,
  $color-dark-focus: #9bd5b4
);
```

Compile this consumer entry as described above, or edit the settings defaults
and run `npm run build`. Non-color Sass configuration is unchanged.

### Compiled CSS colors (no recompilation)

Load overrides **after** the toolkit CSS. Cover automatic and manual modes:

```css
:root,
:root[data-skel-theme="light"] {
  --skel-color-primary: #285943;
  --skel-color-primary-hover: #1c402f;
  --skel-color-focus: #285943;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-skel-theme="light"]):not([data-skel-theme="dark"]) {
    --skel-color-primary: #9bd5b4;
    --skel-color-primary-hover: #bce8ce;
    --skel-color-focus: #9bd5b4;
  }
}

:root[data-skel-theme="dark"] {
  --skel-color-primary: #9bd5b4;
  --skel-color-primary-hover: #bce8ce;
  --skel-color-focus: #9bd5b4;
}
```

Semantic properties use `--skel-color-` followed by `text`, `background`,
`surface`, `border`, `primary`, `primary-hover`, `secondary`, `secondary-hover`,
`on-accent`, or `focus`. Check text, button, hover, border, and keyboard focus
contrast after customizing either palette.

Color-consuming base and button modules load the theme module automatically,
so independent button usage retains both palettes. Sass emits the module once
per compilation. Layout-only modules remain independent of theme colors.

## Structure and reference

- `scss/_settings.scss`: all configurable defaults (`!default`).
- `scss/_theme.scss`: semantic colors and automatic/manual theme selection.
- `scss/tools/`: `rem()` and the map-based `breakpoint()` mixin; no emitted CSS.
- `scss/base/`: global defaults and low-specificity typography.
- `scss/layout/`: container, section, and native grid partials.
- `scss/components/`: buttons and their explicit BEM modifiers.
- `scss/skelekron.scss`: distributable CSS entry point.
- `scss/demo.scss`: demo-only presentation.
- `css/`: generated static CSS; keep this in sync with Sass.
- `assets/layout-study.svg`: original geometric image for the image demo.

The local historical Skeletor source (`../skeletor/src/styles/`) was reviewed for architecture: centralized
settings, grouped partials, configurable layout, and base-plus-modifier buttons.
This foundation is independently implemented. No historical source, branding,
fonts, artwork, vendor code, or scripts are included. Native Grid and gap replace
the historical calculated column widths; `@use`/`@forward` replace global imports.

## Sass tools and conventions

The master entry explicitly lists every CSS-producing module. Comment out an
optional layout or component `@use` to omit it; there are no `_index.scss`
wrappers. Settings and tools are forwarded by the master for consumer use.
For independent modules, configure settings first:

```scss
@use "settings" with (
  $breakpoints: (medium: 48rem, large: 72rem),
  $grid-columns: 2
);
@use "tools/rem" as *;
@use "tools/breakpoint" as *;
@use "layout/grid";
@use "components/buttons";

.example {
  padding: rem(24); // 1.5rem; rem(24px) works too.

  @include breakpoint(medium) {
    padding: rem(32);
  }
}
```

`rem()` uses `sass:math` with a 16px design baseline, not the body font size.
It accepts unitless pixel measurements or px, and rejects other units. No html
font-size override is emitted: rem values scale with the reader's browser root
font size. Keep borders in px where a fixed thin line is intended.

`breakpoint(name)` emits a min-width query from `$breakpoints` and reports
unknown names as Sass errors. Defaults remain medium = 48rem and large = 72rem.
The map can add or replace named thresholds; retain medium and large when
loading the existing layout partials. The original `$breakpoint-medium` and
`$breakpoint-large` defaults also remain configurable and seed the default map.
There is no external breakpoint dependency.

Use 2-space indentation, `// ===` dividers for major sections, and `// ---`
dividers for subsections, modifiers, and states. Keep BEM blocks, elements
(`skel-block__element`), and modifiers (`skel-block--modifier`) explicit.
Nest pseudo-classes, pseudo-elements, and local breakpoints when helpful.
Use `:where()` for low-specificity global typography, conventional classes
for components, and `--skel-` for toolkit CSS custom properties. Demo-only
`demo-` classes remain separate. Avoid unnecessary specificity and `!important`.

See `ROADMAP.md` for actual task and verification status.
