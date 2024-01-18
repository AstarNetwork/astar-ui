import { App, Plugin } from 'vue';
import SimpleModal from './src/SimpleModal.vue';
import ModalDrawer from './src/ModalDrawer.vue';
import DefaultModal from './src/DefaultModal.vue';
import { fadeDuration } from './src/index';
import IconBackWithColor from './src/IconBackWithColor.vue';

export const ModalsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-simple-modal', SimpleModal);
    app.component('astar-modal-drawer', ModalDrawer);
    app.component('astar-default-modal', DefaultModal);
    app.component('astar-icon-back-with-color', IconBackWithColor);
  },
};

export { SimpleModal, ModalDrawer, DefaultModal, fadeDuration, IconBackWithColor };
