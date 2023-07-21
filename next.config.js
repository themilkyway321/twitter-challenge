const debug = process.env.NODE_ENV !== "production";
const repository = "twitter-challenge";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true, 
};

module.exports = nextConfig;