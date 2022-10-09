import IconDesktop from "packages/Icons/src/IconDesktop.vue";

export default {
  title: "Icons/IconDesktop",
  component: IconDesktop,
};

export const DefaultIcon = () => ({
  components: { IconDesktop },
  template: "<IconDesktop />",
});
