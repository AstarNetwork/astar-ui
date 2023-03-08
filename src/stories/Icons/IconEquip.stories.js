import IconEquip from "packages/Icons/src/IconEquip.vue";

export default {
  title: "Icons/IconEquip",
  component: IconEquip,
};

export const DefaultIcon = () => ({
  components: { IconEquip },
  template: "<IconEquip />",
});
