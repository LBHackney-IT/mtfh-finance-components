module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  // REF https://github.com/storybookjs/storybook/issues/15336
  typescript: { reactDocgen: false },
  webpackFinal: async (config) => {
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'));

    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query,
    };

    // Merge our rule with existing assetLoader rules
    //  config.module.rules.unshift({
      //  test: /\.svg$/,
      //  use: ['@svgr/webpack', assetLoader],
    //  });
    return config;
  },
};
