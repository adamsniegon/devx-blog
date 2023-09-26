/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        additionalData: `@import "app/_breakpoints.scss";`
    },
    images: {
        domains: ["randomuser.me", "picsum.photos"],
    }
}

module.exports = nextConfig
