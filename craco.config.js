const path = require(`path`);

module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: process.env.REACT_APP_PROXY_URL,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/api": ''
  //       }
  //     }
  //   },
  // },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};
