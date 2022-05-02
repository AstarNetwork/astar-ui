import RadioBtn from "packages/Buttons/src/RadioBtn.vue";

export default {
  title: 'Buttons/RadioBtn',
  component: RadioBtn
};

export const DefaultButton = () => ({
  components: { RadioBtn },
  template: '<RadioBtn @change="changeRadio" />',
});
