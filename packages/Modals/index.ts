import { App, Plugin } from 'vue';
import SimpleModal from './src/SimpleModal.vue';
import { fadeDuration } from './src/index'

export const ModalsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-simple-modal', SimpleModal);
  },
};

export {
  SimpleModal,
  fadeDuration
};
