import IconDelete from "packages/Icons/src/IconDelete.vue";

export default {
  title: "Icons/IconDelete",
  component: IconDelete,
};

export const DefaultIcon = () => ({
  components: { IconDelete },
  template: "<IconDelete />",
});
