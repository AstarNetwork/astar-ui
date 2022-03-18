import { App, Plugin } from 'vue';
import TestButton from './src/index.vue';

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('my-button', TestButton);
  },
};

export { TestButton };