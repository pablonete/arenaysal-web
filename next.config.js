/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/arenaysal-web",
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
