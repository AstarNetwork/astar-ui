const path = require('path');

module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-dark-mode",
    "@storybook/addon-mdx-gfm"
  ],

  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },

  viteFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "../src"),
      packages: path.resolve(__dirname, '../packages'),
    };

    return config;
  },

  docs: {
    autodocs: true
  }
};
