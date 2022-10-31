/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: [
      "platform-lookaside.fbsbx.com",
      "cdn.mos.cms.futurecdn.net",
    ],
  },
}

module.exports = nextConfig
