/** @type {import('next').NextConfig} */
const nextConfig = {
 images:{
    remotePatterns:[
        {
            protocol:"https",
            hostname:"images.unsplash.com"

        },
        {
            protocol:"https",
            hostname:"m.media-amazon.com"
        },
        {
            protocol:"https",
            hostname:"img.freepik.com"

        }
    ]
 }
}

module.exports = nextConfig
