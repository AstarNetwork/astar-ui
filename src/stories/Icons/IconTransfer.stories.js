import IconTransfer from "packages/Icons/src/IconTransfer.vue";

export default {
  title: 'Icons/IconTransfer',
  component: IconTransfer
};

export const DefaultIcon = () => ({
  components: { IconTransfer },
  template: '<IconTransfer />',
});
