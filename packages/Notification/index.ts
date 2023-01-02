import { App, Plugin } from 'vue';
import NotificationBar from './src/NotificationBar.vue';

export const NotificationPlugin: Plugin = {
  install(app: App) {
    app.component('astar-notification-bar', NotificationBar);
  },
};

export { 
  NotificationBar
};