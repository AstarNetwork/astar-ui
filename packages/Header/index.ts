import { App, Plugin } from 'vue';
import Header from './src/Header.vue';
import ConnectionIndicator from './src/ConnectionIndicator.vue';
 
export const HeaderPlugin: Plugin = {
  install(app: App) {
    app.component('astar-header', Header);
    app.component('astar-connection-indicator', ConnectionIndicator);
  },
};

export {
  Header,
  ConnectionIndicator
};
