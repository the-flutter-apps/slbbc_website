# Attendance Card QR Code

The back of the SLBBC employee attendance card carries a QR code that a new joinee
scans with their phone camera to install the SLBBC Android app.

## The core idea

The QR code **does not contain the app's download link**. It contains a fixed URL on
this website:

```
https://slbbc.in/app
```

That page decides where to send the employee. Cards are printed once; the destination
can change as often as needed.

```
QR on card  ->  https://slbbc.in/app  ->  today:  "launching soon" notice
                (never changes)            later:  hosted APK + install steps
                                           live:   Google Play listing
```

Without this indirection, publishing the app under a different package name — or
switching distribution method — would make every printed card useless.

## Changing the destination

Everything is driven by `status` in [`content/app-download.ts`](../content/app-download.ts):

| `status`        | What `/app` shows                                                        |
| --------------- | ------------------------------------------------------------------------ |
| `"coming-soon"` | Notice that the app is not published yet, plus who to ask. **Current.**  |
| `"apk"`         | Download button for `public/downloads/`, with sideload instructions.      |
| `"play"`        | Android visitors are auto-forwarded to the Play listing after 2 seconds.  |

Change the one value, commit, push. Vercel deploys and every printed card starts
behaving differently within a minute.

Also set `packageName` to the app's real Android package id **before printing** is not
required — but it must be correct before switching `status` to `"play"`, since
`playUrl` is derived from it.

## Recommended path to launch

Prefer **Google Play Open Testing** over hosting an APK. It gives a real
`play.google.com` link before public launch, installs without security warnings, and
becomes the production listing later — no change to `/app` needed beyond `status`.

Use `status: "apk"` only if Play is not an option. Sideloading requires each employee to
enable "Install unknown apps", which generates support calls.

## Regenerating the QR assets

```bash
npm run qr
```

Writes to `public/qr/`:

| File                      | Use                                                          |
| ------------------------- | ------------------------------------------------------------ |
| `slbbc-app-card-back.svg` | 40 x 56 mm ready-to-place card-back block. **Give this to the printer.** |
| `slbbc-app-qr.svg`        | Bare 25 mm vector QR, if the designer lays out the caption.   |
| `slbbc-app-qr.png`        | 2048 px raster. Slides and WhatsApp only — never for print.   |

Preview them in the browser at `/app/qr` (noindex, and disallowed in `robots.txt`).

## Print specification

These values are already baked into the generated files. Confirm the printer keeps them.

- **Size:** 25 mm x 25 mm minimum. Bigger is safer — budget Android cameras struggle below 20 mm.
- **Quiet zone:** clear white margin of 4 modules on all sides. Nothing may touch the QR.
- **Colour:** pure black on pure white. Never inverted, never over a photo or tint.
- **Error correction:** level Q (25% recovery) — survives scratches and card wear.
- **Lamination:** matte. Gloss reflects tubelight and defeats the camera.
- **File format:** supply SVG or PDF. A JPEG prints with blurred module edges and fails to scan.
- **Caption:** keep the printed text `slbbc.in/app` below the code. Some budget phones do not
  auto-detect QR codes in the stock camera, and a typeable URL is the fallback.

The encoded URL is short by design, which keeps the code at version 2 (25 x 25 modules).
A sparse code scans far more reliably at small print sizes than a dense one.

**Before the full print run:** print one card and scan it with several phones — including the
cheapest Android you can find — under normal workplace lighting.

## Adding a local-language line

The generated card-back block is English only, deliberately: a Telugu or Hindi line in the
SVG depends on the printer having a Devanagari or Telugu font, and a missing font silently
prints boxes. Add that line in the card design file where the font is guaranteed, or ask the
printer to outline the text.
