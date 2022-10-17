import { App, Plugin } from 'vue';
import SimpleModal from './src/SimpleModal.vue';
import ModalDrawer from './src/ModalDrawer.vue';
import DefaultModal from './src/DefaultModal.vue';
import { fadeDuration } from './src/index'

export const ModalsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-simple-modal', SimpleModal);
    app.component('astar-modal-drawer', ModalDrawer);
    app.component('astar-default-modal', DefaultModal);
  },
};

export {
  SimpleModal,
  ModalDrawer,
  DefaultModal,
  fadeDuration
};
