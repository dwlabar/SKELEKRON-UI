# SKELEKRON UI

SKELEKRON is a small CSS toolkit for building responsive websites. It covers the basics: typography, containers, grids, buttons, and light/dark themes.

Use it with plain HTML or your favorite framework. No JavaScript required. The machine likes to keep things simple.

## Get started

Copy `css/skelekron.css` into your project and add it to your page:

```html
<link rel="stylesheet" href="css/skelekron.css">
```

That's it. Here's a section using the container, grid, and button styles:

```html
<section class="skel-section">
  <div class="skel-container">
    <h2>Systems online</h2>
    <div class="skel-grid" style="--skel-grid-columns: 2;">
      <p>First column</p>
      <p>Second column</p>
    </div>
    <button class="skel-button skel-button--primary" type="button">Engage</button>
  </div>
</section>
```

The button is styled, not scripted. Add your own action when you need one.

Open `index.html` to see the demo. Its artwork, animations, and `css/demo.css` are separate from the toolkit. The skull is not a dependency.

## What's included

| Feature | How to use it |
| --- | --- |
| Typography & images | Readable default text, headings, links, and responsive images. |
| Containers | `.skel-container` centers content; `.skel-container--narrow` and `.skel-container--fluid` change its width. |
| Sections | `.skel-section` adds responsive vertical spacing. |
| Grid | `.skel-grid` stacks on small screens and uses three columns by default on larger screens. |
| Buttons | `.skel-button` with `.skel-button--primary`, `.skel-button--secondary`, or `.skel-button--outline`. |
| Themes | Light and dark colors, automatically matched to the visitor's system preference. |

Change desktop grid columns with `--skel-grid-columns`, spacing with `--skel-grid-gap`, or container width with `--skel-container-max`. Grids switch to multiple columns at `md` (`48rem` / 768px by default).

## Customize it

All the main settings live in `scss/_settings.scss`: colors, fonts, spacing, breakpoints, layout widths, and button radius.

To rebuild the CSS after changing Sass, install Node.js and npm, then run from
the repository root:

```sh
npm ci
npm run build
```

Run `npm ci` once after cloning (and again when the lockfile changes). Use
`npm run watch` to automatically rebuild as you work. The compiled CSS is ready
to use without Node.js or npm.

You can also configure SKELEKRON from your own Sass file:

```scss
@use "skelekron" with (
  $container-max: 68rem,
  $grid-columns: 2,
  $button-radius: 0
);
```

Compile it with `npx sass --load-path=scss your-entry.scss your-output.css`. Configure settings before loading other SKELEKRON modules.

### Responsive breakpoints

| Name | Sass token | Default |
| --- | --- | --- |
| `sm` | `$breakpoint-small` | `40rem` (640px) |
| `md` | `$breakpoint-medium` | `48rem` (768px) |
| `lg` | `$breakpoint-large` | `64rem` (1024px) |
| `xl` | `$breakpoint-xlarge` | `80rem` (1280px) |

Pixel equivalents assume a 16px browser default font size. Breakpoints are
configurable Sass values, not runtime CSS custom properties. Each token and the
central `$breakpoints` map use `!default`; configure them before loading modules
and rebuild the CSS. Individual token overrides flow into the default map.

For example, in your own entry file:

```scss
@use "skelekron" with (
  $breakpoint-large: 66rem
);

.project-panel {
  @include skelekron.breakpoint(lg) {
    padding: 2rem;
  }
}
```

Components should use only the breakpoints they need. Grid columns, section
spacing, and the demo hero's split composition use `md`. Container padding and
the taller demo hero use `lg`. The `sm` and `xl` sizes are available without
adding extra transitions. The default container maximum remains `72rem` (1152px).

### Light and dark themes

SKELEKRON follows the visitor's system setting by default. To choose a theme yourself, set an attribute on `<html>`:

```html
<html data-skel-theme="dark">
```

Use `light` for light mode or remove the attribute to follow the system again. The demo includes an optional JavaScript theme switcher, but the toolkit doesn't need it.

Edit both light and dark colors in `_settings.scss` to customize the palettes. The generated CSS also exposes `--skel-color-*` properties for CSS overrides.

## Project structure

```text
scss/skelekron.scss   Toolkit entry point
scss/_settings.scss   Colors, sizes, and other defaults
scss/_theme.scss      Light and dark theme values
scss/base/            Global styles and typography
scss/layout/          Containers, sections, and grid
scss/components/      Buttons
scss/tools/           Sass helpers: rem() and breakpoint()
scss/demo/            Demo-only artwork and effects
```

SKELEKRON uses modern Sass modules, semantic HTML, and `skel-` class names. Its layout and button styles can be included independently. There are no JavaScript components or animation utilities in this release.

Inspired by my original Skeletor system, rebuilt independently with modern Sass. See [ROADMAP.md](ROADMAP.md) for what's next.

## License

Code and documentation are licensed under the [MIT License](LICENSE).
Original demo artwork, including embedded SVG artwork, is excluded from the
MIT License. Copyright 2026 David LaBar. All rights reserved for that artwork.
