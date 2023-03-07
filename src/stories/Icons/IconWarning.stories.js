import IconWarning from "packages/Icons/src/IconWarning.vue";

export default {
  title: "Icons/IconWarning",
  component: IconWarning,
};

export const DefaultIcon = () => ({
  components: { IconWarning },
  template: "<IconWarning />",
});
