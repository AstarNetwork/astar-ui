import { App, Plugin } from 'vue';
import Spinner from './src/Spinner.vue';

export const SpinnerPlugin: Plugin = {
  install(app: App) {
    app.component('astar-spinner', Spinner);
  },
};

export { Spinner };