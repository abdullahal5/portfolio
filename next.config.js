/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "my-awesome-react-project.netlify.app"
      },
      {
        protocol: "https",
        hostname: "i.ibb.co"
      },
    ],
  },
};

module.exports = nextConfig
