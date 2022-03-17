import { App, Plugin } from 'vue';
import IconCloseBtn from './src/IconCloseBtn.vue';
import IconCopyBtn from './src/IconCopyBtn.vue';
import IconShareBtn from './src/IconShareBtn.vue';
 
export const IconButtonsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-icon-close-btn', IconCloseBtn);
    app.component('astar-icon-copy-btn', IconCopyBtn);
    app.component('astar-icon-share-btn', IconShareBtn);
  },
};

export {
  IconCloseBtn,
  IconCopyBtn,
  IconShareBtn
};
