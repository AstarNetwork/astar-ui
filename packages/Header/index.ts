import { App, Plugin } from 'vue';
import Header from './src/Header.vue';
 
export const HeaderPlugin: Plugin = {
  install(app: App) {
    app.component('astar-header', Header);
  },
};

export {
  Header
};
