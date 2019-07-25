module.exports = {
  env: {
    test: {
      plugins: [
        [
          '@babel/plugin-transform-modules-commonjs',
          {
            allowTopLevelThis: true
          }
        ]
      ],
      presets: [['@babel/preset-env', { targets: { node: 'current' }, modules: 'commonjs' }]]
    }
  }
};
