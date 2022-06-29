import IconHelp from "packages/Icons/src/IconHelp.vue";

export default {
  title: 'Icons/IconHelp',
  component: IconHelp
};

export const DefaultIcon = () => ({
  components: { IconHelp },
  template: '<IconHelp />',
});
