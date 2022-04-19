import ConnectionIndicator from "packages/Header/src/ConnectionIndicator.vue";

export default {
  title: 'Header/ConnectionIndicator',
  component: ConnectionIndicator,
};

const Template = (args) => ({
  components: { ConnectionIndicator },
  setup() {
    return { ...args };
  },
  template: '<ConnectionIndicator :connectionType="connectedType" />',
});

export const Connected = Template.bind({});
Connected.args = {
  connectedType: 'connected',
};

export const Connecting = Template.bind({});
Connecting.args = {
  connectedType: 'connecting',
};

export const Offline = Template.bind({});
Offline.args = {
  connectedType: 'offline',
};