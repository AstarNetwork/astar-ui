import SmallButton from "packages/Buttons/src/SmallButton.vue";

export default {
  title: 'Buttons/SmallButton',
  component: SmallButton
};

const Template = (args) => ({
  components: { SmallButton },
  setup() {
    return { args };
  },
  template: '<SmallButton v-bind="args">Button</SmallButton>',
});

export const DefaultButton20 = Template.bind({});
DefaultButton20.args = {
  disabled: false,
};

// export const DefaultButton20Dark = Template.bind({});
// DefaultButton20Dark.args = DefaultButton20.args;
// DefaultButton20Dark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];
