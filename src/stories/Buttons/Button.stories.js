import Button from "packages/Buttons/src/Button.vue";

export default {
  title: 'Buttons/Button',
  component: Button
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">Button</Button>',
});

export const DefaultButton32 = Template.bind({});
DefaultButton32.args = {
  disabled: false,
  width: 77,
  height: 32,
};

// export const DefaultButtonDark = Template.bind({});
// DefaultButtonDark.args = DefaultButton32.args;
// DefaultButtonDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];

export const Button24 = Template.bind({});
Button24.args = {
  disabled: false,
  width: 97,
  height: 24,
};

export const Button52 = Template.bind({});
Button52.args = {
  disabled: false,
  width: 200,
  height: 57,
};

const Template2 = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /> </svg></Button>'
});

export const RoundButton = Template2.bind({});
RoundButton.args = {
  disabled: false,
  width: 32,
  height: 32
};