import ActionBtn from "packages/Buttons/src/ActionBtn.vue";

export default {
  title: 'Buttons/ActionBtn',
  component: ActionBtn
};

export const DefaultButton = () => ({
  components: { ActionBtn },
  template: '<ActionBtn @click="clickBtn">button</ActionBtn>',
});
