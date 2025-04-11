// webpack.config.js
module.exports = {
  // other configuration...
  plugins: [
    new webpack.DefinePlugin({
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false', // Disable hydration mismatch details in production
    }),
  ],
};
