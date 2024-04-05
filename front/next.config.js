/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@gcba/reactobelisco"],
  webpack: (config) => {
    config.resolve.extensionAlias = {
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
      ".cjs": [".cts", ".cjs"],
    };
    return config;
  },
};

const withTM = require("next-transpile-modules")();

module.exports = withTM(nextConfig);
