import IrregularButton from "packages/Buttons/src/IrregularButton.vue";

export default {
  title: 'Buttons/IrregularButton',
  component: IrregularButton
};

const Template = (args) => ({
  components: { IrregularButton },
  setup() {
    return { args };
  },
  template: '<IrregularButton v-bind="args">Button</IrregularButton>',
});

export const DefaultButton24 = Template.bind({});
DefaultButton24.args = {
  disabled: false,
  width: 97,
  height: 24,
};

export const DefaultButtonDark = Template.bind({});
DefaultButtonDark.args = DefaultButton24.args;
DefaultButtonDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];

const Template2 = (args) => ({
  components: { IrregularButton },
  setup() {
    return { args };
  },
  template: '<IrregularButton v-bind="args"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /> </svg></IrregularButton>'
});

export const RoundButton = Template2.bind({});
RoundButton.args = {
  disabled: false,
  width: 32,
  height: 32
};