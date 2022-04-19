import Button from "packages/Buttons/src/Button.vue";

export default {
  title: 'Buttons/Button',
  component: Button
};

export const DefaultButton = () => ({
  components: { Button },
  template: '<Button @click="clickBtn">button</Button>',
});
