import IconValid from "packages/Icons/src/IconValid.vue";

export default {
  title: "Icons/IconValid",
  component: IconValid,
};

export const DefaultIcon = () => ({
  components: { IconValid },
  template: "<IconValid />",
});
