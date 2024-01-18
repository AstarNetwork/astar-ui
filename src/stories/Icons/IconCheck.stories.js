import IconCheck from "packages/Icons/src/IconCheck.vue";

export default {
  title: "Icons/IconCheck",
  component: IconCheck,
};

export const DefaultIcon = () => ({
  components: { IconCheck },
  template: "<IconCheck />",
});
