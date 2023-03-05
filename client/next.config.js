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
    env: {
        BASE_URL: process.env.PUBLIC_URL,
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ID: process.env.SUPABASE_ID,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
    },
}

module.exports = nextConfig
