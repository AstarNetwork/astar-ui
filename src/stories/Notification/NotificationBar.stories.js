import NotificationBar from "packages/Notification/src/NotificationBar.vue";

export default {
  title: 'Notification/NotificationBar',
  component: NotificationBar,
};

const Template = (args) => ({
  components: { NotificationBar },
  setup() {
    return { args };
  },
  template: '<NotificationBar v-bind="args"><div>Test</div></NotificationBar>',
});

export const DefaultNotificationSuccess = Template.bind({});
DefaultNotificationSuccess.args = {
  show: true,
  alertType: 'success'
};

export const DefaultNotificationWarning = Template.bind({});
DefaultNotificationWarning.args = {
  show: true,
  alertType: 'warning'
};

export const DefaultNotificationError = Template.bind({});
DefaultNotificationError.args = {
  show: true,
  alertType: 'error'
};
