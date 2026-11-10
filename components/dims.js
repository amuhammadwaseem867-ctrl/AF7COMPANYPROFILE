// Intrinsic sizes of photos, so frames match each image and nothing is cropped.
export const DIMS = {
  "/manufacturing/11.webp": [
    1080,
    1080
  ],
  "/manufacturing/14.webp": [
    1080,
    1080
  ],
  "/manufacturing/6.webp": [
    1080,
    1080
  ],
  "/manufacturing/7.webp": [
    1080,
    1080
  ],
  "/manufacturing/9.webp": [
    1080,
    1350
  ],
  "/manufacturing/IMG_1869.JPG.jpeg": [
    6000,
    4000
  ],
  "/manufacturing/IMG_2105 (1).JPG.jpeg": [
    6000,
    4000
  ],
  "/manufacturing/assembly-machine.webp": [
    1536,
    1024
  ],
  "/manufacturing/factory.webp": [
    1920,
    2511
  ],
  "/manufacturing/machinery.webp": [
    1920,
    1280
  ],
  "/manufacturing/plating-line.webp": [
    1800,
    1200
  ],
  "/manufacturing/production.webp": [
    1280,
    1920
  ],
  "/packaging/AF7_Carton_Mockup_Detail_Logo.webp": [
    640,
    700
  ],
  "/packaging/box-stack.webp": [
    1920,
    1440
  ],
  "/packaging/corrugated-box.webp": [
    1920,
    1440
  ],
  "/packaging/lld-bag.webp": [
    1920,
    1358
  ],
  "/quality/detail.webp": [
    1920,
    1280
  ],
  "/quality/inspection.webp": [
    1280,
    1920
  ],
  "/quality/slider-check.webp": [
    1920,
    1280
  ],
  "/quality/zipper-check.webp": [
    1280,
    1920
  ]
};

export const ratio = (src) => {
  const d = DIMS[src];
  return d ? `${d[0]} / ${d[1]}` : "4 / 3";
};
