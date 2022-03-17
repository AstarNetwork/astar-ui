import { App, Plugin } from 'vue';
import Text from './src/Text.vue';

export const TextPlugin: Plugin = {
  install(app: App) {
    app.component('astar-text', Text);
  },
};

export { Text };