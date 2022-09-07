import RadioBtn from "packages/Buttons/src/RadioBtn.vue";

export default {
  title: 'Buttons/RadioBtn',
  component: RadioBtn
};

const Template = () => ({
  components: { RadioBtn },
  template: '<RadioBtn @change="changeRadio" />',
});

export const DefaultButton = Template.bind({});

// export const DefaultButtonDark = Template.bind({});
// DefaultButtonDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];