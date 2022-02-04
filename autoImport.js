const postcss = require('postcss')

module.exports = () => {
  return {
    postcssPlugin: 'auto-importer',
    Once(root) {
     root.prepend(postcss.atRule({ name: 'import', params: '"src/globals.scss"' }))
    },
  };
};
module.exports.postcss = true;
