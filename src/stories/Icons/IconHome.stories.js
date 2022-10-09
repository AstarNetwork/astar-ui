import IconHome from "packages/Icons/src/IconHome.vue";

export default {
  title: "Icons/IconHome",
  component: IconHome,
};

export const DefaultIcon = () => ({
  components: { IconHome },
  template: "<IconHome />",
});
