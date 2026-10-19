// Intrinsic sizes of photos, so frames match each image and nothing is cropped.
export const DIMS = {
  "/manufacturing/11.webp": [
    1080,
    1080
  ],
  "/manufacturing/13.webp": [
    1080,
    1195
  ],
  "/manufacturing/14.webp": [
    1080,
    1080
  ],
  "/manufacturing/5.webp": [
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
  "/manufacturing/factory.webp": [
    1920,
    2511
  ],
  "/manufacturing/machinery.webp": [
    1920,
    1280
  ],
  "/manufacturing/production.webp": [
    1280,
    1920
  ],
  "/packaging/box-stack.webp": [
    1920,
    1440
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
