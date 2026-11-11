/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  }, async redirects() {
    return [
      {
        source: "/",
        destination: "/en",
        permanent: false,
      }
    ];
  }
};

export default nextConfig;
