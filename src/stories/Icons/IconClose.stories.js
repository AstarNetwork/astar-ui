import IconClose from "packages/Icons/src/IconClose.vue";

export default {
  title: 'Icons/IconClose',
  component: IconClose
};

export const DefaultIcon = () => ({
  components: { IconClose },
  template: '<IconClose />',
});
