import IconGroup from "packages/Icons/src/IconGroup.vue";

export default {
  title: "Icons/IconGroup",
  component: IconGroup,
};

export const DefaultIcon = () => ({
  components: { IconGroup },
  template: "<IconGroup />",
});
