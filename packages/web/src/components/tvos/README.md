# tvOS style

An Apple TV (tvOS 26/27) look for the AIOStreams web app: a full-screen hero with page dots, rows of cards
that lift when focused, a detail page laid out like the Apple TV app's, the Apple TV app's sidebar,
Liquid Glass, and the app's own player restyled as Apple's. It is a setting: **Settings → Theme → Interface**
(tvOS, the default here, or AIOStreams), kept per device. Everything else is the app's own: catalogs,
streams, versions, the player, watch together, downloads, playlists…

It runs wherever the web app does: the browser, the desktop app (Mac, Windows, Linux), Android and the TVs
(LG webOS, Samsung Tizen), and was tuned on an LG C4. It is in English and French, following the app's language.

## Using it

Build the app as usual; the style comes with it. For the TVs and the desktop app, the standalone build:

```sh
pnpm install
pnpm -F @aiostreams/core build
pnpm -F @aiostreams/web build:standalone     # packages/web/dist-standalone
pnpm -F @aiostreams/smart-tv build:webos     # an .ipk for LG TVs
```

On a Mac, [tvOS for the Mac](https://github.com/JinbeiStudio/tvos-mac) adds the Magic Remote, an app switcher
and Control Center around it.

## How it is made

So that AIOStreams updates merge cleanly, the style is almost all in this folder, and the app's own files
change by a few lines only:

- `layout.tsx` replaces the app's layout when the style is on (`components/layout.tsx` picks it), and
  `routes.tsx` shows the tvOS pages in place of the app's: home, title, person, search, Discover, library,
  calendar and history. Every other page (settings, the player…) is the app's own.
- `tvos.css` imports the look from `styles/`, in order. Much of it restyles the app's components through
  the `data-ui` / `data-name` hooks the app provides for custom CSS, and its `UI-*` class names.
- `i18n.ts` holds the style's own words; the app's are in its catalogs.
- The app's files touched: `lib/settings.ts` (the setting), `pages/settings/theme.tsx` (its picker),
  `main.tsx` and `lib/tvos-style.ts` (marking the page before it draws), `lib/session.tsx` (asking who's
  watching, as tvOS does), and a few `export`s in `pages/` reused here.

After an update, look for renamed `data-ui` / `data-name` values the CSS relies on, and for changes to
the pages this folder rewrites.
