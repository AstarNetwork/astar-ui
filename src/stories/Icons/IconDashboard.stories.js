import IconDashboard from "packages/Icons/src/IconDashboard.vue";

export default {
  title: 'Icons/IconDashboard',
  component: IconDashboard
};

export const DefaultIcon = () => ({
  components: { IconDashboard },
  template: '<IconDashboard />',
});
