import IconInfo from "packages/Icons/src/IconInfo.vue";

export default {
  title: "Icons/IconInfo",
  component: IconInfo,
};

export const DefaultIcon = () => ({
  components: { IconInfo },
  template: "<IconInfo />",
});
