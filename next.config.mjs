/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URL:
      "mongodb+srv://reshmenila:UZP7nmtqqEzMPmnI@cluster0.gsngkhr.mongodb.net/project_management?retryWrites=true&w=majority",
    // BASE_URL: "http://localhost:3000/api",
    BASE_URL: "http://localhost:3000/api",
  },
  images: {
    domains: ["gw.alipayobjects.com"],
  },
};

export default nextConfig;
