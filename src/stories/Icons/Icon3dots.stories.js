import Icon3dots from "packages/Icons/src/Icon3dots.vue";

export default {
  title: 'Icons/Icon3dots',
  component: Icon3dots
};

export const DefaultIcon = () => ({
  components: { Icon3dots },
  template: '<Icon3dots />',
});
