import IconExpand from "packages/Icons/src/IconExpand.vue";

export default {
  title: "Icons/IconExpand",
  component: IconExpand,
};

export const DefaultIcon = () => ({
  components: { IconExpand },
  template: "<IconExpand />",
});
