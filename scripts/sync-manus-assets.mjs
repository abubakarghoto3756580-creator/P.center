/**
 * Downloads the image assets currently used by the website into client/public/manus-storage.
 * The local files are included in the Vite output, so external hosts can serve existing
 * /manus-storage/... paths without depending on Manus runtime storage at request time.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceBase = process.env.MANUS_ASSET_SOURCE ?? "https://amhospclinic-tgksi7tz.manus.space/manus-storage";
const outputDirectory = path.resolve("client/public/manus-storage");
const assetFiles = [
  "hero-clinical-specialist_78469ea4.png",
  "american-hospital-diagnostics_3f4dc105.png",
  "american-hospital-care-team_31188a6e.png",
  "american-hospital-appointment_5ddd1622.png",
  "appointment-physiotherapy-session-replacement_469357ee.png",
  "american-hospital-mark_4ba65579.png",
  "the-specialists-official-logo_65f45172.jpg",
  "whatsapp-official-mark_1c42a00b.png",
  "medgulf-official-logo_6bf1acb0.png",
  "malath-insurance-official-logo_91d7d0e2.png",
  "fahad-al-buqmi-transparent_ced7d8d9.png",
  "turki-majeed-transparent_94711bb4.png",
  "abdulaziz-al-shamali-transparent_7d8b99d1.png",
  "khaled-al-rubaie-transparent_01261db2.png",
  "mishari-al-otaibi-transparent_eaf4db88.png",
  "mohammed-al-ghali-transparent_796ef478.png",
  "service-orthopedic-musculoskeletal-replacement_e0b50bf9.png",
  "service-sports-injury-replacement_cb5f838f.png",
  "service-womens-health-replacement_25b6756d.png",
];

await mkdir(outputDirectory, { recursive: true });

for (const filename of assetFiles) {
  const sourceUrl = `${sourceBase}/${filename}`;
  const response = await fetch(sourceUrl, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Unable to download ${filename}: ${response.status} ${response.statusText}`);
  }

  await writeFile(path.join(outputDirectory, filename), Buffer.from(await response.arrayBuffer()));
  console.log(`Synced ${filename}`);
}
