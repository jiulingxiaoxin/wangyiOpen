const { 
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra');

const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    '@': path.resolve(__dirname, './src/components'),
    pages:path.resolve(__dirname,'./src/pages'),
    styles:path.resolve(__dirname,'./src/styles'),
    utils:path.resolve(__dirname,'./src/utils')
  }),

  addDecoratorsLegacy()
);