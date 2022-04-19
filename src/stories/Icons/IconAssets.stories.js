import IconAssets from "packages/Icons/src/IconAssets.vue";

export default {
  title: 'Icons/IconAssets',
  component: IconAssets
};

export const DefaultIcon = () => ({
  components: { IconAssets },
  template: '<IconAssets />',
});
