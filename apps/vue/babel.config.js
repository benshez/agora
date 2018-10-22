module.exports = function(api) {
  api.cache(true);

  return {
    presets: [['@babel/env', { targets: { esmodules: true } }]],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./app'],
          alias: {
            'components/*': './app/components'
          }
        }
      ]
    ]
  };
};
