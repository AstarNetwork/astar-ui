import IconBridge from "packages/Icons/src/IconBridge.vue";

export default {
  title: 'Icons/IconBridge',
  component: IconBridge
};

export const DefaultIcon = () => ({
  components: { IconBridge },
  template: '<IconBridge />',
});
