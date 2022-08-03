import IconSync from "packages/Icons/src/IconSync.vue";

export default {
  title: "Icons/IconSync",
  component: IconSync,
};

export const DefaultIcon = () => ({
  components: { IconSync },
  template: "<IconSync />",
});
