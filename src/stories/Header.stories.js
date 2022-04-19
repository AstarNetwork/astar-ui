import Header from "../../packages/Header/src/Header.vue";

export default {
  title: 'Header',
  component: Header,
};

const Template = (args) => ({
  components: { Header },
  setup() {
    return { ...args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<Header :title="title" />',
});

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: 'header title',
};
