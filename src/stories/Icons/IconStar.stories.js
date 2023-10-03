import IconStar from "packages/Icons/src/IconStar.vue";

export default {
  title: 'Icons/IconStar',
  component: IconStar
};

export const DefaultIcon = () => ({
  components: { IconStar },
  template: '<IconStar />',
});
