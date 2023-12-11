import IconHeart from "packages/Icons/src/IconHeart.vue";

export default {
  title: "Icons/IconHeart",
  component: IconHeart,
};

export const DefaultIcon = () => ({
  components: { IconHeart },
  template: "<IconHeart />",
});
