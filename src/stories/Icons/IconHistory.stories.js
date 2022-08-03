import IconHistory from "packages/Icons/src/IconHistory.vue";

export default {
  title: "Icons/IconHistory",
  component: IconHistory,
};

export const DefaultIcon = () => ({
  components: { IconHistory },
  template: "<IconHistory />",
});
