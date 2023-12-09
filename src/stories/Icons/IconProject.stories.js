import IconProject from "packages/Icons/src/IconProject.vue";

export default {
  title: "Icons/IconProject",
  component: IconProject,
};

export const DefaultIcon = () => ({
  components: { IconProject },
  template: "<IconProject />",
});
