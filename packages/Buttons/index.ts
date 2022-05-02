import { App, Plugin } from 'vue';
import ActionBtn from './src/ActionBtn.vue';
import Button from './src/Button.vue';
import RadioBtn from './src/RadioBtn.vue';
import SideNav from './src/SideNav.vue';
 
export const ButtonsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-action-btn', ActionBtn);
    app.component('astar-button', Button);
    app.component('astar-radio-btn', RadioBtn);
    app.component('astar-side-nav', SideNav);
  },
};

export {
  ActionBtn,
  Button,
  RadioBtn,
  SideNav
};
