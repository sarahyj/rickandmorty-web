require("dotenv").config();
const path = require("path");
const withImages = require("next-images");

module.exports = withImages({
  target: "serverless",
  env: {
    API_URL: process.env.API_URL,
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };

    return config;
  },
});
