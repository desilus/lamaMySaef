/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{
            protocol: "https",
            hostname:"www.universita.it"
        }]
    }
}

module.exports = nextConfig
