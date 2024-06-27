/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd28yx2zopyx2ad.cloudfront.net',
            },
        ],
    },

}

module.exports = nextConfig
