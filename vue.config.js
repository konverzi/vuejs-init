module.exports = {
  css: {
    //extract: true
    extract: {
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`
    }
  },
  configureWebpack: {
    output: {
      filename: "load.js"
    }
  },
  productionSourceMap: false,
  chainWebpack: config => {
    config.output.chunkFilename(`js/[id].js`);
    // config.optimization.delete('splitChunks')
    // config.optimization.splitChunks(false);
  }
};
