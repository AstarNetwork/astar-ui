import IconNetwork from "packages/Icons/src/IconNetwork.vue";

export default {
  title: 'Icons/IconNetwork',
  component: IconNetwork
};

export const DefaultIcon = () => ({
  components: { IconNetwork },
  template: '<IconNetwork />',
});
