/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: [
      "arweave.net",
      "www.arweave.net",
      "howrare.is",
      "www.howrare.is",
      "media.howrare.is",
      "www.media.howrare.is",
      "assets.kaijucards.io",
      "www.assets.kaijucards.io",
    ],
  },
};

module.exports = nextConfig;
