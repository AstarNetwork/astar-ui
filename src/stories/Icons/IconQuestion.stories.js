import IconQuestion from "packages/Icons/src/IconQuestion.vue";

export default {
  title: 'Icons/IconQuestion',
  component: IconQuestion
};

export const DefaultIcon = () => ({
  components: { IconQuestion },
  template: '<IconQuestion />',
});
