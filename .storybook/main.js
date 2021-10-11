// module.exports = {
//   stories: [],
//   addons: ['@storybook/addon-essentials'],
//   // uncomment the property below if you want to apply some webpack config globally
//   // webpackFinal: async (config, { configType }) => {
//   //   // Make whatever fine-grained changes you need that should apply to all storybook configs
//
//   //   // Return the altered config
//   //   return config;
//   // },
// };

const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: [],
  addons: [
    "storybook-addon-performance/register",
    "@storybook/addon-a11y",
    "@storybook/addon-toolbars",
  ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    }
  },
}
