import sharp from "sharp";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = "public";
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) return walk(p);
    if (!/\.(webp|jpe?g|svg)$/i.test(p)) return [];
    return [p];
  });

for (const file of walk(root)) {
  try {
    if (file.endsWith(".svg")) {
      console.log(file, "svg");
      continue;
    }
    const m = await sharp(file).metadata();
    console.log(file, m.width + "x" + m.height);
  } catch (e) {
    console.log(file, "ERR", e.message);
  }
}
