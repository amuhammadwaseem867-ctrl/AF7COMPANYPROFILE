const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(process.cwd(), "public");

const folders = [
  "products",
  "applications",
  "manufacturing",
  "quality",
  "customization",
  "packaging",
];

const files = [
  "hero.webp",
  "af7logowhite.svg",
];

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    return;
  }

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  try {
    const metadata = await sharp(filePath).metadata();

    let width = metadata.width || 1600;

    // Keep images reasonably sized for web use
    if (width > 1920) {
      width = 1920;
    }

    await sharp(filePath)
      .resize({
        width,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        effort: 5,
      })
      .toFile(outputPath);

    const originalSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(outputPath).size;

    const saved = Math.max(
      0,
      ((originalSize - newSize) / originalSize) * 100
    );

    console.log(
      `${path.relative(root, filePath)} → ${path.basename(outputPath)} | ${saved.toFixed(1)}% smaller`
    );
  } catch (error) {
    console.error(`Failed: ${filePath}`);
    console.error(error.message);
  }
}

async function scanFolder(folder) {
  const folderPath = path.join(root, folder);

  if (!fs.existsSync(folderPath)) {
    console.log(`Skipping missing folder: ${folder}`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    if (fs.statSync(filePath).isFile()) {
      await processImage(filePath);
    }
  }
}

async function main() {
  console.log("\nAF7 IMAGE OPTIMIZATION\n");

  for (const folder of folders) {
    await scanFolder(folder);
  }

  for (const file of files) {
    const filePath = path.join(root, file);

    if (fs.existsSync(filePath)) {
      await processImage(filePath);
    }
  }

  console.log("\nOptimization complete.\n");
}

main();
