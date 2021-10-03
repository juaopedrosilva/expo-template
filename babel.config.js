/* ./babel.config.js */
/* eslint-disable */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@global': './src/global',
            '@pages': './src/pages',
          },
        },
      ],
    ],
  }
}
