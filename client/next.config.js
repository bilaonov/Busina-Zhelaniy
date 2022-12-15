/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    experimental: {
        newNextLinkBehavior: false,
    },
    images: {
        domains: ['cdn.sanity.io'],
        formats: ['image/avif', 'image/webp'],
    },
}

module.exports = nextConfig
