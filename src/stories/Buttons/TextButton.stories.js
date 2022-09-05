import TextButton from "packages/Buttons/src/TextButton.vue";

export default {
  title: 'Buttons/TextButton',
  component: TextButton
};

const Template = (args) => ({
  components: { TextButton },
  setup() {
    return { args };
  },
  template: '<TextButton v-bind="args">Button</TextButton>',
});

export const TextDefaultButton = Template.bind({});
TextDefaultButton.args = {
  disabled: false,
};

// export const TextDefaultButtonDark = Template.bind({});
// TextDefaultButtonDark.args = TextDefaultButton.args;
// TextDefaultButtonDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];
