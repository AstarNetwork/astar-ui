/* eslint-disable */

import { App, Plugin } from 'vue';

{{ importPlugins }}

const AstarPlugin: Plugin = {
  install(app: App) {
    {{ installPlugins }}
  },
};

export default AstarPlugin;

{{ exportPlugins }}