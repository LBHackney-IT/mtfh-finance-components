const ReactDocgenTypescriptPlugin = require('react-docgen-typescript-plugin').default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  babel: async (options) => {
    options.plugins.push('babel-plugin-inline-react-svg');
    return options;
  },
  plugins: [new ReactDocgenTypescriptPlugin()],
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
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
};
