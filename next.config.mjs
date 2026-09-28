/** @type {import('next').NextConfig} */
const nextConfig = {
  // All source assets are already optimised WebP/SVG; serving them directly
  // avoids runtime image-optimizer stalls (long AVIF encodes on the hero).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
