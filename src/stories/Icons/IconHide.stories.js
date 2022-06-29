import IconHide from "packages/Icons/src/IconHide.vue";

export default {
  title: 'Icons/IconHide',
  component: IconHide
};

export const DefaultIcon = () => ({
  components: { IconHide },
  template: '<IconHide />',
});
