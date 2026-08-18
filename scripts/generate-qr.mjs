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
 *   slbbc-app-qr.svg        vector QR, 25 mm — give this to the printer
 *   slbbc-app-qr.png        2048 px raster, for slide decks / WhatsApp previews
 *   slbbc-app-card-back.svg 40 x 56 mm ready-to-place card-back block with caption
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "public/qr");

// Print constants — see README-qr.md for why these values.
const ERROR_CORRECTION = "Q"; // 25% recovery: survives lamination scratches and card wear
const MARGIN_MODULES = 4; // mandatory quiet zone
const QR_SIZE_MM = 25; // 25 mm scans reliably on budget Android cameras
const PNG_PIXELS = 2048;

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

function cardBackSvg(qr, url) {
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
<svg xmlns="http://www.w3.org/2000/svg" width="${W}mm" height="${H}mm" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">
  <rect width="${W}" height="${H}" fill="#FFFFFF"/>
  <text x="${W / 2}" y="4.6" font-family="${font}" font-size="2.6" font-weight="700" letter-spacing="0.15" text-anchor="middle" fill="#0B2E4F">SCAN TO INSTALL</text>
  <text x="${W / 2}" y="8.4" font-family="${font}" font-size="2.9" font-weight="700" text-anchor="middle" fill="#0B2E4F">SLBBC APP</text>
  <g transform="translate(${qrLeft} ${qrTop}) scale(${scale})">
    <rect width="${total}" height="${total}" fill="#FFFFFF"/>
    <g transform="translate(${MARGIN_MODULES} ${MARGIN_MODULES})">
      <path d="${modulesToPath(qr)}" fill="#000000"/>
    </g>
  </g>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 4.2}" font-family="${font}" font-size="2.7" font-weight="700" text-anchor="middle" fill="#000000">${label}</text>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 8}" font-family="${font}" font-size="2.1" text-anchor="middle" fill="#52606D">Open your phone camera and scan</text>
  <text x="${W / 2}" y="${qrTop + QR_SIZE_MM + 11.2}" font-family="${font}" font-size="2.1" text-anchor="middle" fill="#52606D">Android phones only</text>
</svg>
`;
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

  console.log(`QR assets generated in public/qr/

  Encoded URL      ${url}
  Version          ${qr.version} (${qr.modules.size} x ${qr.modules.size} modules)
  Error correction ${ERROR_CORRECTION} (25% recovery)
  Print size       ${QR_SIZE_MM} mm with a ${MARGIN_MODULES}-module quiet zone

  slbbc-app-qr.svg         vector QR for the printer
  slbbc-app-card-back.svg  40 x 56 mm card-back block with caption
  slbbc-app-qr.png         ${PNG_PIXELS} px raster
`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
