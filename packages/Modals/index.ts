import { App, Plugin } from 'vue';
import SimpleModal from './src/SimpleModal.vue';
import ModalDrawer from './src/ModalDrawer.vue';
import { fadeDuration } from './src/index'

export const ModalsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-simple-modal', SimpleModal);
    app.component('astar-modal-drawer', ModalDrawer);
  },
};

export {
  SimpleModal,
  ModalDrawer,
  fadeDuration
};
