import { App, Plugin } from 'vue';
import NotificationSuccess from './src/NotificationSuccess.vue';
import NotificationWarning from './src/NotificationWarning.vue';
import NotificationError from './src/NotificationError.vue';

export const NotificationPlugin: Plugin = {
  install(app: App) {
    app.component('astar-notification-success', NotificationSuccess);
    app.component('astar-notification-warning', NotificationWarning);
    app.component('astar-notification-error', NotificationError);
  },
};

export { 
  NotificationSuccess,
  NotificationWarning,
  NotificationError,
};