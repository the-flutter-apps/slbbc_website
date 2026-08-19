/**
 * Generates print-ready QR assets for the SLBBC attendance card.
 *
 *   npm run qr
 *
 * The encoded URL comes from content/app-download.ts (appDownload.qrTarget) and must
 * never change once cards are printed — the destination is changed on the website,
 * not on the card.
 *
 * Output (public/qr/):
 *   slbbc-app-qr.svg             vector QR, 25 mm, error correction Q
 *   slbbc-app-qr.png             2048 px raster
 *   slbbc-app-card-back.svg      40 x 56 mm card-back block with caption
 *   slbbc-app-qr-logo.svg        same QR with the SLB mark centred, error correction H
 *   slbbc-app-qr-logo.png        2048 px raster of the logo version
 *   slbbc-app-card-back-logo.svg card-back block using the logo version
 *
 * The logo covers data modules, so the logo variant is encoded at error correction H
 * (30% recovery) instead of Q. That costs a version bump (more, smaller modules), which
 * is why the plain version stays the recommended artwork for the 25 mm printed card.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import { PNG } from "pngjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/qr");

// Print constants — see README-qr.md for why these values.
const ERROR_CORRECTION = "Q"; // 25% recovery: survives lamination scratches and card wear
const MARGIN_MODULES = 4; // mandatory quiet zone
const QR_SIZE_MM = 25; // 25 mm scans reliably on budget Android cameras
const PNG_PIXELS = 2048;

// Logo variant. The knockout is the white square punched out of the code; the mark sits
// inside it. Keeping the knockout at 22% of the code width occludes ~4.8% of the modules,
// comfortably inside what error correction H can rebuild.
const LOGO_ERROR_CORRECTION = "H"; // 30% recovery — required once modules are covered
const KNOCKOUT_RATIO = 0.22;
const LOGO_RATIO = 0.17;

/** Read qrTarget out of the TS config without pulling in a TS toolchain. */
async function readQrTarget() {
  const src = await readFile(resolve(root, "content/app-download.ts"), "utf8");
  const site = await readFile(resolve(root, "content/site.ts"), "utf8");
  const baseUrl = site.match(/url:\s*"([^"]+)"/)?.[1];
  const target = src.match(/qrTarget:\s*`([^`]+)`/)?.[1];
  if (!baseUrl || !target) {
    throw new Error("Could not read qrTarget from content/app-download.ts");
  }
  return target.replace("${siteConfig.url}", baseUrl);
}

/** Build an SVG path covering every dark module, in module units. */
function modulesToPath(qr) {
  const size = qr.modules.size;
  const data = qr.modules.data;
  const parts = [];
  for (let y = 0; y < size; y++) {
    let runStart = -1;
    for (let x = 0; x <= size; x++) {
      const dark = x < size && data[y * size + x] === 1;
      if (dark && runStart === -1) runStart = x;
      if (!dark && runStart !== -1) {
        parts.push(`M${runStart} ${y}h${x - runStart}v1h-${x - runStart}z`);
        runStart = -1;
      }
    }
  }
  return parts.join("");
}

function bareSvg(qr, sizeMm) {
  const total = qr.modules.size + MARGIN_MODULES * 2;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${sizeMm}mm" height="${sizeMm}mm" viewBox="0 0 ${total} ${total}" shape-rendering="crispEdges">
  <rect width="${total}" height="${total}" fill="#FFFFFF"/>
  <g transform="translate(${MARGIN_MODULES} ${MARGIN_MODULES})">
    <path d="${modulesToPath(qr)}" fill="#000000"/>
  </g>
</svg>
`;
}

function cardBackSvg(qr, url, logoDataUri) {
  const total = qr.modules.size + MARGIN_MODULES * 2;
  const W = 40;
  const H = 56;
  const qrTop = 12;
  const qrLeft = (W - QR_SIZE_MM) / 2;
  const scale = QR_SIZE_MM / total;
  const font = "Helvetica, Arial, sans-serif";
  const label = url.replace(/^https?:\/\//, "");

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- SLBBC attendance card - back side block. Actual size 40 x 56 mm. Do not scale below 90%. -->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">
  <rect width="${W}" height="${H}" fill="#FFFFFF"/>
  <text x="${W / 2}" y="4.6" font-family="${font}" font-size="2.6" font-weight="700" letter-spacing="0.15" text-anchor="middle" fill="#0B2E4F">SCAN TO INSTALL</text>
  <text x="${W / 2}" y="8.4" font-family="${font}" font-size="2.9" font-weight="700" text-anchor="middle" fill="#0B2E4F">SLBBC APP</text>
  <g transform="translate(${qrLeft} ${qrTop}) scale(${scale})">
    <rect width="${total}" height="${total}" fill="#FFFFFF"/>
    <g transform="translate(${MARGIN_MODULES} ${MARGIN_MODULES})">
      <path d="${modulesToPath(qr)}" fill="#000000"/>
    </g>
${logoDataUri ? `    <rect x="${(total - total * KNOCKOUT_RATIO) / 2}" y="${(total - total * KNOCKOUT_RATIO) / 2}" width="${total * KNOCKOUT_RATIO}" height="${total * KNOCKOUT_RATIO}" rx="${total * KNOCKOUT_RATIO * 0.14}" fill="#FFFFFF"/>
    <image x="${(total - total * LOGO_RATIO) / 2}" y="${(total - total * LOGO_RATIO) / 2}" width="${total * LOGO_RATIO}" height="${total * LOGO_RATIO}" xlink:href="${logoDataUri}" preserveAspectRatio="xMidYMid meet"/>` : ""}
  </g>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 4.2}" font-family="${font}" font-size="2.7" font-weight="700" text-anchor="middle" fill="#000000">${label}</text>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 8}" font-family="${font}" font-size="2.1" text-anchor="middle" fill="#52606D">Open your phone camera and scan</text>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 11.2}" font-family="${font}" font-size="2.1" text-anchor="middle" fill="#52606D">Android phones only</text>
</svg>
`;
}

/** Read the logo once, as a base64 data URI for SVG embedding plus raw pixels for PNG. */
async function loadLogo() {
  const buf = await readFile(resolve(root, "scripts/assets/logo-384.png"));
  return { dataUri: `data:image/png;base64,${buf.toString("base64")}`, png: PNG.sync.read(buf) };
}

/** QR SVG with a white knockout and the SLB mark centred. Units are modules. */
function logoSvg(qr, sizeMm, logoDataUri) {
  const total = qr.modules.size + MARGIN_MODULES * 2;
  const knock = total * KNOCKOUT_RATIO;
  const logo = total * LOGO_RATIO;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${sizeMm}mm" height="${sizeMm}mm" viewBox="0 0 ${total} ${total}">
  <rect width="${total}" height="${total}" fill="#FFFFFF"/>
  <g transform="translate(${MARGIN_MODULES} ${MARGIN_MODULES})" shape-rendering="crispEdges">
    <path d="${modulesToPath(qr)}" fill="#000000"/>
  </g>
  <rect x="${(total - knock) / 2}" y="${(total - knock) / 2}" width="${knock}" height="${knock}" rx="${knock * 0.14}" fill="#FFFFFF"/>
  <image x="${(total - logo) / 2}" y="${(total - logo) / 2}" width="${logo}" height="${logo}" xlink:href="${logoDataUri}" preserveAspectRatio="xMidYMid meet"/>
</svg>
`;
}

/** Composite the same design as a raster: modules, white knockout, area-averaged logo. */
function logoPng(qr, pixels, logoPng) {
  const total = qr.modules.size + MARGIN_MODULES * 2;
  const scale = pixels / total;
  const out = new PNG({ width: pixels, height: pixels });
  const size = qr.modules.size;
  const data = qr.modules.data;

  // modules
  for (let y = 0; y < pixels; y++) {
    for (let x = 0; x < pixels; x++) {
      const mx = Math.floor(x / scale) - MARGIN_MODULES;
      const my = Math.floor(y / scale) - MARGIN_MODULES;
      const dark =
        mx >= 0 && my >= 0 && mx < size && my < size && data[my * size + mx] === 1;
      const i = (y * pixels + x) << 2;
      const v = dark ? 0 : 255;
      out.data[i] = v;
      out.data[i + 1] = v;
      out.data[i + 2] = v;
      out.data[i + 3] = 255;
    }
  }

  // white knockout
  const knock = Math.round(pixels * KNOCKOUT_RATIO);
  const k0 = Math.round((pixels - knock) / 2);
  for (let y = k0; y < k0 + knock; y++) {
    for (let x = k0; x < k0 + knock; x++) {
      const i = (y * pixels + x) << 2;
      out.data[i] = out.data[i + 1] = out.data[i + 2] = 255;
    }
  }

  // logo, downscaled with a box filter so it stays clean
  const box = Math.round(pixels * LOGO_RATIO);
  const l0 = Math.round((pixels - box) / 2);
  const ratio = logoPng.width / box;
  for (let y = 0; y < box; y++) {
    for (let x = 0; x < box; x++) {
      const sx0 = Math.floor(x * ratio);
      const sy0 = Math.floor(y * ratio);
      const sx1 = Math.min(logoPng.width, Math.floor((x + 1) * ratio));
      const sy1 = Math.min(logoPng.height, Math.floor((y + 1) * ratio));
      let r = 0, g = 0, b = 0, n = 0;
      for (let sy = sy0; sy < sy1; sy++) {
        for (let sx = sx0; sx < sx1; sx++) {
          const si = (sy * logoPng.width + sx) << 2;
          r += logoPng.data[si];
          g += logoPng.data[si + 1];
          b += logoPng.data[si + 2];
          n++;
        }
      }
      if (!n) continue;
      const di = ((l0 + y) * pixels + (l0 + x)) << 2;
      out.data[di] = Math.round(r / n);
      out.data[di + 1] = Math.round(g / n);
      out.data[di + 2] = Math.round(b / n);
      out.data[di + 3] = 255;
    }
  }
  return PNG.sync.write(out);
}

async function main() {
  const url = await readQrTarget();
  await mkdir(outDir, { recursive: true });

  const qr = QRCode.create(url, { errorCorrectionLevel: ERROR_CORRECTION });

  await writeFile(resolve(outDir, "slbbc-app-qr.svg"), bareSvg(qr, QR_SIZE_MM), "utf8");
  await writeFile(resolve(outDir, "slbbc-app-card-back.svg"), cardBackSvg(qr, url), "utf8");
  await QRCode.toFile(resolve(outDir, "slbbc-app-qr.png"), url, {
    type: "png",
    errorCorrectionLevel: ERROR_CORRECTION,
    margin: MARGIN_MODULES,
    width: PNG_PIXELS,
    color: { dark: "#000000FF", light: "#FFFFFFFF" },
  });

  // Logo variant — higher error correction to absorb the covered modules.
  const logo = await loadLogo();
  const qrL = QRCode.create(url, { errorCorrectionLevel: LOGO_ERROR_CORRECTION });

  await writeFile(
    resolve(outDir, "slbbc-app-qr-logo.svg"),
    logoSvg(qrL, QR_SIZE_MM, logo.dataUri),
    "utf8"
  );
  await writeFile(
    resolve(outDir, "slbbc-app-card-back-logo.svg"),
    cardBackSvg(qrL, url, logo.dataUri),
    "utf8"
  );
  await writeFile(
    resolve(outDir, "slbbc-app-qr-logo.png"),
    logoPng(qrL, PNG_PIXELS, logo.png)
  );

  console.log(`QR assets generated in public/qr/

  Encoded URL   ${url}
  Print size    ${QR_SIZE_MM} mm with a ${MARGIN_MODULES}-module quiet zone

  Plain (recommended for the printed card)
    version ${qr.version} - ${qr.modules.size} x ${qr.modules.size} modules, error correction ${ERROR_CORRECTION}
    slbbc-app-qr.svg / .png, slbbc-app-card-back.svg

  Logo in centre
    version ${qrL.version} - ${qrL.modules.size} x ${qrL.modules.size} modules, error correction ${LOGO_ERROR_CORRECTION}
    knockout covers ${(KNOCKOUT_RATIO * KNOCKOUT_RATIO * 100).toFixed(1)}% of the code area
    slbbc-app-qr-logo.svg / .png, slbbc-app-card-back-logo.svg
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
